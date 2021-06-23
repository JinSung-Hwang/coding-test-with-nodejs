function untilBeOne1(n, k) { // note: 최적화 안한 알고리즘 

  let resultCount = 0;
  for (;;) {
    if (n === 1) break;

    if ((n % k) === 0) n /= k;
    else               n--;
    resultCount++;
  }

  return resultCount;
}


function untilBeOne2(n, k) {
  let resultCount = 0;
  for (;;) {
    if (n === 1) break;

    if ((n % k) === 0) {
      ++resultCount;
      n /= k;
    } else { // note: 좀더 최적화 하기 위해서 -를 한번에 빼줌 
      const rest = (n % k);
      resultCount += rest;
      n -= rest;
    }
  }

  return resultCount;
}

console.log(untilBeOne(26, 5));
