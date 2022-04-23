const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let inputs;

function input() {
  inputs = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
  inputs.shift();
}

function output() {
  // console.log(results.join('\n'));
}

(function main() {
  // input();
  console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
  // output();
})();

function solution(A, B) {
  let stack = [];
  
  for (let i = 0; i < A.length; i++) {
    if (stack.length === 0) {
      stack.push({size: A[i], direct: B[i]});
      continue;
    }
    let lastFish = stack.pop();
    if (lastFish.direct !== B[i]) { // 이전 물고기와 방향이 다르면
      if (lastFish.size > A[i]) stack.push(lastFish);
      else stack.push({size: A[i], direct: B[i]});

    } else {
      stack.push(lastFish);
      stack.push({size: A[i], direct: B[i]});
    }
  }
  return stack.length;
}