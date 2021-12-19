// note: 완전 탐색(Brute Force)이란?
// note:   모든 것을 탐색하는 방법이다.

// note: 완전 탐색 문제 접근할 때 확인해야할 것들
// note:   1. 고를 수 있는 값의 종류 파악하기
// note:   2. 중복을 허용하는지 파악하기
// note:   3. 순서가 중요하는지 파악하기

// note: 시간, 공간 복잡도 정리 (M은 선택의 개수, N은 값의 종류)
// note:   | 중복 허용? | 순서가 다르면 다름? | 시간 복잡도      | 공간 복잡도 |
// note:   |:----------:|:-------------------:|:----------------:|:-----------:|
// note:   | Yes        | Yes                 | N ^ M            | M           |
// note:   | No         | Yes                 | N! / (N - M)!    | M           | => (N~~M)!  === nPm
// note:   | Yes        | No                  | N ^ M 보단 작음  | M           |
// note:   | No         | No                  | N! / M!(N - M)!  | M           | => (N~~M)!/ M!  === nCm

// note: 완전 탐색 팁
// note:   1. 모든 문제를 풀 수 있어 부분 점수 받기 좋음
// note:   2. 완전 탐색은 함수 정의가 50%이다

// note: 빽트레킹(Backtracking) 란?
// note:   완전 탐색을 진행하다가 조건에 맞지 않는 경우 탐색을 중단하고 이전 탐색 과정으로 이동하는 방법

// note: 완전 탐색 연습 포인트
// note:   그 중에서도 백 트래킹(Back-Tracking)을 통해야 하는 상황을 해결해봐야한다. (만약 재귀에 대한 이해가 부족하면 재귀를 더 공부하자)

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let n;
let cands;
let selecteds = [];
let resultString = '';

function input() {
  let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
  [n, m] = inputs[0].split(' ').map(Number);
  cands = inputs[1].split(' ').map(Number).sort((a, b) => a - b);
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
function recursion(k) {
  if (k === m) { // note: 모든 경우의 수를 구했다면?
    let answerString = '';
    for (let i = 0; i < m; i++) {
      answerString += selecteds[i] + ' ';
    }
    resultString += answerString + '\n';
  } else { // note: k번째로는 무엇을 선택할 것인가?
    for (let cand = 0; cand < n; cand++) {

      selecteds[k] = cands[cand];
      recursion(k + 1);
      selecteds[k] = 0;
    }
  }
}