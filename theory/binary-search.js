// note: 탐색(Search)란?
// note:   집합(배열, 그룹)에서 원하는(조건) 원소를 찾는것

// note: 이분 탐색(Binary Search)란? 
// todo:   1. '정렬이 보장되는 배열'에서 기준(X)을 가지고 범위를 '이분'하면서 탐색하는 방법
// note:   2. 시간 복잡도 O(logN) 을 갖는다

// note: 이분 탐색 문제를 풀면서 자주하는 실수 
// todo:   1. 입력된 배열에 바로 이분 탐색을 하는데, 정렬을 하지 않는 경우
// note:   2. L, R, M, Result 변수의 정의를 헷갈려서 부등호 등을 잘못 쓰는경우
// note:   3. L, R 범위를 잘못 설정하거나 Result의 초기값을 잘못 설정하는 경우

// note: 매개 변수 탐색(Parametric Search)란?
// note:   이분 탐색의 아이디로를 이용하여 Yes/No문제(결정 문제)로 만들어 경계값을 구하는 탐색법

// note: 매개 변수 탐색 핵심 [문제를 거꾸로 푸는 것이기 떄문에 통찰력이 필요하고 훈련이 많이 필요하다]
// todo:   1. 정답을 '매개 변수'로 만들고 Yes/No문제(결정 문제)로 바꿔 보기
// note:   2. 모든 값에 대해서 Yes/No를 채웠다고 생각 했을때, 정렬된 상태인가?
// note:   3. Yes/No 결정하는 문제를 풀기!

// note: 매개 변수 탐색 문제 풀면서 자주하는 실수
// todo:   1. 매개 변수에 대한 결정이 Nooooooooo Yesssssssss 꼴이 아닌데 이분 탐색하는 경우 
// note:   2. L, R, M, Result 변수의 정의를 헷갈려서 부등호 등을 잘못 쓰는경우
// note:   3. L, R 범위를 잘못 설정하거나 Result의 초기값을 잘못 설정하는 경우

// note: 매개 변수 키워드
// note:   1. ~의 최댓값을 구하시오  (~는 떡, 나무등의 길이, 무게 등의 최댓값이 될 수 있다)
// note:   2. ~의 최솟값을 구하시오  (~는 떡, 나무등의 길이, 무게 등의 최솟값이 될 수 있다)

function binarySearch(array, L, R, X) {
  // note: array에서 x 미만의 수 (x 보다 작은 수) 중 제일 오른쪽 인덱스를 return 하는 함수
  // note: 그런게 없다면 L - 1을 return 한다

  let result = L - 1; // note: 초기값이 갱신되지 않으면 그대로 자기 값을 돌려주고 싶어서 L - 1로 만들었다
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (array[mid] < X) {  // note:   L . . . M . X . R ??
      result = mid;
      L = mid + 1; // note: mid는 L + R의 중간값이니 L을 땡겨야한다.
    } else if (array[mid] >= X) {
      result = mid;
      R = mid - 1;
    }
  }
  return result;
}


// note: L 이 1부터 시작하는 함수
function lowerBound(array, L, R, X) { // note: 하한선을 구하는 함수 [array에서 x 미만의 수 (x 보다 작은 수) 중 '제일 오른쪽 인덱스'를 return 하는 함수]
  let result = L - 1;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (array[mid] < X) {  // note:   L . . . M . X . R ??
      result = mid;
      L = mid + 1; // note: mid는 L + R의 중간값이니 L을 땡겨야한다.
    } else {
      R = mid - 1;
    }
  }
  return result; // note: X 미만의 수 중 제일 오른쪽 '인덱스'를 return하는 함수이기에 +1 을하면 개수가 된다
}


function lowerBound2(array, L, R, X) { // note: 하한선을 구하는 함수 [array에서 x 미만의 수 (x 보다 작은 수) 중 '제일 오른쪽 인덱스'를 return 하는 함수]
  let result = L - 1; 
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (array[mid] < X) {  // note:   L . . . M . X . R ??
      result = mid; // note: X 보다 작을떄 result값을 저장한다.
      L = mid + 1; // note: mid는 L + R의 중간값이니 L을 땡겨야한다.
    } else {
      R = mid - 1;
    }
  }
  return result + 1; // note: X 미만의 수 중 제일 오른쪽 '인덱스'를 return하는 함수이기에 +1 을하면 개수가 된다
}

function lowerBound3(array, L, R, X) { // note: 하한선을 구하는 함수 [array에서 x 미만의 수 (x 보다 작은 수) 중 '제일 오른쪽 인덱스'를 return 하는 함수]
  let result = L - 1; // note: array의 길이가 1인경우에는 L, R이 모두 0으로 들어온다. 그러면 return할때 result값이 +1되는데 result값을 0으로 맞춰주기 위해서 초기값을 -1함
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (array[mid] < X) {  // note:   L . . . M . X . R ??
      result = mid; // note: X 보다 작을떄 result값을 저장한다.
      L = mid + 1; // note: mid는 L + R의 중간값이니 L을 땡겨야한다.
    } else {
      R = mid - 1;
    }
  }
  return result + 1; // note: result+1을하면 x와 같은 수중에서 제일 왼쪽 인덱스 값을 리턴하게 된다.
}

// note: L 이 1부터 시작하는 함수
function upperBound(array, L, R, X) { // note: 상한선을 구하는 함수 [array에서 x 초과의 수 (x 보다 큰 수) 중 '제일 왼쪽 인덱스'를 return 하는 함수]
  let result = R + 1;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (array[mid] < X) {  // note:   L . . . M . X . R ??
      L = mid + 1; 
    } else {
      result = mid;
      R = mid - 1;
    }
  }
  return result;
}

function upperBound2(array, L, R, X) { // note: 상한선을 구하는 함수 [array에서 x 초과의 수 (x 보다 큰 수) 중 '제일 왼쪽 인덱스'를 return 하는 함수]
  let result = R + 1;
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (array[mid] < X) {  // note:   L . . . M . X . R ??
      L = mid + 1; 
    } else {
      result = mid; // note: X 보다 클때 result값을 저장한다.
      R = mid - 1;
    }
  }
  return result + 1;
}

function upperBound3(array, L, R, X) { // note: 상한선을 구하는 함수 [array에서 x 초과의 수 (x 보다 큰 수) 중 '제일 왼쪽 인덱스'를 return 하는 함수]
  let result = R + 1; // note: array의 길이가 1인경우에는 L, R이 모두 0으로 들어온다. 그러면 return할때 result값이 -1되는데 result값을 0으로 맞춰주기 위해서 초기값을 +1함
  while (L <= R) {
    let mid = Math.floor((L + R) / 2);
    if (array[mid] <= X) {  // note:   L . . . M . X . R ??
      L = mid + 1; 
    } else {
      result = mid; // note: X 보다 클때 result값을 저장한다.
      R = mid - 1;
    }
  }
  return result - 1; // note: result-1을하면 x와 같은 수중에서 제일 오른쪽 인덱스 값을 리턴하게 된다.
}
