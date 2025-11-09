# Portafolio de Construcción 

Este proyecto es un portafolio web para mostrar proyectos de construcción. Está desarrollado con una arquitectura de stack completo (fullstack) que incluye un backend en Node.js con Express y un frontend en React con TypeScript.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

```
├── backend/     # Servidor API REST con Express y MongoDB
└── frontend/    # Aplicación cliente con React y TypeScript
```

## Tecnologías Utilizadas

### Backend

- **Node.js** - Entorno de ejecución para JavaScript
- **Express** - Framework web para Node.js
- **MongoDB** - Base de datos NoSQL (a través de Mongoose)
- **TypeScript** - Superset tipado de JavaScript
- **JWT** - JSON Web Tokens para autenticación
- **Bcrypt** - Encriptación de contraseñas
- **Multer** - Middleware para manejo de archivos
- **Cloudinary** - Servicio de almacenamiento de imágenes en la nube
- **Zod** - Validación de esquemas

### Frontend

- **React** - Biblioteca para construir interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Herramienta de construcción y desarrollo
- **React Router** - Enrutamiento para aplicaciones React
- **Chakra UI** - Biblioteca de componentes UI
- **React Query** - Gestión de estado del servidor y caché
- **React Hook Form** - Manejo de formularios
- **Axios** - Cliente HTTP para realizar peticiones
- **Zod** - Validación de esquemas
- **Embla Carousel** - Componente de carrusel para imágenes

## Características

- **Autenticación de usuarios** - Sistema de login para administradores
- **Panel de administración** - Gestión de proyectos (CRUD)
- **Visualización de proyectos** - Listado y detalle de proyectos de construcción
- **Carga de imágenes** - Subida y almacenamiento de imágenes en Cloudinary
- **Diseño responsive** - Adaptable a diferentes dispositivos

## Rutas Principales

### Frontend

- `/` - Página de inicio
- `/projects` - Listado de proyectos
- `/project/detail/:id` - Detalle de un proyecto específico
- `/login` - Página de inicio de sesión
- `/panel-admin` - Panel de administración (protegido)

### Backend API

- `/api/projects` - CRUD de proyectos
- `/api/auth` - Autenticación (login, logout, perfil)
- `/api/upload` - Subida de archivos

## Instalación y Configuración

### Requisitos Previos

- Node.js (versión recomendada: 18.x o superior)
- MongoDB (local o servicio en la nube)
- Cuenta en Cloudinary para almacenamiento de imágenes

### Configuración del Backend

1. Navegar al directorio del backend:
   ```bash
   cd backend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo `.env` basado en `.env.example` con las siguientes variables:
   ```
   PORT=3000
   MONGODB_URI=tu_uri_de_mongodb
   JWT_SECRET=tu_clave_secreta_jwt
   CLOUDINARY_CLOUD_NAME=tu_cloud_name
   CLOUDINARY_API_KEY=tu_api_key
   CLOUDINARY_API_SECRET=tu_api_secret
   ```

4. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

### Configuración del Frontend

1. Navegar al directorio del frontend:
   ```bash
   cd frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Credenciales de prueba
- Usuario: admin@test.com
- Contraseña: admin123

## Autor

- **Marlon Mosquera Rivera** - Desarrollador y Propietario del Portafolio

