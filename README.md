# Reto Tecnico Civa - Desarrollador Full Stack

Este proyecto es una solución full-stack desarrollada como parte de un reto técnico para la empresa **CIVA**. El objetivo es administrar y visualizar la flota de buses de manera segura, eficiente y con soporte para grandes volúmenes de datos.

## Tecnologías Principales
*   **Backend:** Java (Spring Boot 3 + Spring Security).
*   **Frontend:** React 18 + TypeScript (en desarrollo).
*   **Base de Datos:** PostgreSQL 15.
*   **Infraestructura:** Docker & Docker Compose.

## Características Principales

### Backend (Spring Boot)
*   **API RESTful:** Endpoints seguros y bien documentados.
*   **Seguridad:** Autenticación básica (Basic Auth) y protección contra CSRF.
*   **Paginación:** Implementación de `Pageable` para manejar grandes catálogos sin afectar el rendimiento.
*   **Manejo de Errores:** `GlobalExceptionHandler` para respuestas de error consistentes.

### Frontend (React)


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
├── Frontend/             
│   └── 
│
├── docker-compose.yml    # Orquestación de contenedores
└── README.md             # Documentación del proyecto
```
