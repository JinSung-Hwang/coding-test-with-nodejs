

// note: 29분 걸림
// note: 느낌: 재대로 만들고 예외처리하는데는 시간이 오래걸린다. 

function multipleOrAdd(S) {

  let result = 0;
  const strings = S.split('');

  for (let i = 0; i < strings.length ; i++) {

    if (result <= 1) {
       result += +strings[i];
       continue;
    }

    if (strings[i] === '0' || strings[i] === '1') 
       result += +strings[i];
    else 
       result *= +strings[i];
  }

  return result;
}


// const S = '02984';
// const S = '567';
// const S = '12012';
// const S = '111';
// const S = '000012000';
const S = '000012000';

console.log('multiple', multipleOrAdd(S));