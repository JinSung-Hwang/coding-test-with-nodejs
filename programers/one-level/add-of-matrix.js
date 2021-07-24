

// note: 나의 풀이 
function solution(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const arr1raw = arr1[i];
    const resultRaw = [];
    for (let j = 0; j < arr1raw.length; j++) {
      resultRaw.push(arr1raw[j] + arr2[i][j]);
    }
    result.push(resultRaw);
  }
  return result;
}


// note: 다른 사람의 짧은 코드

function solutionOther(arr1, arr2) {
  return arr1.map((arr1Raw, i) => arr1Raw.map((a, j) => a + arr2[i][j]));
}

