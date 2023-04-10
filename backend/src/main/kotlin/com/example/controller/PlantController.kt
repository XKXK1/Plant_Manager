package main.kotlin.com.example.controller

import main.kotlin.com.example.mapper.PlantDTO
import main.kotlin.com.example.mapper.toDTO
import main.kotlin.com.example.repository.PlantRepository
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/v1/plant")
class PlantController(val plantRepository: PlantRepository) {

    @GetMapping
    fun getAll() = plantRepository.findAll().map { it.toDTO() }


    @PostMapping
    fun upgradePlants(@RequestBody plantDTO: PlantDTO) = plantDTO
}