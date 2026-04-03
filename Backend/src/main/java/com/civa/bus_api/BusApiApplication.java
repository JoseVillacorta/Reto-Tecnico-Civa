package com.civa.bus_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

@SpringBootApplication
@org.springframework.data.web.config.EnableSpringDataWebSupport(pageSerializationMode =
EnableSpringDataWebSupport.PageSerializationMode.VIA_DTO)
public class BusApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusApiApplication.class, args);
	}

}
