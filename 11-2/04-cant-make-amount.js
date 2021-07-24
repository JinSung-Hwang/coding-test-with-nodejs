
// note: 2, 5, 10, 8
function cantMakeAmount(n, moneyTypes) {

  const array = Array(1000).fill(false);
  moneyTypes.sort((a, b) => a < b);
  for (let i = 1; i < 1000; i++) {
    let makeMoney = i;
    moneyTypes.forEach(moneyType => {
      if (moneyType <= makeMoney) {
        makeMoney -= moneyType;
      }
      if (makeMoney === 0) {
        array[i] = true;
      }
    });

    if (array[i] === false) return i;
  }

}

const n = 5;
const moneyTypes = [3, 2, 1, 1, 9];

console.log(cantMakeAmount(n, moneyTypes));