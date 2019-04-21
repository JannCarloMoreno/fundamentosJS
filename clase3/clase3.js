var edad = 21

// edad = edad +1 == edad += 1
edad += 1

var peso = 66
// peso = peso -2
peso -= 2

var sandwich = 1
// peso = peso + sandwich
peso += sandwich

var jugarFutbol= 3
// peso = peso - jugarFutbol
peso -= jugarFutbol

var precioVino= 200.3

// var total= precioVino * 100 * 3 / 100
// en caso de no conocer la cantidad de cifras decimales
var total = Math.round(precioVino * 100 * 3)/ 100
var totalStr= total.toFixed(2)
var total2= parseFloat(totalStr)

var pizza = 8
var personas= 2
var cantidadDePorcionesPorPersona = pizza / personas