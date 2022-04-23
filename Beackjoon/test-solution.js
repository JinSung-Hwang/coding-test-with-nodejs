const SOLUTION = require('./solution').main;
const assert = require('assert');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './beakjun-inputs.txt';
const EncodingType = 'utf8';

(function test() {
// note: -1, 0, 1, [], [x], [x, x], % 체크해볼것
let inputedData = ''
let expectedData = '';

inputedData = `
7
1 2 3
2 4 .
3 5 6
5 . .
6 . 7
4 . .
7 . .
`;
expectedData = `
ABDCEFG
DBAECFG
DBEGFCA
`;
_test(inputedData, expectedData, 'number');

})();

function _test(inputedData, expectedData, type = 'number') {
  fs.writeFileSync(filePath, inputedData.trim(), EncodingType);
  let result = SOLUTION();
  assert.equal(result, expectedData.trim());
}