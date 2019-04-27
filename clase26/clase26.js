
class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn){
    var {nombre, apellido}  = this
    console.log(`Hola me llamo ${nombre} ${apellido}`)
    if (fn){
      fn(this.nombre, this.apellido)
    }
  }

  soyAlto(){
    console.log((this.altura >= 1.8) ? `yo soy alto` : `yo no soy alto`)
  }
}

class Desarrollador extends Persona{
  constructor(nombre,apellido, altura){
    super(nombre,apellido,altura)
  }

  saludar(fn){
    // var nombre = this.nombre
    // var apellido = this.apellido
    var {nombre, apellido}= this
    console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
    if (fn){
      fn(this.nombre, this.apellido, true)
    }
}
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`buen dia ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Ah mira, no sabia que eras desarrollador/a`)
  }
}

var jann = new Persona('Jann', 'Moreno', 1.72)
var erika = new Persona ('Erika', 'Luna', 1.65)
var arturo = new Desarrollador ('Arturo', 'Martinez', 1.89)

jann.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)