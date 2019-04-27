const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }
const onPeopleResponse = function(person){
    console.log(`Hola yo soy ${person.name}`)
}
$.get(LUKE_URL, opts, onPeopleResponse)