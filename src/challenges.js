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
// cat1, cat2 e mouse
// recebe posição de mouse, cat1 e cat2 (nessa ordem)
// e calcula a distânia entre mouse e cat1 e cat2
// e retorna o cat mais perto do mouse
// Exemplo:
// caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".
// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // return ((Math.abs(cat1 - mouse) < Math.abs(mouse - cat2)) ? "cat1" : ((Math.abs(cat1 - mouse)) > Math.abs(mouse - cat2) ? "cat2" : "os gatos trombam e o rato foge"));

  const positioCat1 = Math.abs(cat1 - mouse);
  const positioCat2 = Math.abs(cat2 - mouse);

  if (positioCat2 < positioCat1) {
    return "cat2";
  } else if(positioCat2 > positioCat1) {
    return "cat1";
  }
    return "os gatos trombam e o rato foge";
 }
catAndMouse();


// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let fizzBuzz = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if(arrayNumbers[index] % 3 == 0 && arrayNumbers[index] % 5 == 0) {
      // se for divisivel por 3 e 5 retorna 'fizzBuss'
      fizzBuzz.push('fizzBuzz');
    } else if(arrayNumbers[index] % 3 == 0) {
      // se for divisivel por 3 retorna 'fizz'
      fizzBuzz.push('fizz');
    } else if(arrayNumbers[index] % 5 == 0) {
      // se for divisivel por 5 retorna 'buzz'
      fizzBuzz.push('buzz');
    } else {
      // caso, não seja divisível nem por 3 e nem por 5, retorna 'bug!'
      fizzBuzz.push('bug!');
    }
  }
  return (fizzBuzz);
}
fizzBuzz([]);

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
