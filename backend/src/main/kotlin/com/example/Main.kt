package main.kotlin.com.example

import main.kotlin.com.example.domainobject.Plant
import main.kotlin.com.example.repository.PlantRepository
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class Main(val plantRepository: PlantRepository) : ApplicationRunner {

    override fun run(args: ApplicationArguments?) {
        plantRepository.save(Plant(1, "Monstera"))
        plantRepository.save(Plant(2, "Dracea"))
        plantRepository.save(Plant(3, "Rando"))
    }
}

fun main(args: Array<String>) {
    runApplication<Main>(*args)
}