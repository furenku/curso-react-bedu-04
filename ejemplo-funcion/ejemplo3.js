let listaIngredientes = [
    "atún",
    "mayonesa",
    "chícharo",
    "cerdo",
    "zanahoria",
    "aguacate",
    "chile",
    "pollo",
    "cebolla",
    "tortilla"
]

let listaRecetas = [
    "guajillo",
    "chipotle",
    "limón",
    "horno",
    "sartén",
    "ajillo",
    "barbacoa",
    "pastor",
    "vapor",
    "gratín",
]


const cocinar = (
    ingrediente1,
    ingrediente2,
    receta
) => {

    let platillo

    platillo = ingrediente1

    platillo += " con "
    
    platillo += ingrediente2
    
    platillo += " al "

    platillo += receta

    return platillo

}





const elegirUnaCosaDeUnaLista = (arregloDeCosas) => {

    const numElementos = arregloDeCosas.length

    const indice = Math.floor(Math.random() * numElementos )

    const cosaElegida = arregloDeCosas[indice]

    return cosaElegida

}




let unIngrediente = elegirUnaCosaDeUnaLista( listaIngredientes )

// eliminar primer ingrediente de lista para que no se repita
let listaSinPrimerIngrediente = listaIngredientes.filter(i=>i!=unIngrediente)

// usar lista sin primer ingrediente
let otroIngrediente = elegirUnaCosaDeUnaLista( listaSinPrimerIngrediente )

let unaReceta = elegirUnaCosaDeUnaLista( listaRecetas )

console.log( "yo cociné",
    cocinar( unIngrediente, otroIngrediente, unaReceta )
)

