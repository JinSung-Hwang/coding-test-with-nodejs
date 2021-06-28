
// note: 문제 읽는 시간 제외 39:57, 14번의 파일 실행 

function gameDevelopment(n, m, a, b, d, map) {

  const directs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  let movingCount = 1;
  for (;;) {
    let isFinal = false;
    let moveChance = 4;
    directs.forEach(d => {
      moveChance--;

      const nextA = d[0] + a;
      const nextB = d[1] + b;

      if (map[n * nextA + nextB] === 0) { // note: 바다면 안됨, 갔던 곳이면 안됨 
        moveChance++;
        movingCount++;

        map[n * a + b] = 1;

        [a, b] = [nextA, nextB];
      }
      if (moveChance === 0) { // note 안 움직였으면 로직은 끝내라 
        isFinal = true;
      }

    });
    if (isFinal) break;
  }

  return movingCount;
}


const n = 4;
const m = 4;
const a = 1;
const b = 1;
const d = 0;
const map = [
  1, 1, 1, 1,
  1, 0, 0, 1,
  1, 1, 0, 1,
  1, 1, 1, 1,
];

console.log(gameDevelopment(n, m, a, b, d, map));

