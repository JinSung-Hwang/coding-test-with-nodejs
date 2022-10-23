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


// note: 방문을 체크하지 않는 DFS
// note: 단방향 그래프에서만 가능함
function dfs(graph, visitingIndex) {
  graph[visitingIndex].forEach(index => {
    return dfs(graph, index);
  });
}

// note: 방문 노드를 체크하는 DFS
// note: 양방향 그래프에서는 방문처리를 계산해서 중복된 노드를 탐색하지 않아야함
function dfs(graph, isVisiteds, visitingIndex) {
  if (isVisiteds[visitingIndex]) return ; // note: 방문했다면 넘어가기

  isVisiteds[visitingIndex] = true; // note: 방문했으니 방문처리

  graph[visitingIndex].forEach(index => {
    return dfs(graph, isVisiteds, index);
  });
}

// note: 방문 노드를 체크하고 방문한곳을 기록하는 DFS
// note: 양방향 그래프에서는 방문처리를 계산해서 중복된 노드를 탐색하지 않아야함
function dfs(graph, isVisiteds, visitingIndex, dfsPath) {
  dfsPath.push(visitingIndex); // note: 방문한 곳을 저장함
  if (isVisiteds[visitingIndex]) return ; // note: 방문했다면 넘어가기
  isVisiteds[visitingIndex] = true; // note: 방문했으니 방문처리

  graph[visitingIndex].forEach(index => {
    return dfs(graph, isVisiteds, index, dfsPath);
  });
}

// note: 방문체크 하지 않는 Stack으로 구현된 DFS
// note: 단방향 그래프에서 사용한다.
// note: callStack이 1만을 넘어갈때 사용한다.
function dfsWithStack(graph, visitingIndex) {
  let stack = [];
  stack.push(visitingIndex);

  while (stack.length !== 0) {
    let nextIndex = stack.pop();
    graph[nextIndex].forEach(index => {

      stack.push(index);
    });
  }
};

// note: 방문체크 하는 Stack으로 구현된 DFS
// note: 양방향 그래프에서 사용한다.
// note: callStack이 1만을 넘어갈때 사용한다.
function dfsWithStack(graph, isVisiteds, visitingIndex) {
  let stack = [];
  stack.push(visitingIndex);
  isVisiteds[visitingIndex] = true;  // note: index를 갈 수 있으니까 que에 추가하고 ** 미리 visit처리한것임 **

  while (stack.length !== 0) {
    let nextIndex = stack.pop();
    graph[nextIndex].forEach(index => {
      if (isVisiteds[index]) return ; // note: 방문했다면 넘어가기

      stack.push(index);
      isVisiteds[index] = true;  // note: index를 갈 수 있으니까 que에 추가하고 ** 미리 visit처리한것임 **
    });
  }
};