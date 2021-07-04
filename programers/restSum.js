
function solution(left, right) {
  let resultSum = 0;

  for (let i = left; i <= right ; i++) {
    let restCount = 0
    for (let j = 1 ; j <= i ; j++) {
      const isRestNumber = (i % j === 0)
      if (isRestNumber) restCount++;
    }

    const isEven = (restCount % 2 === 0);
    if (isEven ) resultSum += i;
    else         resultSum -= i;
  }

  return resultSum;
}


console.log(solution(13, 17));
