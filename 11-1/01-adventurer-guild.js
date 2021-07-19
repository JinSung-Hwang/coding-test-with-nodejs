
function AdventurerGuild(n, adventurers) {
  let answer = 0;
  adventurers.sort();

  for (let i = 0 ; i < n ; i++) {
    const startNode = adventurers[i];
    const groupNodes = adventurers.slice(i, i + startNode);
    const isGroup = groupNodes.every(element => element <= startNode);
    if (groupNodes.length === startNode && isGroup) {
      startNode = Infinity;
      answer++;
      i += startNode - 1;
    } else {
      startNode;
    }
  }

  return answer;
}


const n = 5;
const adventurers = [2, 3, 1, 2, 2];

console.log('AdventurerGuild(n, adventurers)', AdventurerGuild(n, adventurers));