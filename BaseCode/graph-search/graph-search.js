// note: 그래프란?
// note: 노드(Vertex) + 간선(Edge)으로 이루어진 자료구조

// note: 그래프 종류
// note: 1. 방향, 무방향
// note: 2. 가중치 있는, 가중치 없는

// note: 그래프의 한 개념
// note: 1. 차수: 모든 정점의 차수(degree)의 합 = 간선의 개수의 2배 <--- 이 공식을 알아야 시간 복잡도를 계산할 수 있음


// note: 그래프 저장하는 방법
// note: 1. 인접 행렬
// note:   - A와 B를 잇는 간선 존재 여부 확인: O(1)
// note:   - A와 연결된 모든 정점 확인       : O(|V|)
// note:   - 공간 복잡도                     : O(|V| ^ 2) 

// note: 2. 인접 리스트
// note:   - A와 B를 잇는 간선 존재 여부 확인: O(min(deg(a), deg(B)))  / 방향성 그래프이면 O( deg(a) )  [여기서 deg는 차수를 말한다.]
// note:   - A와 연결된 모든 정점 확인       : O(deg(A))
// note:   - 공간 복잡도                     : O(|E|) 

// note: 그래프 문제의 핵심
// note: 1. 정점 & 간선에 대한 정확한 정의 
// note: 2. 간선 저장 방식을 확인하기!

// note: --------------------------------------------------------------------------------------------------------------------------------

// note: 그래프 탐색이란?
// note: 시작점에서 간선을 0개이상 사용해서 갈 수 있는 정점들은 무엇인가?

// note: 1. 깊이 우선 탐색 (Depth First Search)
// todo: function dfs(x) { // <---------- 모든 정점이 x로 한번씩만 등장한다. O(V)
// todo:   visit[x] = true; // x를 방문한다.
// todo:   
// todo:   for (y of graph[x]) { <------------ 인접행렬 O(V) / 인접 리스트 O(deg(x))
// todo:     if (visit[y]) return ; 
// todo: 
// todo:     dfs(y); // y에서 갈 수 있는 곳들도 확인 해보자
// todo:   }
// todo: }
// note: 시간복잡도: 인접 행렬 = O( V^2 ) / 인접 리스트 = O( deg(1) + deg(2) ..... + deg(v)) = O(2E) = O(E)
// note: 2. 너비 우선 탐색 (Breadth First Search)
// todo: function bfs(start) { // <---------- 모든 정점이 x로 한번씩만 등장한다. O(V)
// todo:   let que = [];
// todo:   que.push(start);
// todo:   visit[start] = true; // 미리 true 표시함
// todo:   
// todo:   while (que.isEmpty()) {
// todo:     let x = que.shift();
// todo:   
// todo:     for (y of graph[x]) { <------------ 인접행렬 O(V) / 인접 리스트 O(deg(x))
// todo:       if (visit[y]) return ; 
// todo:       
// todo:       que.push(y);
// todo:       visit[y] = true; // 미리 true 표시함
// todo:     }
// todo:   }
// note: 시간복잡도: 인접 행렬 = O( V^2 ) / 인접 리스트 = O( deg(1) + deg(2) ..... + deg(v)) = O(2E) = O(E)

// note: 그래프 탐색 문제 유형
// note: 1. 격자형 문제 
// todo:   static int[][] dir = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
// todo:   for (int k = 0; k < 4; k++) {
// todo:     let nx = x + dir[k][0];
// todo:     let ny = y + dir[k][1];
// todo:     if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;  // 지도를 벗어나는 곳으로 가는가?
// todo:   }
// note: 2. 문제에 그래프는 없지만 그래프를 만들어서 탐색하는 문제 = 경우의 수를 하나의 상태 혹은 노드라고 생각하고 그래프 탐색을 하는 경우
// note: 3. 가중치가 동일한 그래프에서 최단거리 탐색 문제 
// note:   - BFS를 활용한다. 