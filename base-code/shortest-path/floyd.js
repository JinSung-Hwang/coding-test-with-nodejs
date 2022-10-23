// note: 플로이드 워셜 알고리즘
// note: 이 알고리즘은 동적프로그래밍을 이용하여 '거쳐 가는 노드'를 기준으로 최단 거리 테이블을 갱신하는 방식으로 동작
// note: 모든 지점에서 다른 모든 지점까지의 최단 경로를 게산합니다

// note: O(V^3) 의 시간 복잡도가 걸린다.


// note: graph 자료구조 초기화 방법
// note: 1. 자기 자신으로 가는 비용은 0으로 초기화
// note: 2. graph[a][b]위치에는 가는 비용이 모두 초기화 되어있어야한다. (아마 문제에서 줄듯)

function Floyd() {
	for (let k = 1; k <= n; k++) // note: 가운데 노드
		for (let a = 1; a <= n; a++) // note: 시작 노드
			for (let b = 1; b <= n; b++) // note: 마지막 노드
				graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]); //note: 가운데를 거쳐가는 것이 더 빠르면 그걸로 업데이트한다.
}


min(d[s][k] + d[k][a] + d[k][b]) 