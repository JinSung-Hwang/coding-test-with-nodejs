

function solution(number) {
  var answer = 0;

  const numbers = number.split('');

  // note: 순열을 구하는 코드

  // note: 순열 배열을 하나씩 소수인지 판별하는 알고리즘




  return answer;
}


function isPrimeNumber(primeNumber) {
  if (primeNumber === 2) return true;
  if (primeNumber === 3) return true;


  let divisorCount = 0;
  for (let i = 2 ; i < Math.sqrt(primeNumber) ; i++) {
    if (primeNumber % i === 0) {
      divisorCount++;
    }
  }

  return divisorCount === 0 ? true : false;
}