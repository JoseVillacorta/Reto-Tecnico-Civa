const BASE_URL = 'http://localhost:8080/bus';

// Generamos el Header de Autorizacion basica
const AUTH_HEADER = 'Basic ' + btoa('admin:admin_civa');

export const busService = {
    // Funcion para obtener buses paginados
    getAll: async (page: number = 0, size: number = 10) => {
        const response = await fetch(`${BASE_URL}?page=${page}&size=${size}`, {
            headers: {
                'Authorization': AUTH_HEADER,
            },
        });

        if (!response.ok) {
            throw new Error('Error al conectar con el servidor');
        }

        return response.json();
    },

    getById: async (id: number) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            headers: {
                'Authorization': AUTH_HEADER,
            },
        });
        if (!response.ok) {
            throw new Error('No se pudo encontrar el bus');
        }
        return response.json();
    }
};