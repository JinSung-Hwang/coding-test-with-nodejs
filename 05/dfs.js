
// note: Depth First Search (깊이 우선 탐색)
// note: 1. O(n)의 탐색 시간이 걸린다.
// note: 2. Stack을 이용하여 DFS를 구현한다. 하지만 보통 재귀함수만을 이용하여 DFS를 구현한다.
// note  3. 재귀 함수로 구현하면 조금 성능이 떨어져서 스택을 이용하여 구현해야 할 때도 있을 수도 있다. 
// note: 4. BFS보다는 약간 느리다. 

function DFS(graph, visitedIndex, isVisiteds) {
  isVisiteds[visitedIndex] = true; // note: 방문한 인덱스를 방문 처리한다.


  graph[visitedIndex].forEach(adjacent => {
    if (isVisiteds[adjacent]) return ;

    return DFS(graph, adjacent, isVisiteds);
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
];

const isVisiteds = [...Array(8).fill(false, 0, 8)];

const visitedIndex = 1;


DFS(graph, visitedIndex, isVisiteds);