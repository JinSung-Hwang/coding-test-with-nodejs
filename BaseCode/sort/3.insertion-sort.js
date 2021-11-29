function insertionSort(array) {
  const length = array.length;

  let j;
  for (let i = 1 ; i < length ; i++) {
    let temp = array[i];
    for (j = i - 1 ; j >= 0 && temp < array[j] ; j--) {
      array[j + 1] = array[j]; // note: 뒤로 한칸 씩 미루기 
    }
    array[j + 1] = temp;
  }
  return array;
}

const array = [1, 2, 4, 5, 7, 3, 6];

insertSort(array);