const SOLUTION = require('./solution').main;
const assert = require('assert');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input-data.txt';
const EncodingType = 'utf8';

(function test() {
// note: -1, 0, 1, [], [x], [x, x], % 체크해볼것
let inputedData = ''
let expectedData = '';

inputedData = `
5
1
3
8
-2
2
`;
expectedData = `
2
2
1
10
`;
_test(inputedData, expectedData, 'number');

inputedData = `
1
4000
`;
expectedData = `
4000
4000
4000
0
`;
_test(inputedData, expectedData, 'number');

inputedData = `
5
-1
-2
-3
-1
-2
`;
expectedData = `
-2
-2
-1
2
`;
_test(inputedData, expectedData, 'number');

inputedData = `
3
0
0
-1
`;
expectedData = `
0
0
0
1
`;
_test(inputedData, expectedData, 'number');

})();

function _test(inputedData, expectedData, type = 'number') {
  fs.writeFileSync(filePath, inputedData.trim(), EncodingType);
  let result = SOLUTION();
  assert.equal(result, expectedData.trim());
}
