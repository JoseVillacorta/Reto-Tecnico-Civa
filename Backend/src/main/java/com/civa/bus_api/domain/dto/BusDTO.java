package com.civa.bus_api.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BusDTO {
    private Long id;
    private Integer numeroBus;
    private String placa;
    private LocalDateTime fechaCreacion;
    private String caracteristicas;
    private String nombreMarca;
    private Boolean activo;
}
