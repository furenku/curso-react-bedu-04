let unaCosa = "adios mundo"

let unaPersona = {
    nombres: "Juan Manuel",
    apellidos: "Gutiérrez Pérez",
    edad: 32
}






const decirAlgo = ( algo ) => {

    console.log( "lo que dice es:", algo )

}

// decirAlgo( unaCosa )

//  Juan Manuel Gutiérrez Pérez, 32 años.
const construirPresentacion = ( persona ) => {
    return (
        persona.nombres + " " +
        persona.apellidos + ", " +
        persona.edad + " años."
    )
}



//Juan Manuel Gutiérrez Pérez, 32 años. Dice: adiós mundo

const decirFrase = ( persona, frase ) => {

    console.log(
        construirPresentacion( persona ),
        "Dice:",
        frase
    )

}


let persona1 = {
    nombres: "Marta",
    apellidos: "Torres Liceaga",
    edad: 47
}

let persona2 = {
    nombres: "Diego",
    apellidos: "Villaseñor",
    edad: 33
}


let frase1 = "Soy Marta."

let frase2 = "Encantado, soy Diego."


decirFrase(persona1, frase1)
decirFrase(persona2, frase2)