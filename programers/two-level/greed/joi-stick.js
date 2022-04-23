

// note: 10, ??? , 2시간 30분, 30분
// note: 알고리즘 설계 제대로 안하니까 구현하는데 엄청 오래걸렸음.. 그리고 문제 파악 재대로 못해서 풀고 다시 문제읽음...
// note: https://programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
  const aAscii = 65;

  const names = name.split('');
  let counts = [0];

  let changeIndexs = [];
  names.forEach((char, index) => { 
    if (char.charCodeAt() !== aAscii) { //note: 바꾸어야할 인덱스인지 확인
      changeIndexs.push(index);
      changeCount(char, counts);
    }
  });

  moveCount(changeIndexs, names.length, counts);

  return counts[0];
}

function moveCount(changeIndexs, nameLength, counts) {
  let currentPosition = 0;
  const changeIndexsSize = changeIndexs.length;
  for (let i = 0; i < changeIndexsSize; i++) {

    let minDistance = Infinity;
    let minIndex = null;
    for (let j = 0; j < changeIndexs.length; j++) {
      const distance = Math.abs(changeIndexs[j] - currentPosition) < Math.floor(nameLength / 2) + 1? 
        Math.abs(changeIndexs[j] - currentPosition) :
        nameLength - changeIndexs[j] + currentPosition;

      if (distance < minDistance) {
        minDistance = distance;
        minIndex = j;
      }
    }
    currentPosition = changeIndexs[minIndex];
    counts[0] += minDistance;

    changeIndexs.splice(minIndex, 1);
  }
}


function changeCount(char, counts) {
  const aAscii = 65;
  const alphabetCycle = 26;
  const halfDistance = 12;

  const char2ascii = char.charCodeAt();
  if (char2ascii === aAscii) return ;

  if (char2ascii - aAscii <= halfDistance) { // note: 커서의 상하를 따져 최소 비용을 찾음
    counts[0] += char2ascii - aAscii;
  } else {
    counts[0] += alphabetCycle - char2ascii + aAscii;
  }
}

// console.log(solution('JEROEN'));
// console.log(solution('JAN'));
// console.log(solution('ABAAAAAAAAABB'));
// console.log(solution('AABAAAAAAABBB'));
// console.log(solution('BBBAAB'));
// console.log(solution('ZAAAZAAAAAA'));
// console.log(solution('NNAAAAANNN'));
console.log(solution('ZAAAZZZZZZZ')); // 15