package com.civa.bus_api.service.impl;

import com.civa.bus_api.domain.dto.BusDTO;
import com.civa.bus_api.domain.entity.Bus;
import com.civa.bus_api.repository.BusRepository;
import com.civa.bus_api.service.BusService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor // Inyectamos el BusRepository automaticamente
public class BusServiceImpl implements BusService {

    private final BusRepository busRepository;

    @Override
    public Page<BusDTO> findAll(Pageable pageable){
        // Obtenemos los buses paginados de la BD y los mapeamos a DTO
        return busRepository.findAll(pageable).map(this::mapToDTO);
    }

    @Override
    public Optional<BusDTO> findById(Long id){
        return busRepository.findById(id).map(this::mapToDTO);
    }

    // Metodo para transformar una entidad Bus a un BusDTO
    private BusDTO mapToDTO(Bus bus){
        return BusDTO.builder()
                .id(bus.getId())
                .numeroBus(bus.getNumeroBus())
                .placa(bus.getPlaca())
                .fechaCreacion(bus.getFechaCreacion())
                .caracteristicas(bus.getCaracteristicas())
                .nombreMarca(bus.getMarca() != null ? bus.getMarca().getNombre() : "S/M")
                .activo(bus.getActivo())
                .build();
    }
}
