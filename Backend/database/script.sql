-- Crear tabla de Marcas
CREATE TABLE IF NOT EXISTS marcas (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL
);

-- Crear tabla de Buses
CREATE TABLE IF NOT EXISTS buses (
    id BIGSERIAL PRIMARY KEY,
    numero_bus INT NOT NULL,
    placa VARCHAR(20) UNIQUE NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    caracteristicas TEXT,
    marca_id BIGINT NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    CONSTRAINT fk_marca FOREIGN KEY (marca_id) REFERENCES marcas(id)
);

-- Insertar datos iniciales (Data Seed)
INSERT INTO marcas (nombre) VALUES ('Volvo'), ('Scania'), ('Fiat'), ('Mercedes-Benz')
ON CONFLICT (nombre) DO NOTHING;

-- Insertar algunos buses de prueba
INSERT INTO buses (numero_bus, placa, caracteristicas, marca_id, activo)
VALUES (101, 'ABC-123', 'Bus de dos pisos, aire acondicionado', 1, true),
       (102, 'XYZ-789', 'Bus cama, wifi gratuito', 2, true);
