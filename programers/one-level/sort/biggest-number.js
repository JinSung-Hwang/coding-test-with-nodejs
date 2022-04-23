
function solution(numbers) {
  return numbers.sort((a, b) => {
    const aStr = a + '';
    const bStr = b + '';
    if (aStr < bStr) {

      console.log('aStr bStr', aStr, bStr);
      

      return 1;
    } else {
      return -1;
    }

  }).join('');
}

console.log('solution', solution([6, 10, 2]));
console.log('solution', solution([3, 30, 34, 5, 9]));

