function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a > b);

  for (let p of d) {
      if (p > budget) {
          break;
      } else {
          budget -= p;
          answer += 1;
      }
  }

  return answer;
}
const d = [1,3,2,5,4, 10, 11, 20];
const budget = 9;
console.log('solution(d, budget)', solution(d, budget));
