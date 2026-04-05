export interface Bus {
    id: number;
    numeroBus: number;
    placa: string;
    fechaCreacion: string;
    caracteristicas: string;
    nombreMarca: string;
    activo: boolean;
}

export interface PageResponse<T> {
    content: T[];
    page: {
        size: number;
        number: number;
        totalElements: number;
        totalPages: number;
    }
}