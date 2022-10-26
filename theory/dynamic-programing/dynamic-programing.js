// note: 동적 프로그래밍이란?
// note:   계산 결과를 캐싱해두었다가 캐싱된 결과값을 이용하여 효율적으로 문제 푸는 방법

// note: 동적 프로그래밍
// note:   문제 접근 방법
// note:     1. 처음부터 동적 프로그래밍 문제인지는 알 수 없어 완전 탐색 풀이로 시도해봄
// note:     2. 완전 탐색 풀이는 너무 지나치게 많음
// note:     3. 빠르게 탐색하는 방법으로 동적 프로그래밍을 선택함

// note:   정형화된 풀이 방법
// note:     1. [가.가] 풀고 싶은 가짜 문제 가정하기
// note:       1-1. dp[i] = 1 ~ !번 원소에 대해서 조건을 만족하는 경우의 수
// note:       1-2. dp[i][j] = i ~ j번 원소에 대해서 조건을 만족하는 최댓값
// note:       1-3. dp[i][j] = 수열 A[1...i] 와 B[1...j]에 대해서 무언가를 계산한 값

// note:     2. [가.성] 가짜 문제를 풀면 진짜 문제가 풀 수 있는가? 성립하는지 확인하기 (확인 안되면 다시 1번 과정으로 이동)
// note:       2-1. dp 테이블을 모두 값을 채우면 진짜 문제의 답이 구해지는가?

// note:     3. [가.초] 가짜 문제 초기값구하기 (가장 작은 문제)                        (해결하거나 구할 수 없으면 다시 1번 과정으로 이동)
// note:       3-1. 더 쪼갤 수 없는 작은 문제 값을 직접 구함

// note:     4. [가.점]  가짜 문제 점화식 구해내기                                     (점화식을 구할 수 없으면 1번 과정으로 이동) [이 과정이 제일 어려움]
// note:       4-1. 가짜 문제 해답의 공통점 찾기, 해답의 공통점 묶기 (Partitioning)
// note:       4-2. 묶어낸 부분의 정답을 dp 배열을 이용하여 빠르게 계산하는 점화식 만들기 (이것도 중요)

// note:     - 만약 dp 배열에 값을 채우는데 누락된 정보, 조건이 있으면 정확한 Dp 배열이 안만들어진다.
// note:       -> 그러면 2차원 배열을 만들어서라도 누락된 정보를 모두 입력해줘야한다. 

// note:   역추적 (BackTrack)
// note:     결과값이 나오기까지 어떤 루트를 지나왔는지 계산하는 알고리즘
// note:     Dp 테이블을 채워갈때 현재 지점이 이전의 어떤 지점에서 왔는지 기록한다면 '결과값'이 어떤 루트를 지나왔는지 알 수 있다.


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let n;
let dp = [];

function input() {
   let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
   n = +inputs[0];
}

function output() {
  console.log(dp[n]);
}

(function main() {
  input();
  solution();
  output();
})();

function solution() {
  // note: 초기값 
  dp[1] = 0;
  dp[2] = 0;

  // note: Dp 테이블을 채우기 (가짜 문제를 풀기)
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}
