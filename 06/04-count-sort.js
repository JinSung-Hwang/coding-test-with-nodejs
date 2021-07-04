
function CountSort(messyArray) {
  const counts = [...Array(10).fill(0)];
  messyArray.forEach(item => {
    counts[item] += 1;
  });

  let resultSorteds = [];
  for (let e of counts.entries()) {
    for (let i = 0 ;  i < e[1] ; i++) {
      resultSorteds.push(e[0]);
    }
  }
  return resultSorteds;
}

const messyArray = [0, 2, 4, 3, 1, 6, 8, 5, 9, 7, 1, 2,3 ,4, 1, 1, 2 ,4];

console.log(CountSort(messyArray));