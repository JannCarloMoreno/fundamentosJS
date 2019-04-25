var jann = {
    nombre: "Jann",
    apellido: "Moreno",
    edad: 21,
    peso: 66
}

const INCREMENTO_PESO= 0.200
const DIAS = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

console.log(`Al inicio del anio ${jann.nombre} pesa ${jann.peso} kilogramos`)
for (var i = 1; i <= DIAS ; i++ ) {
    var random = Math.random()
    if(random< 0.25){
        // aumenta de peso
        aumentarDePeso(jann)
    }else if(random < 0.5){
        // adelgaza
        adelgazar(jann)
    }
}
console.log(`Al final de anio ${jann.nombre} pesa ${jann.peso.toFixed(1)} kilogramos`)


