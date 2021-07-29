
function Dijkstra(startNode, adjacentMatrix) {
  const isVisiteds = Array(6).fill(false);
  const shortestPaths = Array(6).fill(Infinity);

  shortestPaths[startNode] = 0;

  for (let i = 0 ; i < adjacentMatrix.length ; i++) {

    let minIndex = null;
    for (let j = 0; j < shortestPaths.length; j++) { // note: 최단 노드 선택
      if      (isVisiteds[j]) continue;
      else if (minIndex === null) minIndex = j;
      else if (shortestPaths[j] < shortestPaths[minIndex]) minIndex = j;
    }
    isVisiteds[minIndex] = true; // note: 방문 처리
    let visitIndex = minIndex;
    for (let l = 0 ; l < shortestPaths.length ; l++) { // note: 최단 거리 갱신
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