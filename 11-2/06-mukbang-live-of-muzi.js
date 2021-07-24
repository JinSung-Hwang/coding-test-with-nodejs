

// note: 3
function solution(food_times, k) {

  let i = 0;
  for (k ; k === 0 ; k--) {
    if (food_times.every(foodTime => foodTime === 0)) return -1 // 다 먹으면 -1 

    const eatingIndex = i % food_times.length;
    i++;
    if (food_times[eatingIndex] === 0) {
      k++;
      continue; // 다 먹은 음식은 지나간다
    }

    food_times[eatingIndex]--;
  }

  return i -1;
}