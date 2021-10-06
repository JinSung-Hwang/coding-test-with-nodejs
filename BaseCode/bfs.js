const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let n, m, v; // note: n: 정점수, m: 차수 수, v: 시작 정점
let graph;
let isVisiteds;
let bfsPaths = [];

function input() {
  let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
  [n, m, v] = inputs[0].split(' ').map(Number);
  isVisiteds = Array(n + 1).fill(false);
  graph = Array(n + 1).fill(null).map(() => []);
  inputs.shift();
  inputs.forEach(data => {
    let [x, y] = data.split(' ').map(Number);
    graph[x].push(y); // note: 양 방향 그래프 생성
    graph[y].push(x);
  });
  graph.map(row => row.sort((a, b) => a - b)); // note: 그래프 각 정점 번호를 오름 차순으로 정렬
}

function output() {
  console.log(bfsPaths.join(' '));
}

(function main() {
  input();
  solution();
  output();
})();

function solution() {
  bfs(graph, isVisiteds, v);
}

function bfs(graph, isVisiteds, startIndex) {
  const visitingIndexs = []; // todo: bfs는 큐를 생성하고 본다라고 생각하고 알고리즘을 외우면 좋을듯
  visitingIndexs.push(startIndex);
  isVisiteds[startIndex] = true;

  bfsPaths.push(startIndex) // note: 지나간 경로들을 수집하기

  while (visitingIndexs.length) {
    const nextIndex = visitingIndexs.shift();
    if (isVisiteds[nextIndex]) continue;

    isVisiteds[nextIndex] = true;
    visitingIndexs.push(...graph[nextIndex]);

    bfsPaths.push(startIndex) // note: 지나간 경로들을 수집하기
  }
}