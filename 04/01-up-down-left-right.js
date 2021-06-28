

// fixme: 처음 구현시간 40분 걸린건가?? (자료형 바꿨다가 변수명 바꿧다가 조건문 부울대수 적용했다가...) 디버깅도 5번을 했다. 나중에 다시 풀고 얼마나 구현력이 달라졌는지 비교하자

function upDownLeftRight(mapSize, movePlans) {

  // note: 배열 0번 인덱스는 raw 좌표이고 1번 인덱스는 column 좌표입니다. 
  const directUDLR = {
    U: [-1, 0], 
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  }

  let currentPosition = {
    raw: 1,
    column: 1,
  };

  movePlans.forEach(movePlan => {
    const [raw, column] = directUDLR[movePlan];

    const changingPositionRaw = currentPosition.raw + raw;
    const changingPositionColumn = currentPosition.column + column;
    if ( (1 <= changingPositionRaw && changingPositionRaw <= mapSize) && (1 <= changingPositionColumn && changingPositionColumn <= mapSize) ) {
      currentPosition.raw = changingPositionRaw;
      currentPosition.column = changingPositionColumn;
    }
  });

  return currentPosition.raw + ' ' + currentPosition.column;
}


const mapSize = 100;
const movePlans = ['R', 'R', 'R', 'U', 'D', 'D'];

console.log(upDownLeftRight(mapSize, movePlans));