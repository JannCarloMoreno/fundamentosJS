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
function mayorDeEdad(persona){
    var { edad } = persona
    // console.log(`la edad de ${persona.nombre} es ${edad}`)
   /*  if(edad>=18){
        return true
    }else{
        return false
    } */
    return edad >= MAYORIA_DE_EDAD
}
function esMayorDeEdad(persona){
    var { nombre: name} = persona
    if(mayorDeEdad(persona)){
        console.log(`${name} es mayor de edad`)
    }else{
        console.log(`${name} es menor de edad`)
    }
}

esMayorDeEdad(jann)