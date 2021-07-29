

function FloydWarshall(startNode, matrix) {

  for (let k = 0 ; k < matrix.length ; k++) {
    for (let a = 0 ; a < matrix.length ; a++) {
      for (let b = 0 ; b < matrix.length ; b++) {
        matrix[a][b] = Math.min(matrix[a][b], matrix[a][k] + matrix[k][b]);
      }
    }
  }

  return matrix;
}

const matrix = [
  [0, 4, Infinity, 6],
  [3, 0, 7, Infinity],
  [5, Infinity, 0, 4],
  [Infinity, Infinity, 2, 0],
];

console.log('floyd-warshall', FloydWarshall(startNode, matrix));