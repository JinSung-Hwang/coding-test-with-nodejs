// note: 스트레스 받지마 탈모온다 ㅎㅎ 천천히 차분히해 아니면 하지말던지! 향유하자!
const SOLUTION = exports;
SOLUTION.main = main;
// note: --------------------------------------------------------------- 여기 아래로 복사해서 제출해야한다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let n;
let graph;
let inputs;
let isVisiteds;
let preorderResult;

process.platform === 'linux' ? main() : ''; // note: 로컬 테스트 케이스와 백준 사이트에 호환을 맞춤기 위함


function input() {
  // 글로벌 변수 초기화
  result = [];
  sumLeafDepth = 0;
  // 데이터 입력 받기 
  inputs = fs.readFileSync(filePath).toString().trim().split('\n');
  n = +inputs.shift(); // note: 노드의 개수
  graph = Array(n + 1).fill(null).map(() => []);
  inputs.forEach(edge => {
    let [a, b, c] = edge.split(' ');
    if (b !== '.') graph[+a].push(+b);
    if (c !== '.') graph[+a].push(+c);
  });
  isVisiteds = Array(n + 1).fill(false);
}

function output() {
  console.log(result);
  return result;
}

function main() {
  input();
  solution();
  return output();
};

function solution() {
  // note: 리프 노드의 깊이의 합이 홀수이면 Yes, 짝수이면 No

  preorder(graph, '1');
}

function preorder(graph, visitIndex) {
  if (visitIndex === '.') return ;

  preorderResult += visitIndex;
  console.log('visitIndex', visitIndex);

  return preorder(graph, graph[visitIndex][0]) + preorder(graph, graph[visitIndex][1]);
}