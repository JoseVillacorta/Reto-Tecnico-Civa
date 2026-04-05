import { useEffect, useState } from 'react';
import type { Bus, PageResponse } from '../types';
import { busService } from '../services/busService';
import './BusTable.css';

export const BusTable = () => {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // NUEVOS ESTADOS para Paginación
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data: PageResponse<Bus> = await busService.getAll(currentPage, 10);
                setBuses(data.content);
                setTotalPages(data.page.totalPages);
                setError(null);
            }
            catch (err) {
                setError('Error al conectar con el servidor.');
            }
            finally {
                setLoading(false);
            }
        };
        loadData();
    }, [currentPage]);

    // FUNCIÓN PARA EL BOTÓN VER DETALLE
    const handleViewDetail = async (id: number) => {
        window.open(`/bus/${id}`, '_blank');
    };

    if (loading) return <div className="loader">Cargando datos...</div>;
    if (error) return <div className='error-message'>{error}</div>;

    return (
        <div className='table-container'>
            <h2>Gestion de Buses - CIVA</h2>
            <table className='bus-table'>
                <thead>
                    <tr>
                        <th>N° Bus</th>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Estado</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map((bus) => (
                        <tr key={bus.id}>
                            <td>{bus.numeroBus}</td>
                            <td><span className='badge-placa'>{bus.placa}</span></td>
                            <td>{bus.nombreMarca}</td>
                            <td>
                                <span className={bus.activo ? 'status-active' : 'status-inactive'}>
                                    {bus.activo ? 'Activo' : 'Inactivo'}
                                </span>
                            </td>
                            <td>
                                <button className="btn-detail" onClick={() => handleViewDetail(bus.id)}>Ver Detalle</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* CONTROLES DE PAGINACIÓN */}
            <div className="pagination">
                <button
                    disabled={currentPage === 0}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Anterior
                </button>
                <span>Página {currentPage + 1} de {totalPages}</span>
                <button
                    disabled={currentPage >= totalPages - 1}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};