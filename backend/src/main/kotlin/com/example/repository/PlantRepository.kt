package main.kotlin.com.example.repository

import main.kotlin.com.example.domainobject.Plant
import org.springframework.data.jpa.repository.JpaRepository

interface PlantRepository : JpaRepository<Plant, Long>