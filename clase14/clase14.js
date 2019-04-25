var jann = {
    nombre: "Jann",
    apellido: "Moreno",
    edad: 21,
    peso: 66
}

const INCREMENTO_PESO= 0.3
const DIAS = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = jann.peso - 3

var dias = 0

while (jann.peso > META) {
    if(comeMucho()){
        aumentarDePeso(jann)
    }
    if(realizaDeporte()){
        adelgazar(jann)
    }

    dias += 1
}

console.log(`Pasaron ${dias} hasta que ${jann.nombre} adelgazo`)
