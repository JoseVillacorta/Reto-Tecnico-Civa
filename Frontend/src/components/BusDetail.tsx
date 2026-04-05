import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Bus } from '../types';
import { busService } from '../services/busService';
import './BusTable.css';

export const BusDetail = () => {
    const { id } = useParams<{ id: string }>();// Capturamos el id de la URL (/bus/1)
    const [bus, setBus] = useState<Bus | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadOneBus = async () => {
            if (id) {
                try {
                    const data = await busService.getById(parseInt(id));
                    setBus(data);
                } catch (err) {
                    console.error("Error al cargar detalle", err);
                } finally {
                    setLoading(false);
                }
            }
        };
        loadOneBus();
    }, [id]);

    if (loading) return <div className="loader">Cargando detalles del bus...</div>;
    if (!bus) return <div className="error-message">Bus no encontrado.</div>;

    return (
        <div className="table-container detail-view">
            <h2>Resumen del Bus: {bus.placa}</h2>
            <hr />
            <div className="detail-grid">
                <p><strong>N° Interno:</strong> {bus.numeroBus}</p>
                <p><strong>Marca:</strong> {bus.nombreMarca}</p>
                <p><strong>Caracteristicas:</strong> {bus.caracteristicas}</p>
                <p><strong>Fecha Registro:</strong> {new Date(bus.fechaCreacion).toLocaleDateString()}</p>
                <p><strong>Estado:</strong> {bus.activo ? '✅ Operativo' : '❌ Inactivo'}</p>
            </div>
            <button className="btn-detail" onClick={() => window.close()}>Cerrar Pestaña</button>
        </div>
    );
};