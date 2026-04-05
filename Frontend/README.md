# Frontend - Gestión de Buses CIVA (React 18)
Esta es la interfaz de usuario desarrollada con **React 18** y **TypeScript** para la visualización y gestión de buses.
## Tecnologías Utilizadas
- **React 18:** Biblioteca principal para la UI por componentes.
- **Vite:** Herramienta de construcción ultrarrápida.
- **TypeScript:** Tipado estricto para un desarrollo más robusto y sin errores.
- **React Router Dom:** Gestión de rutas para la navegación entre la tabla y el detalle de cada bus.
- **CSS (Custom):** Diseño limpio y responsivo.

## Instalación y Ejecución
1.  **Navegar a la carpeta:**
    ```bash
    cd Frontend
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Lanzar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
4.  **Acceder:** Abre tu navegador en `http://localhost:5173`
---

## Estructura del Proyecto
- **`/src/components`**: Contiene los componentes principales de la interfaz:
  - `BusTable.tsx`: Tabla dinámica con paginación integrada.
  - `BusDetail.tsx`: Vista detallada de un bus específico.
- **`/src/services`**: Lógica de comunicación con el Backend:
  - `busService.ts`: Centraliza las llamadas `fetch` con autenticación Basic Auth.
- **`/src/types`**: Definición de contratos de datos para asegurar el tipado correcto de la API.
- **`/src/App.tsx`**: Configura las rutas navegables de la aplicación.
---

## Nota sobre Seguridad y Conectividad
La aplicación consume datos del Backend en `http://localhost:8080`. Asegúrate de que el Backend esté encendido para que el flujo de datos sea exitoso. Las peticiones incluyen cabeceras de **Basic Auth** configuradas automáticamente en el servicio.

---