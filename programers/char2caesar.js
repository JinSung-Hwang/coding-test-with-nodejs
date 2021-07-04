

function solution(s, n) {
  const chars = s.split('');

  const asciiA = 65;
  const asciiZ = 90;
  const asciia = 97;
  const asciiz = 122;
  const circleAscii = 26;

  const anwer = chars.map((c) => {
    const ascii2c = c.charCodeAt();
    if (c === ' ') return ' ';
    if (asciiA <= ascii2c && ascii2c <= asciiZ) {
      if (ascii2c + n > asciiZ) return  String.fromCharCode(ascii2c - circleAscii + n);
      else                      return  String.fromCharCode(ascii2c + n);
    } 
    if (asciia <= ascii2c && ascii2c <= asciiz) {
      if (ascii2c + n > asciiz) return  String.fromCharCode(ascii2c - circleAscii + n);
      else                      return  String.fromCharCode(ascii2c + n);
    }
  });

  return anwer.join('');
}


console.log(solution('z', 1));