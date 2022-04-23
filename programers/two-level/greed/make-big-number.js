
// note: 
// note: https://programmers.co.kr/learn/courses/30/lessons/42883

// note: 28:23 , 19.42, 07:33

function solution(number, k) {
  const numbers = number.split('');

  const answers = [];
  const pickNumber = numbers.length - k;

  let startIndex = 0;
  for (let i = pickNumber; i > 0; i--) {

    let bigIndex = startIndex;
    for (let j = startIndex ; j <= numbers.length - i; j++) {
      if (numbers[j] > numbers[bigIndex]) {
        bigIndex = j;
      }
    }
    startIndex = bigIndex + 1;
    answers.push(number[bigIndex]);

    if (numbers.length - startIndex === i - 1) {
      answers.push(...numbers.slice(startIndex));
      break;
    }
  }

  return answers.join('');
}

// console.log('solution("1924", 2)', solution("1924", 2));
// console.log('solution("1924", 2)', solution("1231234", 3));
// console.log('solution("1924", 2)', solution("4177252841", 4));



console.log('solution("1924", 2)', solution("12345678901234599999", 15));