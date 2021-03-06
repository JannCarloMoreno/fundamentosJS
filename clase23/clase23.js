function Persona (nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function() {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function ()  {
  console.log((this.altura >= 1.8) ? `yo soy alto` : `yo no soy alto`)
}
/* las arrow function no contienen el this del objeto o prototipo indicado sino que usan el this de lo que contiene a la funcion que en este caso es window
  Persona.prototype.soyAlto = () => {
  console.log((this.altura >= 1.8) ? `yo soy alto` : `yo no soy alto`)
} */

var jann= new Persona('Jann', 'Moreno', 1.66)
var erika = new Persona('Erika', 'Luna', 1.50)
var arturo = new Persona('Arturo', 'Martinez', 1.85)

jann.soyAlto()

