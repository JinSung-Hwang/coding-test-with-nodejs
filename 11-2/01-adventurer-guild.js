
function AdventurerGuild(n, adventurers) {
  adventurers.sort((a, b) => a > b);
  let groupCount = 0;
  let group = [];
  for (let i = 0; i < n; i++) {
    if (group.length === Math.max(...group)) {
      group = [];
      groupCount++;
    }
    group.push(adventurers[i])
  }
  return groupCount;
}

console.log(AdventurerGuild(9, [2, 3, 1, 2, 2, 3, 1, 1, 3]));