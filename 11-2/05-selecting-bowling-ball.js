
// note: 3, 15, 8, 2;

function selectingBowlingBall(n, m, k) {
  const array = Array(m).fill(0);

  for (let i = 0; i < n ; i++) {
    array[k[i]]++;
  };
  let count = 0;
  for (let j = 0 ; j < m ; j++) {
    n -= array[j];
    count += n * array[j];
  }
  return count;
}


const n = 8;
const m = 5;
const k = [1, 5, 4, 3, 2, 4, 5, 2];


console.log(selectingBowlingBall(n, m, k));