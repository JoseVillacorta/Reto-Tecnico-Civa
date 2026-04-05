# Backend - API de Buses (Spring Boot 3)

## Descripción
Este es el módulo del servidor que gestiona la lógica de negocio y el acceso a datos de los buses.

## Tecnologías e Infraestructura
- **Java:** Versión 17 o superior.
- **Framework:** Spring Boot 3.4.1.
- **Base de Datos:** PostgreSQL 15 (Dockerizado).
- **Seguridad:** Spring Security (Basic Auth + CORS).
- **Persistencia:** Spring Data JPA + Hibernate.

## Arquitectura
Se ha utilizado una **Arquitectura en Capas** para mantener la alta cohesión y bajo acoplamiento:
*   **Controller:** Gestión de endpoints REST.
*   **Service:** Contiene la lógica de negocio y mapeo de Entidades a DTOs.
*   **Repository:** Gestión de consultas a la base de datos.
*   **Domain (Entity/DTO):** Entidades (`Bus`, `Marca`) y objetos de transferencia (`BusDTO`).
*   **Config:** Configuración de seguridad, CORS y soporte de paginación.

## Seguridad y Autenticación
Los endpoints están protegidos mediante **Basic Authentication**.

## Cómo Ejecutar
1. Inicia la base de datos con Docker: `docker-compose up -d`.
2. Compila el proyecto: `./mvnw clean install` (o desde tu IDE).
3. Ejecuta la aplicación: `BusApiApplication.java`.

## Endpoints
*   `GET /bus`: Lista paginada de buses.
*   `GET /bus/{id}`: Información detallada de un bus específico por su ID.