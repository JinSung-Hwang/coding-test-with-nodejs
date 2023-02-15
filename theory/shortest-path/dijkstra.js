// note: 다익스트라 알고리즘

// note: 방문한 노드에서 가장 짧은 거리를 우선적으로 탐색함
// note: -> 가장 짧은 거리로 노드를 방문했다면 더 짧은 거리로 이 노드를 다시 올 수 없다

// note: 동작 과정
// note: 1. 출발 노드를 설정한다.
// note: 2. 최단 거리를 테이블을 초기화한다.
// note: 3. 방문하지 않는 노드 중에서 최단거리가 가장 짧은 노드를 선택한다.
// note: 4. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 최단 거리 테이블을 갱신합니다.
// note: 5. 3번과 4번

function dijkstra(n, start) {
  let shortestCost = [];
  let isVisiteds = Array(n).fill(false);
  let graph = Array(n).fill(null).map(() => Array(n).fill(Infinity));
  graph = graph.map((row, rIndex) => {
    return map((col, cIndex) => {
      if (rIndex === cIndex) return 0;
      else return Infinity;
    });
  })

  for (let i = 0; i < n; i++) {
    shortestCost[i] = graph[start][i];
  }
  isVisiteds[start] = true;
  for (let i = 0; i < n; i++) {
    let current = getMinIndex();
    isVisiteds[current] = true;
    for (let j = 0; j < n; j++) { // note: 방문한 노드에서 갈수 있는 모든 노드의 최소 비용을 모두 계산함
      if (!isVisiteds[j]) { // note: 이미 방문했다면 
        shortestCost[j] = Math.min(shortestCost[j] + graph[current][j], shortestCost[j])
      }
    }
  }

  function getMinIndex() {
    let min = Infinity;
    let index = 0;
    for (let i = 0; i < n; i++) {
      if (!isVisiteds[i] && shortestCost[i] < min) { // note: 방문하지 않은 노드중에서 가장 짧은 노드
        min = shortestCost[i];
        index = i;
      }
    }
    return i;
  }
}