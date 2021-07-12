
function EfficientMonetaryComposition(n, m, moneyTypes) {

  const dp = Array(m + 1).fill(Infinity);

  dp[0] = 0;
  for (let i = 1; i <= m ; i++) {
    moneyTypes.forEach(moneyType => {
      if (i - moneyType >= 0 && dp[i - moneyType] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[i - moneyType] + 1);
      }
    });
  }

  return dp[m] === Infinity ? -1 : dp[m];
}

const moneyTypes = [1, 2, 3, 5];
const n = moneyTypes.length;
const m = 26;

console.log('EfficientMonetaryComposition', EfficientMonetaryComposition(n, m, moneyTypes));