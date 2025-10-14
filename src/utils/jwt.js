import logger from '#config/logger.js';
import jwt from 'jsonwebtoken'; 


const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-change-in-prod';
const JWT_EXPIRES_IN = '1d';


export const jwtoken = { 
    sign: (payload) => {
        try {
            return jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
        } catch (e) {
            logger.error('Failed to authenticate token', error);
            throw new Error('Failed to authenticate token');
        }
    },
    verify: (token) => {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (e) {
            logger.error('Failed to authenticate token', e);
            throw new Error('Failed to authenticate token');
        }
    } 
}