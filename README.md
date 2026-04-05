# Reto Tecnico Civa - Desarrollador Full Stack

Este proyecto es una solución full-stack desarrollada como parte de un reto técnico. El objetivo es administrar y visualizar los buses de manera segura, eficiente y con soporte para grandes volúmenes de datos.

---
## Stack Tecnológico
### **Backend**
- **Lenguaje:** Java 21+
- **Framework:** Spring Boot 3.4.1
- **Seguridad:** Spring Security (Basic Auth)
- **Base de Datos:** PostgreSQL 15 (Docker)
- **Persistencia:** Spring Data JPA + Hibernate
### **Frontend**
- **Framework:** React 18 (Vite)
- **Lenguaje:** TypeScript
- **Enrutamiento:** React Router Dom
- **Estilos:** Vanilla CSS
---

## Características Principales

### Backend (Spring Boot)
*   **API RESTful:** Endpoints seguros y bien documentados.
*   **Seguridad:** Autenticación básica (Basic Auth) y protección contra CSRF.
*   **Paginación:** Implementación de `Pageable` para manejar grandes catálogos sin afectar el rendimiento.
*   **Manejo de Errores:** `GlobalExceptionHandler` para respuestas de error consistentes.

### Frontend (React)
*   **Paginación Dinámica:** Navegación fluida entre páginas integrada con el Backend.
*   **Detalles en Nueva Pestaña:** Visualización profunda de cada bus usando `react-router-dom`.
*   **Tipado Seguro:** Uso de Interfaces TypeScript para evitar errores en tiempo de ejecución.

### Infraestructura (Docker)
*   **Contenedores:** Entornos aislados para la API y la Base de Datos.
*   **Persistencia:** La base de datos mantiene los datos incluso si el contenedor se reinicia.
*   **Configuración Sencilla:** Un solo comando para levantar todo el stack.


## Estructura del Proyecto

```
Prueba-Tecnica-Civa/
├── Backend/              # Lógica de negocio y API (Spring Boot)
│   ├── src/main/java/com/civa/bus_api/
│   │   ├── config/       # Configuración (Security, CORS)
│   │   ├── domain/       # Entidades y DTOs
│   │   ├── repository/   # Acceso a datos (JPA)
│   │   ├── service/      # Lógica de negocio
│   │   └── controller/   # Endpoints de la API
│   └── pom.xml           # Dependencias de Maven
│
├── Frontend/             # Interfaz de usuario (React + Vite)
│   ├── src/
│   │   ├── components/   # BusTable (Lista) y BusDetail (Detalle)
│   │   ├── services/     # busService (Llamadas fetch al Backend)
│   │   ├── types/        # Interfaces TypeScript (Bus, PageResponse)
│   │   └── App.tsx       # Configuración de Rutas y Componente Principal
│   └── package.json      # Dependencias de React y Scripts
│
├── docker-compose.yml    # Orquestación de contenedores
└── README.md             # Documentación del proyecto
```

---
## Cómo Ejecutar el Proyecto
### **1. Requisitos Previos**
- Docker Desktop instalado y corriendo.
- Node.js (v18 o superior).
- JDK 17 o superior.
### **2. Levantar la Base de Datos**
Asegúrate de estar en la raíz del proyecto y ejecuta:
```bash
docker-compose up -d
```
### **3. Levantar el Backend**
- Abre la carpeta /Backend en tu IDE (IntelliJ o VS Code).
- Asegúrate de tener configurado el archivo .env en la raíz (o que las variables de entorno coincidan).
- Ejecuta la clase BusApiApplication.java.

### **4. Levantar el Frontend**
Abre una terminal nueva en la carpeta /Frontend y ejecuta:
```bash
npm install
npm run dev
```
Accede a la aplicación en http://localhost:5173

### **Credenciales de acceso:**
- Usuario: admin
- Contraseña: admin_civa
