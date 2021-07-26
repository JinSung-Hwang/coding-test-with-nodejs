

function BFS(graph, isVisiteds, startIndex) {
  const visitingIndexs = [];
  visitingIndexs.push(startIndex);

  while (visitingIndexs.length) {
    const nextIndex = visitingIndexs.shift();
    if (isVisiteds[nextIndex]) continue;

    console.log('nextIndex', nextIndex);
    isVisiteds[nextIndex] = true;
    visitingIndexs.push(...graph[nextIndex]);
  }
}

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
]

const isVisiteds = Array(9).fill(false);

const startIndex = 1;

BFS(graph, isVisiteds, startIndex);