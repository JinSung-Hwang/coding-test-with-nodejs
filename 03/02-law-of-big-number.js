

// note: N 배열의 크기
// note: M 숫자가 더해지는 횟수
// note: K 번을 초과하여 더해 질 수 없다.
// note: array 배열 값

function LawOfBigNumber(n, m, k, inputs) {
  inputs.sort((a, b) => b - a);

  let result = 0; // note: 변수에 초기화를 안하니 계산이 안된다. 
  let biggestNumber = inputs[0];
  let bigNumberable = k;
  for (let i = 0 ; i < m ; i++) {
    if (bigNumberable === 0) {
      bigNumberable = k;
      biggestNumber = inputs[1];
    } else {
      --bigNumberable;
      biggestNumber = inputs[0];
    }
    result += biggestNumber;
  };

  return result
}


console.log(LawOfBigNumber(10, 20, 4, [10, 2, 3, 4, 1, 2, 8, 9, 9, 0]));

