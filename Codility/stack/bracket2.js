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
  console.log(solution('('));
  // output();
})();

function solution(S) {
  let stack = [];
  let brackets = S.split('');

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === '(') stack.push(brackets[i]);
    else {
      let lastBracket = stack.pop();
      if (lastBracket !== '(') return 0;
    }
  }
  if (stack.length > 0) return 0;

  return 1;
}