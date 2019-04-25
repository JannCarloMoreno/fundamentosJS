var signo = prompt('Cual es tu signo')

switch(signo){
    case 'acuario':
        console.log('Aprenda a vivir cada momento con intensidad, ya que le sobrarán fuerzas para sortear los obstáculos que se le presenten durante esta jornada.')
    break
    case 'tauro':
        console.log('Atravesará un período donde deberá avanzar sin miedo y enfocarse en planificar un nuevo proyecto de vida que lo haga sentir aún más gratificado.')
    break
    case 'aries':
        console.log('Sepa que necesitará tranquilizarse y estar preparado para lo que se acerque. En esta jornada, sentirá que algo nuevo y bueno está por suceder.')
    break
    case 'geminis':
        console.log('Intente observar a la gente que lo rodea y de esta forma, comprobará que usted tiene las mismas oportunidades que los demás. Deje de desvalorizarse sin causa.')
    break
    case 'cancer':
        console.log('Prepárese, ya que se acerca el momento propicio para demostrarle al mundo lo que usted es capaz de brindar. Intente ser más solidario, no espere nada a cambio.')
    break
    case 'leo':
        console.log('Transitará una etapa donde podrá ubicarse en una mejor posición social y así obtendrá un crecimiento en su vida que lo hará sentir que está en la cima.')
    break
    case 'virgo':
        console.log('Evite debilitarse, ya que todo va a salir como tenía planeado. Aunque la lentitud a usted lo exaspere, sepa que tendrá que ser paciente para alcanzar el éxito.')
    break
    case 'libra':
        console.log('Entienda que la carencia de confianza propia podría llegar a ser un obstáculo en su vida. Es el momento para que trate de combatir ese estado.')
    break
    case 'escorpio':
    case 'escorpion':
        console.log('Entienda que antes de establecer cualquiera de los objetivos que tiene para su futuro, debe determinar las pautas concretas sabiendo con claridad los contras.')
    break
    case 'sagitario':
        console.log('Deberá aprovechar este período profesional para cosechar todo lo que sembró hace tiempo para su vida. Relájese y disfrute de las ganancias de los proyectos.')
    break
    case 'capricornio':
        console.log('Deje de querer controlar todo lo que sucede a su alrededor. Entienda que esa actitud no le es beneficiosa, ya que su entorno podría oponerse.')
    break
    case 'piscis':
        console.log('En esta jornada intente estar preparado, ya saldrán a la luz aquellos cuestionamientos que permanecieron ocultos en su interior por mucho tiempo.')
    break
    default:
        console.log('no es un signo zodiacal valido')
    break
}