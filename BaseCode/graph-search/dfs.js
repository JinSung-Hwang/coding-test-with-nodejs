const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let n, m, v; // note: n: 정점수, m: 차수 수, v: 시작 정점
let graph;
let isVisiteds;
let dfsPaths = [];

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
  console.log(dfsPaths.join(' '));
}

(function main() {
  input();
  solution();
  output();
})();

function solution() {
  dfs(graph, isVisiteds, v);
}

function dfs(graph, isVisiteds, visitingIndex) {
  if (isVisiteds[visitingIndex]) return ; // note: 방문했다면 넘어가기

  isVisiteds[visitingIndex] = true;
  dfsPaths.push(visitingIndex); // note: 지나간 경로를 저장해두기

  graph[visitingIndex].forEach(index => {
    return dfs(graph, isVisiteds, index);
  });
}