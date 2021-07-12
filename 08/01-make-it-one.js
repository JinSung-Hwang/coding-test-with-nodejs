function MakeItOne(n) {
  const dp = [];
  dp[1] = 0;

  for (let i = 2 ; i <= n ; i++ ) {
    
    let fiveCount = Infinity;
    if (i % 5 === 0) fiveCount = dp[i / 5] + 1;
    let threeCount = Infinity;
    if (i % 3 === 0) threeCount = dp[i / 3] + 1;
    let twoCount = Infinity;
    if (i % 2 === 0) twoCount = dp[i / 2] + 1;
    let oneCount = Infinity;
    oneCount = dp[i - 1] + 1;

    dp[i] = Math.min(...[fiveCount, threeCount, twoCount, oneCount]);
  }

  return dp[n];
}


const n = 100;

console.log(MakeItOne(n));