
// note: 최종 풀이시간 24분
// xxx: node native sort 함수가 node10과 node 12에서 다르게 동작한다.... 프로그래머스는 12를 사용하고 있었다. 
// xxx: 로컬에서 테스트했을때는 잘 되었는데... 프로그래머스에서 테스트하면 자꾸 안되어서 당황했다...

// note: my solution 
function solution(array, commands) {
  let answer = [];
  commands.forEach(command => {
    let i = command[0];
    let j = command[1];
    let k = command[2];
    let sliceds = array.slice(i - 1, j);
    let sorteds = sliceds.sort((a, b) => a - b);
    answer.push(sorteds[k - 1]);
  });
  return answer;
}


console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));


// note: other person solution
function solution(array, commands) {
  return commands.map(([i, j, k]) => {

    let sliceds = array.slice(i - 1, j);
    let sorteds = sliceds.sort((a, b) => a - b);
    return sorteds[k - 1];
  });
}