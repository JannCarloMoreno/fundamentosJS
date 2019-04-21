// variable glogal
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

function imprimirNombreEnMayusculas({ nombre }){
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(jann)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'Pepito'})
// imprimirNombreEnMayusculas({ })
// imprimirNombreEnMayusculas({ apellido: "Perez"})
// imprimirNombreEnMayusculas()