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