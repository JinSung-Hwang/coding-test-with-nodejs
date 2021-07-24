function solution(arr) {
  if (arr.length === 0) return 0;

  const result = arr.reduce((a, b) => a + b);

  return result / arr.length;
}


console.log(solution([1, 2, 3, 4, 5]));