// Desafio 1
// Resolvido.
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}
compareTrue();

// Desafio 2
// Resolvido
function calcArea(base, height) {
  return (base * height) / 2;
}
calcArea();

// Desafio 3
// Resolvido
function splitSentence(str) {
  return str.split(' ');
}
splitSentence('');

// Desafio 4
// Resolvido
function concatName(arrayStr) {
  return `${arrayStr[arrayStr.length - 1]}, ${arrayStr[0]}`;
}
concatName([]);

// Desafio 5
// Resolvido
function footballPoints(wins, ties) {
  const pointWins = 3;
  const pointTies = 1;
  return (pointWins * wins) + (pointTies * ties);
}
footballPoints();

// Desafio 6
// Resolvido
function highestCount(arrayNumber) {
  let maiorNumero = Math.max(...arrayNumber);
  let repete = 0;
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] === maiorNumero) {
      repete += 1;
    }
  }
  return repete;
  // let maior = Math.max(...arrayNumber);
  // let repete = 0;
  // for (let i = 0; i < arrayNumber.length; i += 1) {
  //   if (arrayNumber[i] === maior) {
  //     repete += 1;
  //   }
  // }
  // return console.log(repete);
}
highestCount([]);

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
