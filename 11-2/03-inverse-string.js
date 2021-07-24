// note: 2, 15, 2, 7
function inverseString(string) {
  let chars = string.split('');

  let lastChar = chars[0];
  let countA = 0;
  let countB = 1;
  chars.forEach(char => {
    const isInverseChar = (char !== lastChar);
    if (isInverseChar) {
      lastChar = char;
      countA++;
      [countA, countB] = [countB, countA];
    }
  })
  return Math.min(countA, countB);
}

console.log(inverseString('0001101'));