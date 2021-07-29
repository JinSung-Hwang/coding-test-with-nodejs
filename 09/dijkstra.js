
function Dijkstra(startNode, adjacentMatrix) {
  const isVisiteds = Array(6).fill(false);
  const shortestPaths = Array(6).fill(Infinity);

  shortestPaths[startNode] = 0;

  for (let i = 0 ; i < adjacentMatrix.length ; i++) {

    let minIndex = null;
    let minValue = Infinity;
    for (let j = 0; j < shortestPaths.length; j++) { // note: 최단 노드 선택
      if (!isVisiteds[j] && shortestPaths[j] < minValue) { // note: 방문하지 않고 가장 짧은 최단 거리의 노드를 구함
        minIndex = j;
        minValue = shortestPaths[j];
      }
    }

    isVisiteds[minIndex] = true; // note: 방문 처리
    let visitIndex = minIndex;
    for (let l = 0 ; l < shortestPaths.length ; l++) { // note: 최단 거리 갱신
      if (isVisiteds[l]) continue; // note: 이미 방문했다면 갱신하지 않는다

      shortestPaths[l] = Math.min(shortestPaths[l], shortestPaths[visitIndex] + adjacentMatrix[visitIndex][l]);
    }

  }
  return shortestPaths;
}

const adjacentMatrix = [
  [Infinity, 2, 5, 1, Infinity, Infinity],
  [Infinity, Infinity, 3, 2, Infinity, Infinity],
  [Infinity, 3, Infinity, Infinity, Infinity, 5],
  [Infinity, Infinity, 3, Infinity, 1, Infinity],
  [Infinity, Infinity, 1, Infinity, Infinity, 2],
  [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
];

const startNode = 0;

console.log('Dijkstra', Dijkstra(startNode, adjacentMatrix));