

function solution(answers) {
  const supo1Pattern = [1, 2, 3, 4, 5];
  const supo1PatternSize = supo1Pattern.length;
  const supo2Pattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo2PatternSize = supo2Pattern.length;
  const supo3Pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // note: 여기를 [3, 3, 2, 2, 1, 1, 4, 4, 5, 5] 라고 쓰고 3시간 이상은 삽질했다. 진성아 문제를 잘 읽자
  const supo3PatternSize = supo3Pattern.length;

  let supo1TrueCount = 0;
  let supo2TrueCount = 0;
  let supo3TrueCount = 0;
  answers.forEach((answer, index) => {
    if (answer === supo1Pattern[index % supo1PatternSize]) supo1TrueCount++;
    if (answer === supo2Pattern[index % supo2PatternSize]) supo2TrueCount++;
    if (answer === supo3Pattern[index % supo3PatternSize]) supo3TrueCount++;
  });

  const maxCount = Math.max(...[supo1TrueCount, supo2TrueCount, supo3TrueCount]);
  const answer = [
    { name: 1, value: supo1TrueCount }, 
    { name: 2, value: supo2TrueCount }, 
    { name: 3, value: supo3TrueCount },
  ].filter(answer => answer.value === maxCount).map(answer => answer.name);

  return answer;
}


console.log('soution', solution([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])); // 1, 3
console.log('soution', solution([4, 4, 4, 4, 4, 4, 4, 4, 4, 4])); // 1, 3
console.log('soution', solution([3, 3, 3, 3, 3, 3, 3, 3, 3, 3])); // 1, 3
console.log('soution', solution([2, 2, 2, 2, 2, 2, 2, 2, 2, 2])); // 2
console.log('soution', solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // 1
console.log('soution', solution([0]));
console.log('soution', solution([1, 2, 5, 5, 2]));