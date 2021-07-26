

// note: 재귀 함수는 컴퓨터 동작상 내부 메모리 스택 프레임에 저장이된다. 이를 이용하여 스택 자료 구조를 사용하지 않고 재귀함수를 이용하여 DFS를 구현할 수 있다. 

function DFS(graph, isVisiteds, visitingIndex) {
  if (isVisiteds[visitingIndex]) return ; // note: 방문했다면 넘어가기

  console.log('visit', visitingIndex);
  isVisiteds[visitingIndex] = true;

  graph[visitingIndex].forEach(adjacent => {
    return DFS(graph, isVisiteds, adjacent);
  });
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

DFS(graph, isVisiteds, startIndex);