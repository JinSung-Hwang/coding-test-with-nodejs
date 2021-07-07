
function solution(n, parts, m, searchParts) {
  parts.sort();


  return searchParts.map(searchedPart => {
    if (binarySearch(parts, 0, n, searchedPart)) return 'yes'
    else                                         return 'no';
  })
}


function binarySearch(parts, left, right, searchedPart) {
  const mid = Math.floor((left + right) / 2);

  if (left > right)                return false;

  if (searchedPart === parts[mid]) return true;
  if (searchedPart < parts[mid])   return binarySearch(parts, left, mid - 1, searchedPart)
  if (searchedPart > parts[mid])   return binarySearch(parts, mid + 1, right, searchedPart)
}



const n = 10;
const parts = [0, 1, 8, 3, 5, 4, 6, 7, 2, 9];
const m = 3;
const searchParts = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(solution(n, parts, m, searchParts));