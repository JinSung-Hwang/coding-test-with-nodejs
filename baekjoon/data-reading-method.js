// note: rl 방식 (terminal에서 표준 입력(stdin), 표준 출력(stdout), 표준 에러(stderr)을 이용하는 방식)
// 출처: https://ko.wikipedia.org/wiki/%ED%91%9C%EC%A4%80_%EC%8A%A4%ED%8A%B8%EB%A6%BC

const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
rl.on('line', function(line) { // 한줄 입력 받기 
  solution();
  rl.close();
})

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) { // 여러줄 입력 받기
  inputs.push(line)
})
  .on('close', function () {
  input();
  solution();
  output();
  process.exit();
});


// note: fs 방식

const assert = require('assert');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';

// doc: readFileSync는 동기화 버퍼 방식으로 작동한다.
let inputs = fs.readFileSync(filePath).toString().split(' '); // 한줄 입력 받아 ' '으로 나누기 
let inputs = fs.readFileSync(filePath).toString().trim().split('\n'); // 여러줄 입력 받기 

function solution() {

}

assert.strictEqual(solution(), );

// note: 줄 안 바꾸게 별찍기
process.stdout.write("*");