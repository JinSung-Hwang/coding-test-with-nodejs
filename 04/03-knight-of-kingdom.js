

// note: 목표 시간대는 15분대 까지 끊으면 코테에서 긴장하고 그러면 비슷하게 갈 수 있겠지...


// note: 최초 구현: 26:36분 걸림, 23번의 파일 실행 

function KnightOfKingdom(currentPosition) {
  
  const steps = [
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
  ];

  const char2number = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  }

  const x = char2number[currentPosition.substring(1, 0)];
  const y = +currentPosition.substring(2, 1);

  let nextCount = 0;

    console.log('n', x, y);
  steps.forEach(step => {
    const nextXPosition = x + step[0];
    const nextYPosition = y + step[1];
    console.log('nextXPosition', nextXPosition, nextYPosition);

    if (1 <= nextXPosition && nextXPosition <= 8 && 1 <= nextYPosition && nextYPosition <= 8) 
      nextCount++;
  });

  return nextCount;
}


const currentPosition = 'c2';

console.log(KnightOfKingdom(currentPosition));