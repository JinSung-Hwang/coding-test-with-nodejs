
// note: 불안정, 제자리 정렬(새로운 메모리 필요x)

function selectionSort(array) {
  const length = array.length;

  for (let i = 0 ; i < length - 1 ; i++) {
    let minIndex = i;
    for (let j = i + 1 ; j < length ; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}


selectionSort([5, 1, 4, 7, 2, 6, 8, 3]);