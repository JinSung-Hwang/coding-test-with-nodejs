// note: insert sort
// note: 거의 정렬되어 있을때 사용하면 좋다.


function InsertSort(messyArray) {

  for (let i = 1 ; i < messyArray.length ; i++) {
    for (let j = i ; 0 < j ; j--) {
      if (messyArray[j] < messyArray[j - 1])
        [messyArray[j-1], messyArray[j]] = [messyArray[j], messyArray[j-1]];
      else 
        break;
    }
  }

  return messyArray;
}

const messyArray = [0, 2, 4, 3, 1, 6, 8, 5, 9, 7];

console.log(InsertSort(messyArray));