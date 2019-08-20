const generarNumero = () => Math.round(Math.random() * 10)

const escribirNumero = (numero) => console.log("el valor es", numero)


const sumarNumeros = ( a, b ) => a + b


const anunciarNumeros = () => {
    
    let numero1 = generarNumero()
    let numero2 = generarNumero()

    console.log("en esta esquina")
    escribirNumero(numero1)

    console.log("en la otra esquina")
    escribirNumero(numero2)

    console.log("el resultado es", sumarNumeros( numero1, numero2 ) )

}


anunciarNumeros()