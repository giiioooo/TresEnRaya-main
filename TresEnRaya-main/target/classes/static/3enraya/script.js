// Tablero de juego
let tablero = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Jugador actual (X comienza)
let jugadorActual = '🦇';

// Función para dibujar el tablero
function dibujarTablero() {
  const celdas = document.getElementsByTagName('td');
  for (let i = 0; i < celdas.length; i++) {
    const fila = Math.floor(i / 3);
    const columna = i % 3;
    celdas[i].textContent = tablero[fila][columna];
  }
}

// Función para verificar si hay un ganador
function hayGanador() {
  // Verificar filas
  for (let i = 0; i < 3; i++) {
    if (tablero[i][0] !== '' && tablero[i][0] === tablero[i][1] && tablero[i][0] === tablero[i][2]) {
      return true;
    }
  }

  // Verificar columnas
  for (let j = 0; j < 3; j++) {
    if (tablero[0][j] !== '' && tablero[0][j] === tablero[1][j] && tablero[0][j] === tablero[2][j]) {
      return true;
    }
  }

  // Verificar diagonales
  if (tablero[0][0] !== '' && tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) {
    return true;
  }
  if (tablero[0][2] !== '' && tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0]) {
    return true;
  }

  return false;
}

// Función para realizar un movimiento
function hacerMovimiento(fila, columna) {
  // Verificar si la celda está vacía y no hay gana
  if (tablero[fila][columna] === '' && !hayGanador()) {
    tablero[fila][columna] = jugadorActual;
    dibujarTablero();
    if (hayGanador()) {
      alert('¡Jugador ' + jugadorActual + ' ha ganado!');
    } else {
      // Cambiar al siguiente jugador
      jugadorActual = jugadorActual === '🦇' ? '🃏' : '🦇';
    }
  }
}

// Función para reiniciar el juego
function reiniciarJuego() {
  tablero = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  jugadorActual = '🦇';
  dibujarTablero();
}

// Dibujar el tablero inicial
dibujarTablero()