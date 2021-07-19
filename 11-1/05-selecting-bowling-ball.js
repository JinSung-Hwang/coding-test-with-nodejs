
function selectBowlingBall(n, m, ballTypes) {
  let answer = 0;

  const ballCounts = Array(n).fill(0);

  ballTypes.forEach(ball => {
    ballCounts[ball]++;
  });

  for (let i = 1; i <= m; i++) {
    n -= ballCounts[i]; // 무게가 i인 볼링공의 개수(A가 선택할 수 있는 개수) 제외
    answer += ballCounts[i] * n; // B가 선택하는 경우의 수와 곱해주기
}

  return answer;
}

const m = 5;
const ballTypes = [1, 5, 4, 3, 2, 4, 5, 2]
const n = ballTypes.length;

console.log(selectBowlingBall(n, m, ballTypes));