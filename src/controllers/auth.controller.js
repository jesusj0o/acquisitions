import logger from '#config/logger.js';
import { createUser } from '#services/auth.service.js';
import { formatValidationError } from '#utils/format.js';
import { signupSchema } from '#validations/auth.validation.js';
import { jwtoken } from '#utils/jwt.js';
import { cookies } from '#utils/cookies.js';

export const signup = async (req, res, next) => {
  try {
    const validationRestult = signupSchema.safeParse(req.body);

    if (!validationRestult.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: formatValidationError(validationRestult.error),
      });
    }

    const { name, email, password, role } = validationRestult.data;

    //AUTH SERVICE
    const user = await createUser({ name, email, password, role });
    const token = jwtoken.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    cookies.set(res, 'token', token);

    logger.info(`User registered successfully: ${email}`);
    res.status(201).json({
      message: 'User registered',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (e) {
    logger.error('Signup Error', e);

    if (e.meesage === 'User with this email already exists!') {
      return res.status(409).json({ error: 'Email already exist' });
    }

    next(e);
  }
};
