// fixme: 알고리즘
// note: 1. 복잡한 코드를 경우의 수를 나눠서 생각하여 구현하고, 디버깅 경험을 해본다는 긍정적인 마음으로 여러 차례 도전한다.
// note:    문제에 접근하거나 디버깅 할떄는 분석적, 논리적, 체계적으로 차분히 접근하자.
// note:    디버깅할때는 부분적으로 값을 확인하면서 디버깅해야 쉽다 한번에 전체적으로 확인하면 버그를 잡기 힘들다.

// note: 2. 모든 알고리즘은 평문, 조건문, 반복문(재귀)으로 구현된다 쫄지마라
// note:    알고리즘은 특별한것은 없고 그냥 구현에 이름을 붙였다라고 생각해라 그리고 자료구조로, break문으로 속도를 튜닝한다고 생각하면 좋다.

// note: 3. 구현하기전에 손코딩하면서 알고리즘 설계를 먼저해보자. 그러면 구현을 더 잘할 수 있다. 
// note:    사실 구현하면서 알고리즘 생각하기는 쉽지 않음... 문법도 생각하고 변수명도 생각하고 로직도 생각하고 예외처리도 생각하기는 쉽지 않다. 
// note:    따라서 실제 구현하기전에 손코딩하여 알고리즘 설계를 하면 좋다. 
// note:    -> 요즘에는 그냥 주석으로 써두는것이 좋은거같다.

// note: 4. 컴퓨터에서 무엇은 선택하거나 무엇을 택할떄는 하나씩 택해야한다. 
// note:    예를 들어) 재귀를 사용하여 문제를 푼다면 가장 작은 문제 단위로 풀어야한다. 
// note:               조합의 경우 2개씩 선택하는것보다 1개씩 선택하면서 재귀도는것이 맞겠지
// note:               물론 예외적으로 최적화나 튜닝을 할때, 투포인터처럼 여러개를 택할 수도 있겠지

// note: 5. 함수형으로 코딩하면 가독성이 올라가고 문법이 간결해지고 구현속도가 빠르다. 
// note:    하지만 동작 속도는 느릴수도 있음... 코테에서는 이것을 어떻게 선택해서 사용해야하나...
// note:    나의 결론 코테에서는 객체지향형, 함수형은 안될거같다. for문으로 구현하는게 좋은듯하다. 대신 function을 자주 사용하자
// note:    -> 요즘에는 나중에 리펙토링은 함수형으로 하는것이 좋다.
// note:    -> 처음부터 함수형으로 아예 다 짤 수 있으면 정말 빨리 짤 수 있을거같다.

// note: 6. 코딩 테스트도 TTD 원칙은 지켜진다. 
// note;     여러가지 테스트 케이스를 콘솔로 내 눈으로 계속 확인하려고하면 시간이 오래걸린다. assertion함수를 이용하자
// note:     ex) const assert = require('assert').strict;
// note:         assert.strictEqual(solution(A), B);

// note: 7. 문제를 꼭 순서대로 풀필요는 없어
// note:    그 문제가 난이도가 엄청 높을 수도 그 문제가 잘못되었을 수도 있다. 유연하게 생각하고 다른 문제 부터 먼저 풀어도 된다

// note: 8. 알고리즘 풀다가 100%에서 틀리면 하나의 테스트케이스가 뒤늦게 틀린것이다. 100%에서 틀리든 1%에서 틀리든 테스트케이스 1개가 실패한것이다.

// note: 9. 패캠에서 알려주는 코딩 테스트 공부하기에 좋은 습관 (순크시공느함테)
// note:    1. 문제를 꼼꼼히 읽고 순서대로 풀자.
// note:    2. 최대값, 최소값을 계산해서 int를 쓸지, long을 쓸지 정해야한다.
// note:    3. 시간 복잡도, 공간 복잡도를 계산해서 풀이할 가치가 있는지 판단한다.
// note:    4. 풀이를 함수화하여 코드를 읽기 좋게, 디버깅을 쉽게, 케이스를 나누어 생각할 수 있게 만든다.
// note:    5. 느린 풀이법부터 빠른 풀이법을 생각한다. 왜냐하면 실제로 그렇게 풀이법을 생각하기도하고 아니면 부분 점수라도 받기 위해서이다.
      
// note: 10. 코딩의 기본은 '초기값', '인풋', '아웃풋' 체크하는것이다.

// note: 11. 디버깅은 무조건 부분적으로 나눠서 디버깅해야합니다. 

// fixme: 코드
// todo: 배열
// note: n * n matrix 만드는 방법  (https://stackoverflow.com/questions/8301400/how-do-you-easily-create-empty-matrices-javascript)
let adjacentList = Array(n).fill(null).map(() => Array(n));

// note: String를 Array로 변경하기 
const str = 'Hello';
const arr = str.split('');  // 배열 ['h', 'e', 'l', 'l', 'o']

// note: Array를 String으로 변경하기 
const arr = ['h', 'e', 'l', 'l', 'o'];
const str3 = arr.join('');	// 문자열 'hello'
const str2 = arr.join('+');	// 문자열 'h+e+l+l+o'
const str1 = arr.join();	// 문자열 'h,e,l,l,o'

// note: slice(조각)
const animals = ["lion", "tiger", "elephant", "zebra"];
console.log(animals.slice(1,  3));  // ["tiger", "elephant"]

// note: splice(이어 붙이기)
const animals = ["lion", "tiger", "elephant", "zebra"];
const deleteElements = animals.splice(1, 2, "ttt")
console.log(animals)        // ["lion", "ttt", "zebra"]
console.log(deleteElements) //  ["tiger", "elephant"]

// note: array shift를 사용하면 queue 처럼 제일 앞에 있는 element를 꺼낼 수 있음
Array.shift();
// note: array unshift를 사용하면 dequeue 처럼 제일 앞에 element를 넣을 수 있음
Array.unshift();

// note: swap을 간단하게 할 수 있음 
swap: [a, b] = [b, a];
// note: 아래와 위와 동일함
// temp = a
// a = b
// b = temp

// note: 배열에서 중복을 제거할때 Set 을 사용하자

// note: 배열에서 원소 개수를 사용할때 map을 사용하자

// note: 배열에서 각 원소의 등수를 샐떄는 set + map을 사용하자

// note: deepCopy는 이렇게 사용하자 ``` copiedArray = JSON.parse(JSON.stringify(Array)); ```

// todo: 반복문
// note: 단순히 for 문 안에 + 이 있다면 for문을 없애고 * 으로 바꿀 수 있다. => for으로 더하는 것보다 곱셈하는 것이 휠씬 빠르다 
  for(let i = 0; i < n ; i++)  
    ++m; 
//  => 
    n * m;

// note: forEach에서 break가 없다. 
// note: every문에서는 true -> continue / false -> break 
// note: some문에서는  true -> break    / false -> continue 

// note: for문은 인덱스를 조작할떄 쓰면 편하고 
// note: while문은 종료 조건이 if절일때 편하고 
// note: 재귀 문은 while문이 복잡한 경우 사용하면 편하다.  (min heap 구현할떄 알게됨)

// note: 노드의 재귀 콜 스택 사이즈는 최대 약 1만이다. 출처: https://2ality.com/2014/04/call-stack-size.html

// todo: 변수
// note: 노드에서 1 / 3 하면 0.3333333333333333(16자리)로 표기된다 
Math.floor(number * 100) / 100 --> 0.33 // 소수점 2자리까지 표기
Math.floor(number / 10) * 10 --> 0.3 // 소수점 1자리까지 표기
number.toFixed(2) --> '0.33' // toFixed(N) 형변환 하지 않으면 문자열로 출력된다. 
// note: 수소 3번째 자리까지 표시하기 위해선 .toFixed(3) 함수를 이용한다.

// note: 사칙연산중 + 은 string과 만나면 이어붙이기 연산자가 되니 조심해야한다.

// note: bigInt: 2^53 - 1 (9천조) 이상의 값도 정확히 계산할 수 있는 int 자료형 // (다른 언어에서 int의 크기는 2^31 - 1)
// note: 1. let number = BigInt(1234567890);
// note: 2. Math 객체의 메소드와 사용 할 수 없다.
// note: 3. Number와 같이 연산할 수 없다.
// note: 4. + - * / % 연산은 사용 가능한다.
// note: 5. 출력할때 String type으로 바꾸어야 숫자 뒤에 n 기호가 사라진다.

// todo: Object와 Map비교
// note: Object
let obj = {id: 30, name: "Evan"};
for (var key in obj) {
   console.log(`key: ${key}, value: ${obj[key]}`);
   //key: id, value: 30
   //key: name, value: Evan
}
Object.keys(obj).length // 2
 

// note: Map
const map = new Map();
map.set('id', 30);
map.set('name', 'Evan');
for (const [key, value] of map) {
    console.log(`key: ${key}, value: ${value}`);
    //key: id, value: 30
    //key: name, value: Evan
}
map.size // 2


// todo: 함수
// note: 1. 같은 이름의 함수가 2개가 선언되어있으면 같은 이름의 함수는 실행되지 않고 에러가 나지 않는다. (solution 함수를 2개를 선언했었음...)
// note: 2. readline에 process 객체를 사용하는데 밑에서 process이름으로 객체를 선언해서 typeError가 났었음 

// todo: 정렬
// note: 1. 사전순 정렬
// note: 문자열을 비교할때는 문자열을 앞에서부터 한자리씩 아스키코드로 변환하여 비교한다. 
// array.sort((a, b) => {
//   return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;  // 문자열 오름 차순 정렬

//   return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;  // 문자열 내림 차순 정렬
// });

// note: 2. 두 변수를 비교 연산자로 비교할떄 두 변수의 타입을 일치 시켜줘야한다. (문자와 숫자는 비교 방법이 다르다)

// fixme: 백준
// xxx: https://hanch-dev.tistory.com/4

// note: 1. 런타임 에러(EACCES) 현상
// note: fs 모듈이 빠르긴하지만 어떤 문제는 예제 입력 파일에 접근할 수 없어서 EACCES (permission denied)에러가 날 수있다. 
// note: 그럴 때는 readline 모듈을 사용해야한다. 

// note: 2. trim을 사용하기
// note: 입력 스트링에 \n이 몰래 더 붙거나 ' ' 이 몰래 붙어서 예상과 다른게 입력이 들어와 로직이 틀릴때가 있다. 미연에 방지하자

// fixme: 문제
// note: 문제를 읽을때 숫자를 빨리 읽는 법을 익혔다. ex) 100,000 또는 10^6 을 보자마다 10만이라고 읽을 수 있도록 만듬

// fixme: 공부 팁
// note: https://gall.dcinside.com/board/view/?id=programming&no=1358794