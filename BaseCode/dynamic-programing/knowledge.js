// note: 분할 정복과 동적 프로그래밍 비교
{
  // note: 분할 정복으로 풀면 같은 값들을 중복해서 계산하기때문에 효율적이지 못하다 
  function fibonacci(arange) {
    if (arange === 0) return 0
    if (arange === 1) return 1
  
    return fibonacci(arange - 2) + fibonacci(arange - 1);
  }
  console.log('분할 정복 피보나치 수열 결과', fibonacci(30));
  
  
  // note: 동적 프로그래밍 (분할 정복에 캐시가 더해진 형태)  동적 프로그래밍의 2가지 방식이 있다고합니다.
  // note: 1. 메모이제이션 프로그래밍 (메모아이제이션) 밑에 피보나치 수열로 짠것이 그 형태입니다. 값이 필요할때마다 그때그때 값을 계산합니다. (메모라이제이션은 그냥 필요한 내용을 메모한다고 생각하면 된다.)
  // note: 하향식 접근 방법 (top-down) // 재귀가 밑에 값을 계속 요구한다.
  // note: 재귀 형식이라서 콜스택 제한을 받을 수가 있다.
  function fibonacci2(n, memo) {
    const memoization = memo || [];
  
    if (n < 2)          return memoization[n];
    if (memoization[n]) return memoization[n]; // note: 여기 줄이 핵심, 배열에 값이 없으면 아래 return을 실행함
  
    return memoization[n] = fibonacci2(n - 1, memoization) + fibonacci2(n - 2, memoization);
  }
  console.log('동적 프로그래밍(메모이제이션) 피보나치 수열 결과', fibonacci2(50, [0, 1]));
  
  
  // note: 2. 타뷸레이션 프로그래밍 // 값을 미리 다 계산해두고 결과를 반환하는 계산법입니다. 대부분의 상황에서는 타뷸레이션이 속도가 빠르다. 
  // note: (백준 기준으로는 메모이제이션이든 타뷸레이션이든 모두 풀리게 되어있다고 한다.) (타뷸레이션은 테이블에 정리한다는 의미)
  // note: 상향식 접근 방법 (bottom-up) // 포문이 밑에부터 계속해서 위에 값을 구한다.
  // note: 콜스택에 제한을 받을일이 거의 없다.
  // note: 재귀 없이 그냥 일반 프로그래밍 짜듯이 반복문 사용하면 된다. 
  function fibonacci3(n) {
    let memo = [0, 1];
    
    if (n < 2) return n;
    for (let i = 2 ; i < n + 1 ; i++) {
      memo[i] = memo[i - 2] + memo[i - 1];
      console.log('memo[' + i + ']', memo[i]);
    }
  
    return memo[n];
  }
  console.log('동적 프로그래밍(타뷸레이션) 피보나치 수열 결과', fibonacci3(50));
}