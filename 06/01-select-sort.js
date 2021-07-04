// note: 선택 정렬
// note: 가장 작은 원소를 제일 앞으로 보내고 그다음 원소를 그 다음에 넣는 방식이다.
// note: 제일 원시적인 정렬 방법이다.

function SelectSort(messyArray) {

  for (let i = 0 ; i < messyArray.length ; i++) {
    let minIndex = i;
    for (let j = i + 1 ; j < messyArray.length ; j++) {
      if (messyArray[j] < messyArray[minIndex]) {
        minIndex = j;
      }
    }
    [messyArray[i], messyArray[minIndex]] = [messyArray[minIndex], messyArray[i]];
  }
  return messyArray;
}

console.log(SelectSort([0, 2, 4, 3, 1, 6, 8, 5, 9, 7]));