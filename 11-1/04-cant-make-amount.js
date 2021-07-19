

// note: 20분 46초
function cantMakeAmount(n, moneys) {
  // fixme: 얼마까지 세야하는 걸까?

  let answer = 0;
  moneys.sort((a, b) => a < b);

  for (let i = 1; i < 1000; i++) {
    let makeMoney = i;
    moneys.forEach(money => {
      if (makeMoney - money >= 0) {
        makeMoney -= money;
      }
    });

    if (makeMoney !== 0) {
      answer = i;
      break;
    }
  }

  return answer;
}


const moneys = [3, 2, 1, 1, 9];
const n = moneys.length;

console.log(cantMakeAmount(n, moneys));