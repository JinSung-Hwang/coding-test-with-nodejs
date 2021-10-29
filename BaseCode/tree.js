// note: 트리란? 
// note:   그래프의 특수한 조건 3개중 2개를 만족하는 형태이다
// note:     1. 모든 정점이 연결 되어있는가?
// note:     2. 그래프에서 사이클이 존재하지 않는가?
// note:     3. 정점 개수( |V| ) = 간선 개수( |E| ) + 1

// note: Rooted Tree (보통 Rooted Tree로 이용하여 문제를 푼다)
// note: node = 정점, root = 최상위 정점, depth = root간 깊이 (0, 1, 2 [문제에따라 다르게 정의할수도 있음]), parent, child, ancestor, sibling, leaf node

// note: 트리 문제인지 알 수 있는 키워드
// note:   1. 모든 두 정점 사이에 이들을 잇는 경로가 존재하면서, 사이클이 존재하지 않는 경우만 고려한다
// note:   2. 마을과 마을 사이를 직접 있는 n -1 개의 길이 있으며 모든 마을은 연결 되어있다
// note:   3. 문제는 일반적 그래프가 아니라 트리이다(연결되어 있고 사이클이 없는 그래프)

// note: 트리를 저장 하는 방법
// todo:   공간 복잡도 이슈 때문에 보통은 '인접 행렬'이 아니라 '인접 리스트'를 이용한다. 

// note: 문제의 핵심
// note:   1. 정점 & 간선에 대한 정확한 정의가 필요하다
// note:     (주어지는 그래프는 변형해서 인접 리스트를 만들어야할 수도 있고 그냥 그것을 잘 활용해서 문제를 풀어야할 수 도 있다)
// note:   2. 트리의 특성을 이용하여 부모를 구하거나, 조상을 구하거나, 리프 노드, 형제를 구할 수도 있다
// todo:   3. 대부분 DFS 를 사용하는 것이 좋다
// note:     서브 트리 개념을 이용하여 DP를 사용 할 수 있기 때문에 DFS를 사용하는 것이 좋다