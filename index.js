/*  Crear un programa que le permita a una persona jugar al cachipún contra el computador, indicando cuántas veces desea jugar o repetir el juego. El cachipún es un juego entre dos personas (en este caso, tú y el computador) donde cada una de ellas de manera independiente y secreta debe elegir una de las opciones (piedra, papel y tijera) y compararla con la opción de la otra persona. Para determinar quien gana, se deben seguir las siguientes reglas:
● Tijera le gana a papel
● Papel le gana a piedra
● Piedra le gana a tijera
● Si ambos jugadores eligen la misma opción es un empate
1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta dependiendo de las veces que haya indicado el usuario que desea jugar.
2. Solicitar al usuario que indique su jugada. Las opciones son las siguientes: Piedra, Papel, Tijera.
3. Generar una jugada automática para la máquina usando la función ​Math​.random() de Javascript.
4. Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina.
5. Indicar el resultado de la partida dependiendo del caso:
● Felicitar al ganador en caso de ser el usuario.
● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea la que gane.
● Declarar un empate.
*/

/////////////////// Inicio

// Solicitar al usuario las veces que desea que se repita el juego
let repeat = prompt('¿Cuántas veces quieres jugar al cachipún? Ingresa un número: ');
while (repeat < 1) {
    repeat = prompt('Debes ingresar un número mayor a 0');
}
repeat = parseInt(repeat); // Convertir de string a integer

// Declarar variables de almacenamiento de juegos
let wins = 0;
let draws = 0;
let loses = 0;

// Generar repetición del juego
let cicle = 1;

// Solicitar al usuario que indique su jugada y validar que ingrese una opción correcta
function userOption(){
    let userMove = "";
    userMove = prompt('¿Vas a jugar piedra, papel o tijera? Escribe tu opción: ');
    while ((userMove !== "tijera") && (userMove !== "papel") && (userMove !== "piedra")){
        userMove = prompt('Debes escribir "piedra", "papel" o "tijera".');
    }
    return userMove;
}

// Generar una jugada automática de la computadora 
function compuOption(){
    let compuMove = 0;
    compuMove = Math.floor(Math.random()*3)
    // Convertir el número de juego en opción piedra, papel o tijera.
    if (compuMove === 2){
        compuMove = "tijera";
    }else if (compuMove === 1){
        compuMove = "papel";
    }else{
        compuMove = "piedra";
    } 
    return compuMove;
}

// Comparación de resultados y muestra al usuario
function gameResults(userMove, compuMove) {
    
    if (userMove === compuMove){
        draws += 1;
        alert('Ambas sacaron ' +compuMove+ '. ¡Es un empate! ');
    }else if((userMove === "tijera" && compuMove === "papel") || (userMove === "papel" && compuMove === "piedra") || (userMove === "piedra" && compuMove === "tijera")){
        wins += 1;
        alert('Sacaste: ' +userMove+ ' y la computadora: ' +compuMove+ '. ¡¡Ganaste!! ^u^');
    }else{
        loses += 1;
        alert('Sacaste: ' +userMove+ ' y la computadora: ' +compuMove+ '. Has perdido u.u');
    }
    return draws, wins, loses;
}

// Juego Cachipun
function cachipun(repeat) {
    while (cicle<=repeat){
    
        // Solicitar al usuario que indique su jugada
        userMove = userOption();
        
        // Generar una jugada automática de la computadora
        compuMove = compuOption(); 
        
        // Mostrar resultado al usuario
        gameResults(userMove, compuMove);
        
        // Aumento el acumulador cicle
        cicle += 1; 
    }
    
    // Mostrar resultados acumulados al usuario
    document.write("//////////// Resultados ////////////" +
                   "<br> >> Juegos ganados: " +wins+
                   "<br> >> Juegos empatados: " +draws+
                   "<br> >> Juegos perdidos: " +loses
                   )    
}
cachipun(repeat);
