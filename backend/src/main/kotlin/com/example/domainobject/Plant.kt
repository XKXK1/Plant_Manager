package main.kotlin.com.example.domainobject

import jakarta.persistence.*

@Entity
@Table(name = "plants")
class Plant(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val plantId: Long? = null,

    val name: String? = ""
)