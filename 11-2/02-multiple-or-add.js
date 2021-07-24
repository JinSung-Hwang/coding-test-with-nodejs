
// note; 3, 2, 2, 2

function multipleOrAdd(s) {
  const chars = s.split('');
  let result = 0;
  chars.forEach(char => {
    if (result === 0 || result === 1 || char === '0' || char === '1')
      result += +char;
    else 
      result *= +char;
  })
  return result;
}

console.log(multipleOrAdd('02984'));
console.log(multipleOrAdd('567'));
console.log(multipleOrAdd('100'));
console.log(multipleOrAdd('01032'));