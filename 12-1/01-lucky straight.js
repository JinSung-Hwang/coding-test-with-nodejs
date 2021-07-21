const assert = require('assert');


// note: 19분 10초 13분동안 인터넷 서칭.... ㅋㅋ
function luckyStraight(number) {
  const numberSTR = '' + number;
  const numbers = numberSTR.split('');

  let leftTotal = 0;
  for (let i = 0 ; i < numbers.length / 2 ; i++) {
    leftTotal += +numbers[i];
  }

  let rightTotal = 0;
  for (let i = numbers.length / 2 ; i < numbers.length ; i++) {
    rightTotal += +numbers[i];
  }

  return leftTotal === rightTotal ? 'LUCKY' : 'READY';
}




function ttd() {

  let result = luckyStraight(123402);
  assert.deepStrictEqual(result, 'LUCKY');

  result = luckyStraight(7755);
  assert.deepStrictEqual(result, 'READY');
}

ttd();