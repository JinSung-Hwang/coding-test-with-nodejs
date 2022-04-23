// note: brakets


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
  console.log(solution('[{}]'));
  // output();
})();

function solution(S) {
  let stack = [];
  let brakets = S.split('');
  
  for (let i = 0; i < brakets.length; i++) {
    if (['[', '{', '('].includes(brakets[i])) stack.push(brakets[i]);
    else {
      let lastStack = stack.pop();
      if (brakets[i] === ']' && lastStack !== '[') return 0;
      if (brakets[i] === '}' && lastStack !== '{') return 0;
      if (brakets[i] === ')' && lastStack !== '(') return 0;
    }
  }
  if (stack.length !== 0) return 0;

  return 1;
}