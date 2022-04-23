const assert = require('assert').strict;

function solution(numbers) {

  const allNumbers = [];
  getArrayMutations(numbers, allNumbers, numbers.length);
  const allNumbersSTR = allNumbers.map(numbers => numbers.join(''));
  const sortedAllNumbers = allNumbersSTR.sort((a, b) => +b - +a);

  return sortedAllNumbers.shift();
}


function getArrayMutations(arr, perms = [], len = arr.length) {
  if (len === 1) perms.push(arr.slice(0))

  for (let i = 0; i < len; i++) {
    getArrayMutations(arr, perms, len - 1)

    len % 2 // parity dependent adjacent elements swap
      ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
      : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
  }

  return perms
}


// const getPermutations = function (group, selectNumber) {
//   if (selectNumber === 1) return group.map((value) => [value]); 

//   const results = [];
//   group.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
//     const permutations = getPermutations(rest, selectNumber - 1); 
//     const attacheds = permutations.map((permutation) => [fixed, ...permutation]); 
//     results.push(...attacheds); 
//   });
//   return results; 
// };


assert.strictEqual(solution([6, 10, 2]), '6210');
assert.strictEqual(solution([3, 30, 34, 5, 9]), '9534330');
assert.strictEqual(solution([3, 30, 33, 34]), '3433330');
assert.strictEqual(solution([1, 2, 3, 4, 5, 6]), '654321');
assert.strictEqual(solution([0, 0, 1]), '100');
assert.strictEqual(solution([1, 0, 0]), '100');
assert.strictEqual(solution([0, 1000, 1001]), '100110000');
assert.strictEqual(solution([2, 101]), '2101');
assert.strictEqual(solution([2, 101]), '2101');
assert.strictEqual(solution([2, 20]), '220');
assert.strictEqual(solution([2, 21]), '221');
assert.strictEqual(solution([2, 22]), '222');
assert.strictEqual(solution([2, 23]), '232');
assert.strictEqual(solution([88, 89]), '8988');
assert.strictEqual(solution([88, 87]), '8887');