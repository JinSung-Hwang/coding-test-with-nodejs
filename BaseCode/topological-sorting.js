// note: 위상 정렬(Topological Sort)
// note: 위상 정렬: 위상 + 정렬을 말한다.

// note: 위상 정렬을 말하기 전에 잠시 배경 지식 설명
// note: 1. DAG (Directed Acyclic Graph) 란?
// note:   DAG는 방향이 있고 사이클이 없는 그래프이다.
// note:   Directed(방향이 있는) Acyclic(사이클이 없는) Graph(정점과 간선이 있는) 자료구조이다.

// note: 2. 차수 (Degree) 란?
// note:   차수는 정점에서 연결된 간선의 수를 말한다.
// note:     방향성 있는 그래프에서는 차수가 2개로 나누어진다.
// note:       1. Indegree  (점정에서 들어오는 간선의 수)
// note:       2. Outdegree (점정에서 나가는 간선의 수)

// note: 1차원 배열에 위상에 맞춰(=순서를 맞춰) 정렬하는 것을 말한다.

// note: 위상 정렬하는 2가지 방법
//     :   1. SCC (코딩 테스트에서는 절대 안나오고 대회용)
// note:   2. "배열에 제일 먼저 올 수 있는 정점은??" 이라는 아이디로 만든 정렬법이다.
// note:      -> 들어오는 간선이(indegree) 없는 정점을 말한다.

// note: 위상 정렬 상세 방법
// note:   1. 그래프 데이터를 받으면서 indegree 계산하기
// note:   2. 제거 가능한 정점들을 자료 구조에(큐, 스택....) 넣기 ( indegree === 0 이면 제거 가능한 정점이다)
// note:   3. 자료 구조가 빌때까지 [원소 X를 꺼내서 '정렬'시키고 '제거'하고 '새롭게 정렬 가능한 점'을 찾아서 D에 넣기]
// note:     3-1. 자료 구조에서 원소 X를 꺼내서 '정렬' 시키기 ( 결과 배열에 넣기 )
// note:     3-2. 그래프에서 정점 X '제거'하기 ( indegree-- 시키기 )
// note:     3-3. '새롭게 정렬 가능한 점'을 찾아서 자료구조에 넣기 ( indegree === 0 이면 자료구조에 추가 )

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let n;
let m;
let results = [];
let adjacentList;
let indegrees;

function input() {
  let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
  [n, m] = inputs[0].split(' ').map(Number);
  indegrees = Array(n+1).fill(0);
  inputs.shift();
  adjacentList = Array(n+1).fill(null).map(() => []);
  inputs.forEach(row => {
    let [a, b] = row.split(' ').map(Number);
    adjacentList[a].push(b);
    indegrees[b]++; // note: 진입 차수 세기
  })
}

function output() {
  console.log(results.join(' '));
}

(function main() {
  input();
  solution();
  output();
})();

function solution() {
  let queue = [];
  for (let i = 1 ; i <= n; i++) { // note: 2. 제일 앞에 "정렬 될 수 있는" 정점 찾기
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length > 0) { // note: 3. 큐가 빌떄까지 정점을 정렬, 제거, 자료구조에 '새롭게 정렬 가능한 점'추가 
    let x = queue.shift();
    results.push(x);   // note: 정점들을 정렬 시킴
    adjacentList[x].forEach(adjacentOne => { // note: 정점들을 제거함
      indegrees[adjacentOne]--;
      if (indegrees[adjacentOne] === 0) { // note: 진입 차수가 0인 노드를 다시 추가함
        queue.push(adjacentOne);
      }
    });
  }
}