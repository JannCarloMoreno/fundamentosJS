var nombre = 'Jann', apellido= 'Moreno'

var nombreEnMayusculas= nombre.toUpperCase()
var apellidoEnMinusculas= apellido.toLowerCase()

var primeraLetraDelNombre= nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

// var nombreCompleto= nombre+' '+apellido
// interpolacion de texto == template literals
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// var str = nombre.charAt(1)+nombre.charAt(2)
var str= nombre.substr(1, 2)

// reto de mostrar la ultima letra de su nombre
var UltimaLetraNombre = nombre.substr(nombre.length-1,1)
var UltimaLetraNombre2= nombre.charAt(nombre.length-1)