class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) { return parentIndex * 2 + 1 };
  getRightChildIndex(parentIndex) { return parentIndex * 2 + 2 };
  getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2) };

  peek() { return this.heap[0] };

  add(value) {
    this.heap.push(value); // note: 배열에 가장 끝에 넣는다.

    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(childIndex) { // note: heap의 모양을 갖추도록 한다.
    const parentIndex = this.getParentIndex(childIndex);
    if (childIndex > 0 && this.heap[parentIndex] > this.heap[childIndex]) { // note: 루트 노드가 되기까지 && 부모가 자식보다 더 크면
      [this.heap[childIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[childIndex]];
      this.heapifyUp(parentIndex);
    }
  }

  removeHead() {
    const rootNode = this.heap[0];

    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) {
      this.heap = [];
      return rootNode;
    }

    this.heap[0] = this.heap.pop(); // 끝에 있는 노드를 부모로 만들고
    this.heapifyDown(0); // 다시 min heap의 형태를 갖추도록 한다. 

    return rootNode;
  }

  heapifyDown(index) {
    let left = this.getLeftChildIndex(index);
    let right = this.getRightChildIndex(index);
    let smallest = index;
  
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    
    if (smallest != index) {
      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }
}

let heap = new Heap();

heap.add(7);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(6);
console.log('heap', heap);
heap.add(4);
console.log('heap', heap);
heap.add(3);
console.log('heap', heap);
heap.add(2);
console.log('heap', heap);
heap.add(0);
console.log('heap', heap);
heap.add(1);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(5);
console.log('heap', heap);
heap.add(1);
console.log('heap', heap);
heap.add(3);
console.log('heap', heap);
heap.add(3);
console.log('heap', heap);
heap.add(2);
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);
heap.removeHead();
console.log('heap', heap);