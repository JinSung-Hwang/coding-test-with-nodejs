function cutTteok(n, m, tteoks) {
  const cutLengths = [];
  tteoks.sort();

  binearySearch(tteoks, 0, 2000000000, m, cutLengths);

  return Math.max(...cutLengths);
}


function binearySearch(tteoks, left, right, m, cutLengths) {
  const cutLength = Math.floor((left + right) / 2);

  if (left > right) return ;

  const totalLength = tteoks.map(tteok => {
    if (tteok - cutLength > 0) return tteok - cutLength;
    return 0;
  }).reduce((a, b) => a + b, 0);

  if (m <= totalLength) {
    cutLengths.push(cutLength);
    return binearySearch(tteoks, cutLength + 1, right, m, cutLengths);
  } else {
    return binearySearch(tteoks, left, cutLength - 1, m, cutLengths);
  }
}


const n = 10;
const tteoks = [0, 22, 11, 33, 99, 55, 66, 88, 77, 44];
const m = 120;
