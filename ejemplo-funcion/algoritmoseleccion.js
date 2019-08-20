const bolas = [
    "uno",
    "dos",
    "tres"
]





const elegirUnaCosaDeUnaLista = (arregloDeCosas) => {

    const numElementos = arregloDeCosas.length

    const indice = Math.floor(Math.random() * numElementos )

    const cosaElegida = arregloDeCosas[indice]

    return cosaElegida
}





const checarBolas = () => {

    let hayBolasFalsas = false
    const numBolas = bolas.length;


    for( let i = 0; i<1000; i++) {          

        let laBolaElegida = elegirUnaCosaDeUnaLista( bolas )

        if( bolas.includes(laBolaElegida) == false ) { 
            hayBolasFalsas = true;
        }


    }

    if( hayBolasFalsas == false ) {
        console.log("programa funciona bien")
    } else {
       console.error("programa no funciona bien")
    }



}


checarBolas()