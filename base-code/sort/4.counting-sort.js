

var countingSort = function(array, k) {
  var count = [], result = [];
  for (var i = 0; i <= k; i++) { // 모든 숫자의 개수를 일단 0으로 초기화합니다.
    count[i] = 0;
  }
  console.log(count, result, array.length);
  for (var j = 0; j < array.length; j++) { // 숫자의 개수를 세어 저장합니다.
    count[array[j]] += 1;
  }
  console.log(count, result, k);
  for (i = 0; i < k ; i++) { // 누적합을 구합니다.
    count[i + 1] += count[i];
  }
  console.log(count, result);
  for (j = 0; j < array.length; j++) { // 누적합이 가리키는 인덱스를 바탕으로 결과에 숫자를  집어넣습니다.
    result[count[array[j]] - 1] = array[j];
    count[array[j]] -= 1;
  }
  console.log(count, result);
  return result;
};


countingSort([3,4,0,1,2,4,2,4], 4); // [0,1,2,2,3,4,4,4]