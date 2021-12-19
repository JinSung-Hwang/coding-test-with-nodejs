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
  isVisiteds[startIndex] = true; // xxx1

  while (visitingIndexs.length) {
    const nextIndex = visitingIndexs.shift();
    // isVisiteds[nextIndex] = true; // xxx2: xxx1을 안넣고 여기 라인만 넣어 구현할 수도 있지만 성능이 느려진다.
    bfsPaths.push(nextIndex) // note: 지나간 경로들을 수집하기
    graph[nextIndex].forEach(index => {
      if (isVisiteds[index]) return;
      visitingIndexs.push(index);
      isVisiteds[index] = true; // xxx1: xxx1으로 묶인 39, 49번 라인은 중요하다. 성능에 많은 영향이 끼친다. 
    });
  }
}