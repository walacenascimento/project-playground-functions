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
// Resolvido
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
// Resolvido
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
// Em encode, substituir as vogais por numeros, da seguinte forma:
// a -> 1, e -> 2, i -> 3, o -> 4, u -> 5
// Em decode, fazer o inverso:
// 1 -> a, 2 -> e, 3 -> i, 4 -> o, 5 -> u
function encode(str) {
  // a -> 1, e -> 2, i -> 3, o -> 4, u -> 5
  let text = str.replaceAll('a',1).replaceAll('e',2).replaceAll('i',3).replaceAll('o',4).replaceAll('u',5);
  return text
}
encode('');

function decode(str) {
  // 1 -> a, 2 -> e, 3 -> i, 4 -> o, 5 -> u
  let text = str.replaceAll(1,'a').replaceAll(2,'e').replaceAll(3,'i').replaceAll(4,'o').replaceAll(5,'u');
  return text
}
decode('');

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
