
function TopToBottom(messyArray) {

  return messyArray.sort((a, b) => a < b);
}

const messyArray = [2, 3, 4, 1, 5, 6, 20 ];

console.log('TopToBottom(messyArray)', TopToBottom(messyArray));