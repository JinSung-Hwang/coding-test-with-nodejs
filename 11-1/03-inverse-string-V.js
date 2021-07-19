const assert = require('assert');


function inverseString(S) {

  let answer1 = 0;
  let answer2 = 1;

  const strings = S.split('');
  let previouesNumber = strings[0];

  strings.forEach(s => {

    const isIrregular = (previouesNumber !== s);
    if (isIrregular) {
      answer1++;
      [answer1, answer2] = [answer2, answer1];
      previouesNumber = s;
    }

  });

  return answer1 < answer2 ? answer1 : answer2;
}


ttd();
function ttd () {
  let s = '0001100';
  let result = inverseString(s);
  assert.equal(result, 1);

  s = '0000000';
  result = inverseString(s);
  assert.equal(result, 0);

  s = '00001001';
  result = inverseString(s);
  assert.equal(result, 2);

  s = '10001001';
  assert.equal(result, 2);

}