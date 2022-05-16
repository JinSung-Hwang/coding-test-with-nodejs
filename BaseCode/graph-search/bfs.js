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
  inputs.forEach(data => {  // note: 양 방향 그래프 생성
    let [x, y] = data.split(' ').map(Number);
    graph[x].push(y);
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

// note: 방문 체크하지 않는 BFS
// note: 사이클이 없고 단반향 graph이면 방문처리 안해도됌
function bfs(graph, startIndex) { 
  const visitingIndexs = []; // todo: bfs는 큐를 생성하고 본다라고 생각하고 알고리즘을 외우면 좋을듯
  visitingIndexs.push(startIndex);

  while (visitingIndexs.length) {
    const nextIndex = visitingIndexs.shift();
    graph[nextIndex].forEach(index => {
      visitingIndexs.push(index);
    });
  }
}

// note: 방문 체크하는 BFS
// note: 사이클이 있거나, 양방향 그래프이면 방문 처리 해야함
function bfs(graph, isVisiteds, startIndex) {
  const visitingIndexs = []; // todo: bfs는 큐를 생성하고 본다라고 생각하고 알고리즘을 외우면 좋을듯
  visitingIndexs.push(startIndex);
  isVisiteds[startIndex] = true; // note: index를 갈 수 있으니까 que에 추가하고 ** 미리 visit처리한것임 **

  while (visitingIndexs.length) {
    const nextIndex = visitingIndexs.shift();
    graph[nextIndex].forEach(index => {
      if (isVisiteds[index]) return;
      visitingIndexs.push(index);
      isVisiteds[index] = true;  // note: index를 갈 수 있으니까 que에 추가하고 ** 미리 visit처리한것임 **
    });
  }
}