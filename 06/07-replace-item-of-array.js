


function replaceItemOfArray(arrayA, arrayB, k) {

  arrayA.sort();
  arrayB.sort((a, b) => a < b);

  for (let a = 0 ; a < arrayA.length ; a++) {
    for (let b = 0 ; b < arrayB.length ; b++) {
      if ((arrayB[b] > arrayA[a]) && k > 0) {
        [arrayA[a], arrayB[b]] = [arrayB[b], arrayA[a]];
        k--;
      }
    }
  }
  return arrayA.reduce((a, b) => a + b);
}

const arrayA = [1, 2, 5, 4, 3];
const arrayB = [5, 5, 6, 6, 5];
const k = 3;
