
// note: 26:43  14: 30, 08:34, 06:29(40)

function solution(n, lost, reserve) {
  const uset = new Set(lost);
  const rset = new Set(lost);
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  lost.forEach((l, i) => {
    reserve.forEach((r, j) => {
      if (l === r) {
        lost[i] = null;
        reserve[j] = null;
      }
    });
  });

  const lostCount = lost.filter(l => l !== null).length;

  let rentCount = 0;
  let isCount = false;
  lost.filter(l => l !== null).forEach((l, i) => {
    if (l === null) return ;
    isCount = false;
    reserve.filter(r => r !== null).forEach((r, j) => {
      if (r === null) return ;
      if (isCount) return ;
      if (l === r - 1 || l === r + 1) { // null + 1 은... 1이다.
        lost[i] = null;
        reserve[j] = null;
        rentCount++;
        isCount = true;
      }
    });
  });

  return n - lostCount + rentCount;
}


console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10]));





// 2, 15, 25, 42
// function solution(n, lost, reserve) {
//   const lostLength = lost.length;

//   lost.sort((a, b) => a > b);
//   reserve.sort((a, b) => a > b);

//   let count = 0;
//   for (let i = 0; i < lost.length; i++) { // note: 본인의 체육복도 잃어 버린 학생들을 구함
//     for (let j = 0; j < reserve.length; j++) {
//       if (lost[i] === reserve[j]) {
//         lost[i] = -2;
//         reserve[i] = -2;
//         count++;
//       }
//     }
//   }

//   for (let i = 0; i < lost.length; i++) { // note: 빌려줄 수 있는 학생 카운트
//     for (let j = 0; j < reserve.length; j++) {
//       if (lost[i] < 0 || reserve[j] < 0) continue;

//       if (lost[i] === reserve[j] - 1 || lost[i] === reserve[j] + 1) {
//         lost[i] = -2;
//         reserve[j] = -2;
//         count++;
//       }
//     }
//   }

//   return n - lostLength + count;
// }





// // note: 초기화 이전에 프로그래머스에 있던 코드 
// function solution(n, lost, reserve) {
//   const lostLength = lost.length;

//   lost.sort((a, b) => a > b);
//   reserve.sort((a, b) => a > b);

//   let noReservables = [];
//   for (let i = 0; i < lost.length; i++) { // note: 본인의 체육복도 잃어 버린 학생들을 구함
//     for (let j = 0; j < reserve.length; j++) {
//       if (lost[i] === reserve[j]) noReservables.push(reserve[j]);
//     }
//   }

//   for (let i = 0; i < lost.length; i++) { // note: 빌려줄 수 있는 학생 카운트
//     for (let j = 0; j < reserve.length; j++) {
//       if (isInclude(noReservables, lost[i])) continue;
//       if (isInclude(noReservables, reserve[j])) continue;

//       if (lost[i] === reserve[j] - 1 || lost[i] === reserve[j] + 1) {
//         noReservables.push(reserve[j]);
//         break;
//       }
//     }
//   }

//   return n - lostLength + noReservables.length;
// }


// function isInclude(array, element) {
//   let isInclude = false;
//   array.forEach(item => {
//     if (item === element) isInclude = true;
//   });
//   return isInclude;
// }