

function changeCount(money, coinTypes) {
  let changeCount = 0;

  coinTypes.sort((a, b) => b - a); // note: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort, https://dudmy.net/javascript/2015/11/16/javascript-sort/

  coinTypes.forEach(coinType => {
    changeCount += Math.floor(money / coinType);
    money %= coinType;
  });

  return changeCount;
}


console.log(changeCount(1260, [500, 100, 50, 10]));

