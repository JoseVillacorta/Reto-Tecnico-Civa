# Backend - API de Buses (Spring Boot 3)

## Descripción
Este es el módulo del servidor que gestiona la lógica de negocio y el acceso a datos de los buses.

## Arquitectura
Se ha utilizado una **Arquitectura en Capas** simplificada para garantizar la separación de responsabilidades:
*   **Controller:** Gestión de endpoints REST.
*   **Service:** Implementación de la lógica de negocio y mapeo a DTOs.
*   **Repository:** Capa de persistencia utilizando Spring Data JPA.
*   **Domain (Entity/DTO):** Modelado de datos y transferencia.
*   **Config/Security:** Centralización de la seguridad y configuración de CORS.

### Endpoints:
*   `GET /bus`: Obtiene la lista paginada de todos los buses.
*   `GET /bus/{id}`: Obtiene el detalle de un bus por su ID.