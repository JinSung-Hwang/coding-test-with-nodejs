// note: 퀵 정렬

function QuickSort(target, start, end) {
  if (start >= end) return ;

  let pivot = start;
  let left = start + 1;
  let right = end;
  while (left <= right) {
    while (left <= end && target[left] <= target[pivot])     left++;
    while (right > start && target[right] >= target[pivot]) right--;

    if (left < right) [target[left], target[right]] = [target[right], target[left]];
    else              [target[right], target[pivot]] = [target[pivot], target[right]];
  }
  QuickSort(target, start, right -1);
  QuickSort(target, right + 1, end);
}

const messytarget = [0, 2, 4, 3, 1, 6, 8, 5, 9, 7];

QuickSort(messytarget, 0, 9);

console.log(messytarget);