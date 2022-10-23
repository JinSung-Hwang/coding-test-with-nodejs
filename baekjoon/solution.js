// note: 스트레스 받지마 탈모온다 ㅎㅎ 천천히 차분히해 아니면 하지말던지! 향유하자!
const SOLUTION = exports;
SOLUTION.main = main;
// note: --------------------------------------------------------------- 여기 아래로 복사해서 제출해야한다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input-data.txt';
let result;
let N; // note: 정수들의 개수
let numbers; // note: 정수들

process.platform === 'linux' ? main() : ''; // note: 로컬 테스트 케이스와 백준 사이트에 호환을 맞춤기 위함

function input() {
  // 글로벌 변수 초기화
  result = [];
  // 데이터 입력 받기 
  let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
  N = inputs.shift();
  numbers = inputs.map(Number).sort((a, b) => a - b);
}

function output() {
  console.log(result.join('\n'));
  return result.join('\n');
}

function main() {
  input();
  solution();
  return output();
}

function solution() {
  // note: 산술 평균
  result.push(+(numbers.reduce((a, b) => a + b, 0) / N).toFixed());
  // note: 중앙 값  
  result.push(numbers[Math.floor(N / 2)]);
  // fixme: 최빈값: 최빈값중 두번쨰로 작은값을 출력한다.
  let countObj = {};
  numbers.forEach(n => {
    if (countObj[n] === undefined) countObj[n] = 1;
    else countObj[n]++;
  });
  let counts = [];
  for (const key in countObj) {
    counts.push({key, value: countObj[key]});
  }
  counts.sort((a, b) => b.value - a.value);
  let bestMode = counts[0].value;
  let bestModes = counts.filter(v => v.value === bestMode).sort((a, b) => a.key - b.key);
  result.push(bestModes[1] === undefined ? bestModes[0].key : bestModes[1].key);
  // note: 범위
  result.push(numbers[N - 1] - numbers[0]);
}
