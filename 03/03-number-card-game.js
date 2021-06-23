// note: n 행
// note: m 열
// note: matrix 카드 더미 

function numberCardGame(n, m, matrix) {
  const minimuns = [];

  matrix.forEach(raw => {
    // xxx: minimuns.push(Math.min(...raw));  짧게 쓸수는 있지만 문제가 발생 할 수도 있음 그래서 15번 라인처럼 해결함
    // xxx: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    
    minimuns.push(raw.reduce((a, b) => Math.min(a, b)));
  });

  return Math.max(...minimuns);
}

const n = 3;
const m = 3;
const matrix = [[4, 1, 2,], [4, 1, 4], [3, 3, 3]];

console.log(numberCardGame(n, m, matrix));