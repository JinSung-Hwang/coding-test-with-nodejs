// note: 최단 거리란
// note:   그래프의 시작점에서 다른 지점까지의 최단 거리

// note: 최단 거리 문제 상황 
// note: 1. 한 지점에서 다른 한 지점까지의 최단 경로 / BFS 사용            / 단, 가중치가 모두 1이어야한다. 
// note: 2. 한 지점에서 모든 지점까지의 최단 경로    / Dijkstra 사용       / 단, 가중치가 모두 양수이어야 한다.
// note: 3. 모든 지점에서 모든 지점까지의 최단 경로  / Floyd-warchall 사용 / 

// note: 최단 거리 알고리즘 (BFS, Dijkstra 만 코딩테스트에 나옴)
// note:      이름      | 가중치 | 시작점  | 도착점    | 시간 복잡도
// note:   1. BFS       | 모두 1 | 한 정점 | 모든 정점 | O (V + E)
// note:   2. Dijkstra  | 0 이상 | 한 정점 | 모든 정점 | O (E log v) -> 다익스트라 알고리즘이 더 빠름
//     :   3. Floyd-Warshall
//     :   4. Bellman-Ford
//     :   5. SPFA
//     :   6. A*