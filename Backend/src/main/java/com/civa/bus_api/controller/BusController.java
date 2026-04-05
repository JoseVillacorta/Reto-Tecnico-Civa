package com.civa.bus_api.controller;

import com.civa.bus_api.domain.dto.BusDTO;
import com.civa.bus_api.service.BusService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bus")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") //Este permitira que el frontend se conecte sin problemas de CORS
public class BusController {

    private final BusService busService;

    /**
     * GET /bus?page=0&size=10
     * Obtiene la lista paginada de buses.
     */
    @GetMapping
    public ResponseEntity<Page<BusDTO>> getAllBuses(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size){

        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(busService.findAll(pageable));
    }
    /**
     * GET /bus/{id}
     * Obtiene los detalles de un bus específico por su ID.
     */
    @GetMapping("/{id}")
    public ResponseEntity<BusDTO> getBusById(@PathVariable Long id) {
        return busService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
