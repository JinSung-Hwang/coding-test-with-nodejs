const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let result = '';
let n;
let inputs;

class CStack {
  constructor() {
    this.storage = [];
  }

  push(element) {
    return this.storage.push(element);
  }

  pop() {
    return this.empty() ? '-1' : this.storage.pop();
  }

  size() {
    return this.storage.length;
  }

  empty() {
    return this.storage.length === 0 ? 1 : 0;
  }

  top() {
    return this.empty() ? '-1' : this.storage[this.storage.length - 1];
  }
}

function input() {
  inputs = fs.readFileSync(filePath).toString().trim().split('\n');
  n = +inputs[0];
  inputs.shift();
}

function output() {
  console.log(result);
}

(function main() {
  input();
  solution();
  output();
})();

function solution() {
  let stack = new CStack;
  inputs.forEach(row => {
    if (row === 'top') result += stack.top() + '\n';
    else if (row === 'size') result += stack.size() + '\n';
    else if (row === 'empty') result += stack.empty() + '\n';
    else if (row === 'pop') result += stack.pop() + '\n';
    else stack.push( row.split(' ')[1] );
  });
}

