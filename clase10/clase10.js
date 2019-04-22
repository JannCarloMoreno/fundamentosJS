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

function esMayorDeEdad(persona){
    var { edad } = persona
    if(edad >= 18){
        console.log('Es mayor de edad')
    }else{
        console.log('Es menor de edad')
    }
}

esMayorDeEdad(jann)