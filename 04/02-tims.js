

function time(n) {

  let count = 0;

  for (let h = 0 ; h <= n ; h++) {
    for (let m = 0 ; m < 60 ; m++) {
      for (let s = 0 ; s < 60 ; s++) {
        let currentMoment = '' + h + m + s;
        if (currentMoment.includes("3")) count++;
      }
    }
  }

  return count;
}


console.log(time(5));