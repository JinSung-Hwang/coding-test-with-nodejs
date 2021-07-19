const assert = require('assert');


function solution(food_times, k) {

  let lastCursor = 0;

  let i = 0;
  let j = 0;
  while (i < k + 1) {
    let cursor = j % food_times.length;
    lastCursor = cursor;
    
    if (food_times.every(foodTime => foodTime === 0)) return -1; // note: 모두 다 먹었으면 

    if (food_times[cursor] > 0) { // note: 음식을 먹는다.
      i++;
      j++;
      food_times[cursor]--; 
    } else { // note: 다먹은 음식은 지나간다. 
      j++;
    }
  }

  return lastCursor + 1;


  // note: 위에 방식으로 풀면 정확도는 맞는데 효율성 테스트에서 틀린다....

  // note: 다음에 풀면 이렇게하자
  // note: 내림 차순으로 정렬한다. 
  // note: (k범위 안에서) 제일 작은 값 만큼 전체적으로 확 뺸다. 
  // note: tip에 써있는것처럼 for + add 문을 * 문으로 변경하면 좋을 듯
}



function ttd() {
  let food_times = [3, 1, 2];
  let k = 5;

  const result = mukbangLiveOfMuzi(food_times, k);
  assert.notStrictEqual(result, 1);

  k = 10;
  result = mukbangLiveOfMuzi(food_times, k);
  assert.notStrictEqual(result, -1);

}
ttd();


0 1
1 2
2 3
3 4
4 5 
5 6