// note: 완전 탐색(Brute Force)이란?
// note:   모든 것을 탐색하는 방법이다.

// note: 완전 탐색 팁
// note:   1. 모든 문제를 풀 수 있는 치트기
// note:   2. 부분 점수라도 받을 때는 이 방법이 좋음
// note:   3. 완전 탐색은 함수 정의가 50%이다

// note: 완전 탐색 문제 접근할 때는,
// note:   1. 고를 수 있는 값의 종류 파악하기
// note:   2. 중복을 허용하는지 파악하기
// note:   3. 순서가 중요하는지 파악하기

// note: 빽트레킹(Backtracking) 란?
// note:   완전 탐색을 진행하다가 조건에 맞지 않는경우 탐색을 중단하고 이전 탐색 과정으로 이동하는 방법

// note: 완전 탐색 연습 포인트
// note:   그 중에서도 백 트래킹(Back-Tracking)을 통해야 하는 상황을 해결해봐야한다

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

// note: selecteds[1....N] 에 연산자들이 순서대로 저장될 것이다.
function recursion(k) {
  if (k === n + 1) { // note: 모든 경우의 수를 구한 상태
    for (let i = 1; i < selecteds.length; i++) 
      resultString += selecteds[i] + '\n';

  } else { // note: k번째로는 무엇을 선택할 것인가?
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