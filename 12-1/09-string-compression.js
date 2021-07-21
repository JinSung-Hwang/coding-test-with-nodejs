const assert = require('assert');


// note: s는 1000이하, 소문자 
function solution(s) {
  var answer = 0;

  // s를 몇개씩 자를 것인지 정한다. 
  // chunk가 다음에도 나오면 카운트를 1 높인다. 
  // 다음에 안나오면 그대로 쓴다. 

  let isCompression = false;

  let chunks = '';
  for (let i = 0; i < s.length / 2; i++) {
    chunks.push(s.subString(i, i + i));
  }
  let compressCount = 0;
  chunks.forEach(chunk => {
    if (lastChunk === chunk) compressCount++;
    else {
      compressCount = 0;
    }

    lastChunk = chunk;
  });


  return answer;
}

function ttd() {

  let result = solution('aabbaccc');
  assert.deepStrictEqual(result, 7);
  let result = solution('ababcdcdababcdcd');
  assert.deepStrictEqual(result, 9);
  let result = solution('abcabcdede');
  assert.deepStrictEqual(result, 8);
  let result = solution('abcabcabcabcdededededede');
  assert.deepStrictEqual(result, 14);
  let result = solution('xababcdcdababcdcd');
  assert.deepStrictEqual(result, 17);

}

ttd();