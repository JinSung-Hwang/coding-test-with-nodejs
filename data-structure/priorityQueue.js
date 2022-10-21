// note: 이 우선순위 큐는 맥스힙 방식으로 구현되어있다.
// note: comparator를 넣을때 오름차순으로 넣으려면 b - a 로 넣어야한다.

class PriorityQueue {
  constructor(comparator) {
    this._comparator = comparator;
    this._elements = [];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    return this._elements = [];
  }

  peek() {
    if (this.isEmpty()) throw new Error('PriorityQueue is empty');
    return this._elements[0];
  }

  deq() {
    let first = this.peek();
    let last = this._elements.pop();
    let size = this.size();

    if (size === 0) return first;

    this._elements[0] = last;
    let current = 0;

    while (current < size) {
      let largest = current;
      let left = (2 * current) + 1;
      let right = (2 * current) + 2;

      if (left < size && this._compare(left, largest) >= 0) {
        largest = left;
      }

      if (right < size && this._compare(right, largest) >= 0) {
        largest = right;
      }

      if (largest === current) break;

      this._swap(largest, current);
      current = largest;
    }

    return first;
  };

  enq(element) {
    let size = this._elements.push(element);
    let current = size - 1;

    while (current > 0) {
      let parent = Math.floor((current - 1) / 2);

      if (this._compare(current, parent) <= 0) break;

      this._swap(parent, current);
      current = parent;
    }

    return size;
  }

  size() { 
    return this._elements.length;
  }

  forEach(fn) {
    return this._elements.forEach(fn);
  }

  _compare(a, b) {
    return this._comparator(this._elements[a], this._elements[b]);
  }

  _swap(a, b) {
    let aux = this._elements[a];
    this._elements[a] = this._elements[b];
    this._elements[b] = aux;
  }
}

// note: PriorityQueue 사용하는 샘플

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
let result;
let pQueue;
let lectureSchedules;

process.platform === 'linux' ? main() : ''; // 로컬 테스트 케이스와 백준 사이트에 호환을 맞춤기 위함

function input() {
  // * 글로벌 변수 초기화 *
  result = 0;
  pQueue = new PriorityQueue((a, b) => {
    if (b.end === a.end) return (b.end - b.begin) - (a.end - a.begin); // 강의가 시작하는 시간이 같으면 더 짧은것을 우선순위를 높인다.
    return b.end - a.end;
  });
  lectureSchedules = [];
  // * 데이터 입력 받기 *
  let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
  let lectureCount = +inputs.shift();
  for (let i = 0; i < lectureCount; i++) {
    let [begin, end] = inputs[i].split(' ');
    lectureSchedules.push({begin: +begin, end: +end});
  }
  lectureSchedules.sort((a, b) => {
    if (b.begin === a.begin) return (b.end - b.begin) - (a.end - a.begin); // 강의가 시작하는 시간이 같으면 더 짧은것을 우선순위를 높인다.
    return b.begin - a.begin;
  });
}

function output() {
  console.log(result);
  return result;
}

function main() {
  input();
  solution();
  return output();
}

function solution() {
  let lectureSchedule = lectureSchedules.pop();
  pQueue.enq(lectureSchedule);
  while (lectureSchedules.length) {
    let lectureSchedule = lectureSchedules.pop();
    if (lectureSchedule.begin >= pQueue.peek().end) {
      pQueue.deq();
      pQueue.enq(lectureSchedule);
    } else {
      pQueue.enq(lectureSchedule);
    }
  }
  result = pQueue.size();
}