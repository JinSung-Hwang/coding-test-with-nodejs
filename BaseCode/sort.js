// note: 정렬(Sorting)이란?
// note:   특정 조건에 맞춰 원소를 나열하는 방법

// note: 정렬 조건
// note:   1. 정렬 조건이 필요하다.
// note:   2. 시간 복잡도는 O(NlogN) 이다.
// note:     -> O(NlogN) 인데 정렬해도 괜찮은가?
// note:   3. in-place / stable 여부를 알아야 한다.
// note:     -> in-place(제자리): 정렬하는 과정중에 N개의 만큼 메모리를 추가적으로 사용해도 되는가? 
// note:     -> stable  (안정적): 동등한 위상의 원소들의 순서가 보존되어야 하는가?

// note: 정렬 특성
// note:   1. 같은 정보들은 인접해 있을 것이다.
// note:   2. 각 원소마다, 가장 비슷한 순서의 다른 원소는 자신의 양 옆이다.
// note:   3. 정렬만 해도 문제가 쉽게 풀리는 경우가 상당히 많다. 

// note: JS 내부 Sort는 TimSort 방식을 사용한다.
// note:   1. TimSort는 시간 복잡도: O(NlogN), 공간 복잡도: O(N)을 갖는다.
//     :   2. 팀소트는 내부적으로 insertion, merge sort를 결합한 방식이다

Array.sort((a, b) => {
  return a - b // note: 오름 차순 정렬
               // note: return 음수는 a가 먼저 
               // note: return 양수는 b가 먼저 
               // note: return 0은 우리는 친구

  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;  // note: 문자열 오름 차순 정렬
  return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;  // note: 문자열 내림 차순 정렬
});