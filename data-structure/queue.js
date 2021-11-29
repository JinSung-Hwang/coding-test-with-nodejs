const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let result = '';
let n;
let inputs;

class Queue {
  constructor() {
    this.storage = [];
  }

  push(element) {
    return this.storage.push(element);
  }

  pop() {
    return this.empty() ? '-1' : this.storage.shift();
  }

  size() {
    return this.storage.length;
  }

  empty() {
    return this.storage.length === 0 ? 1 : 0;
  }

  front() {
    return this.empty() ? -1 : this.storage[0];
  }

  back() {
    return this.empty() ? -1 : this.storage[this.size() - 1];
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
  let queue = new Queue;
  inputs.forEach(row => {
    if (row === 'top') result += queue.top() + '\n';
    else if (row === 'size') result += queue.size() + '\n';
    else if (row === 'empty') result += queue.empty() + '\n';
    else if (row === 'pop') result += queue.pop() + '\n';
    else if (row === 'front') result += queue.front() + '\n';
    else if (row === 'back') result += queue.back() + '\n';
    else queue.push( row.split(' ')[1] );
  });
}

