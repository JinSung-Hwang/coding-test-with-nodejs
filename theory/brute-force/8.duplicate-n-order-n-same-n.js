// note: 문제
// note:   입력 n개를 받을떄 m개를 중복 없게, 순서 없이 고르기, 같은 결과를 한번만 나오게 하기
// note:     ex) n: 4, m: 3
// note:     ex) [4, 9, 3, 1]

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let n;
let cands;
let selecteds = [];
let isSelecteds;
let resultString = '';

function input() {
  let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
  [n, m] = inputs[0].split(' ').map(Number);
  cands = inputs[1].split(' ').map(Number).sort((a, b) => a - b); // note: 중복된 원소를 선택하지 않기 위해서 lastCand를 추가했는데 이럴때는 사전에 정렬을 해야한다.
  isSelecteds = Array(n).fill(false);
}

function output() {
  console.log(resultString.trim());
}

(function main() {
  input();
  recursion(0, 0);
  output();
})();

// note: selecteds[1....N] 에 선택된 것들이 모아질 것이다.
function recursion(k, startIndex) {
  if (k === m) { // note: 모든 경우의 수를 구했다면?
    let answerString = '';
    for (let i = 0; i < m; i++) {
      answerString += selecteds[i] + ' ';
    }
    resultString += answerString + '\n';
  } else { // note: k번째로는 무엇을 선택할 것인가?
    let lastCand = 0;
    for (let cand = startIndex; cand < n; cand++) {
      if (isSelecteds[cand]) continue;
      if (cands[cand] === lastCand) continue;

      lastCand = cands[cand];
      isSelecteds[cand] = true;
      selecteds[k] = cands[cand];
      recursion(k + 1, cand + 1);
      selecteds[k] = 0;
      isSelecteds[cand] = false;
    }
  }
}