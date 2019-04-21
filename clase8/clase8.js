var jann = {
    nombre: 'Jann',
    apellido: 'Moreno',
    edad: 21
}
var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona){
    // var nombre= persona.nombre
    var { nombre }= persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona){
    var {nombre, edad} = persona
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad}`)
}

//reto
imprimirNombreYEdad(jann)
imprimirNombreYEdad(dario)
imprimirNombreEnMayusculas(jann)
imprimirNombreEnMayusculas(dario)

function cumpleanos(persona){
    // persona.edad += 1
    return(
        {
            ...persona,
            edad: persona.edad+1
        }
    )
}