
// note: 안정, 제자리 정렬(새로운 메모리 필요x)

const bubbleSort = function(array) {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) { // note: 횟수
    for (let j = 0; j < length - 1 - i; j++) { // note: 위치
      if (array[j] > array[j + 1]) { // note: 두 수를 비교하여 앞 수가 뒷 수보다 크면
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array;
};

bubbleSort([5,1,7,4,6,3,2,8]);