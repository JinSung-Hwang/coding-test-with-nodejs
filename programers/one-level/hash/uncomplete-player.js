
// 완주하지 못한 선수

function solution(participant, completion) {
    
  let hashMap = new Map();
    
  participant.forEach(p => {
    if (hashMap.has(p)) {
      const values = hashMap.get(p, p);
      values.push(p);
      hashMap.set(p, values);
    } else {
      hashMap.set(p, [p]);
    }
  });
  completion.forEach(c => {
    const values = hashMap.get(c);
    if (values.length > 1) {
      values.shift();
      hashMap.set(c, values);
    } else {
      hashMap.delete(c);
    }
  });

  const iterator1 = hashMap.entries();
  return iterator1.next().value[0];
}




// https://programmers.co.kr/learn/courses/30/lessons/42576/solution_groups?language=javascript&page=1
// note: 다른 사람 풀이
var solution=(_,$)=>_.find(_=> !$[_]--, $.map( _ => $[_]= ($[_] | 0) +1 ))