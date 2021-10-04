// note: 완전 탐색
// note:   모든 문제를 풀 수 있는 치트기
// note:   부분 점수라도 받을 때는 이 방법이 좋음

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let n;
let cands;
let selecteds = [];
let resultString = '';

function input() {
   let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
   n = +inputs[0];
   cands = inputs[1].toString().split('').map(Number);
}

function output() {
  console.log(resultString.trim());
}

(function main() {
  input();
  recursion(1);
  output();
})();

function recursion(k) {
  if (k + 1 === n) { // 모든 경우의 수를 선택한다.
    for (let i = 1; i < selecteds.length; i++) 
      resultString += selecteds[i] + '\n';

  } else { // 조건에 맞추어 1개씩 선택한다.
    for (let cand = 0; cand < n; cand++) { 
      if (isUsed(cands[cand])) continue;

      selecteds[k] = cands[cand];
      recursion(k + 1);
      selecteds[k] = 0;
    }

  }
}


function isUsed(cand) {
  const finedIndex = selecteds.findIndex(s => {
    return s === cand || s > cand;
  });

  return finedIndex !== -1 ? true : false;
}