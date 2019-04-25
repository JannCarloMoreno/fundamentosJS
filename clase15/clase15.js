var contador = 0

const llueve = () => Math.random() < 0.25

do  {
    contador++

} while (!llueve())

// Reto de si contador === 1 escribir `Fui a ver si llovia 1 vez(en vez de veces)`.
console.log((contador > 1) ? `Fui a ver si llovia ${contador} veces` : `Fui a ver si llovia ${contador} vez` )