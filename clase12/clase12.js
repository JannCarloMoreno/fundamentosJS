var jann = {
    nombre: 'Jann',
    apellido:'Moreno',
    edad: 21,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    dron: true
}

var juan={
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    // if(persona.ingeniero === true){
    if(persona.ingeniero){
        console.log(`Ingeniero`)
    }else{
        console.log('no es ingeniero')
    }

    if(persona.cocinero){
        console.log('cocinero')
    }

    if(persona.cantante){
        console.log('cantante')
    }

    if(persona.dj){
        console.log('dj')
    }

    if(persona.guitarrista){
        console.log('guitarrista')
    }

    if(persona.dron){
        console.log('piloto de dron')
    }
}

imprimirProfesiones(jann)

const MAYORIA_DE_EDAD = 18
/* const mayorDeEdad = function (persona){
    var { edad } = persona
    return edad >= MAYORIA_DE_EDAD
} */

/* const mayorDeEdad = (persona) => {
    var { edad } = persona
    return edad >= MAYORIA_DE_EDAD
} */

/* const mayorDeEdad = persona => {
    var { edad } = persona
    return edad >= MAYORIA_DE_EDAD
} */

// const mayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
const mayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
function esMayorDeEdad(persona){
    var { nombre: name} = persona
    if(mayorDeEdad(persona)){
        console.log(`${name} es mayor de edad`)
    }else{
        console.log(`${name} es menor de edad`)
    }
}

esMayorDeEdad(jann)

/* function permitirAcceso(persona){
    if(!mayorDeEdad(persona)){
        console.log('Acceso denegado')
    }
} */

// reto
const permitirAcceso = persona => !mayorDeEdad(persona) ? console.log('Acceso denegado') : console.log('Acceso permitido')