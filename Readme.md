```markdown
# API Full Stack

API REST completa con Docker, Kubernetes, logging avanzado y CI/CD automatizado mediante GitHub Actions.

## 🚀 Tecnologías

- **Framework**: Express.js
- **Base de datos**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Logging**: Morgan + Winston
- **Calidad de código**: ESLint + Prettier
- **Containerización**: Docker
- **Orquestación**: Kubernetes
- **CI/CD**: GitHub Actions

## 📋 Prerequisitos

- Node.js (v18 o superior)
- Docker y Docker Compose
- Cuenta en Neon PostgreSQL
- kubectl (para deployment en Kubernetes)

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/jesusj0o/acquisitions.git
cd acquicitions
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Copia el archivo `.env.example` a `.env` y configura las variables según tu entorno:

```bash
cp .env.example .env
```

**⚠️ IMPORTANTE**: Asegúrate de configurar todas las variables en el archivo `.env` según se especifica en `.env.example`

4. **Generar y ejecutar migraciones**
```bash
npm run db:generate
npm run db:migrate
```

## 🏃 Scripts Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor en modo desarrollo con hot-reload automático.

### Linting y Formato
```bash
npm run lint          # Verifica errores de ESLint
npm run lint:fix      # Corrige automáticamente errores de ESLint
npm run format        # Formatea el código con Prettier
npm run format:check  # Verifica el formato sin modificar archivos
```

### Base de Datos
```bash
npm run db:generate   # Genera migraciones de la base de datos
npm run db:migrate    # Ejecuta las migraciones pendientes
npm run db:studio     # Abre Drizzle Studio para gestión visual de DB
```

## 🐳 Docker

### Construir la imagen
```bash
docker build -t api-full .
```

### Ejecutar con Docker Compose
```bash
docker-compose up -d
```

## ☸️ Kubernetes

### Aplicar configuraciones
```bash
kubectl apply -f k8s/
```

### Verificar deployment
```bash
kubectl get pods
kubectl get services
```

## 📝 Logging

La aplicación utiliza un sistema de logging robusto:

- **Morgan**: Logging de requests HTTP
- **Winston**: Logging avanzado con múltiples niveles y transportes

Los logs se pueden configurar mediante variables de entorno.

## 🔄 CI/CD

El proyecto incluye workflows de GitHub Actions para:

- ✅ Linting y verificación de formato
- 🧪 Ejecución de tests
- 🏗️ Build de la imagen Docker
- 🚀 Deploy automático

Los workflows se ejecutan automáticamente en cada push y pull request.

## 🛠️ Desarrollo

### Antes de hacer commit

Asegúrate de ejecutar:
```bash
npm run lint:fix
npm run format
```

### Mejores prácticas

1. Mantén el código formateado con Prettier
2. Sigue las reglas de ESLint
3. Escribe commits descriptivos
4. Actualiza la documentación cuando sea necesario

## 📄 Variables de Entorno

Revisa el archivo `.env.example` para ver todas las variables requeridas. Nunca subas el archivo `.env` al repositorio.

## 👥 Autores

[Jesus Jo]

---

**Nota**: Recuerda configurar correctamente el archivo `.env` antes de ejecutar la aplicación.
```
