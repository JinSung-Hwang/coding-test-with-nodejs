
function AntKnight(n, k) {
  const dp = [];

  dp[0] = k[0];
  dp[1] = Math.max(k[0], k[1]);

  for (let i = 2 ; i < n ; i++) {
      dp[i] = Math.max(dp[i - 1], (dp[i - 2] + k[i]));
  }

  return dp[n - 1];
}


const n = 4;
const k = [1, 3, 1, 5];

console.log(AntKnight(n, k));