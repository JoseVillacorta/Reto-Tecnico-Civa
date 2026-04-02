package com.civa.bus_api.service;


import com.civa.bus_api.domain.dto.BusDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface BusService {
    // Para el endpoint GET /bus (con paginacion)
    Page<BusDTO> findAll(Pageable pageable);

    // Para el endpoint GET /bus/{id}
    Optional<BusDTO> findById(Long id);
}
