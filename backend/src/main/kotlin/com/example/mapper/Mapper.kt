package main.kotlin.com.example.mapper

import main.kotlin.com.example.domainobject.Plant

data class PlantDTO(val plantId: Long?, val plantName: String?)

fun Plant.toDTO() = PlantDTO(this.plantId, this.name)