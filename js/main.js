alert('¡Jugador, comienza el juego!');

let jugador = prompt('Ingresa el nombre del jugador');

alert('Elige tu ataque');

let round = 0;

function determinarGanador(ataque, atacante) {

  if (ataque === atacante) {

    return 'Empate';

  } else if ((ataque === 0 && atacante === 1) || (ataque === 1 && atacante === 2) || (ataque === 2 && atacante === 0)) {

    return 'Perdiste';

  } else {

    return '¡GANASTE!';

  }

}

for (round = 1; round <= 3; round += 1) {

  console.log('------------- Estás en el round ' + round + ' -------------');

  let ataque = parseInt(prompt('0 para piedra, 1 para papel o 2 para tijera'));

  console.log(jugador + ' elegiste ' + ataque);

  let atacante = parseInt(Math.random() * 3);

  console.log('El enemigo eligió ' + atacante);

  console.log(determinarGanador(ataque, atacante));

}