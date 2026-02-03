//콜백함수적용 함수선언, 함수표현, 화살표함수
//함수선언문
function repeat(count, callback) {
  for (let index = 0; index < count; index++){
    consent = array[index];
    //콜백함수를 진행한다.
  }
}
//함수표현식
let funcA = function (index) {
  console.log(index);
}
let funcB = function (index) {
  console.log(index*10);
}
let funcC = function (index) {
  console.log(index+50);
}
//let callback = funA;
//repeat(5, funcA);
funcA(5, funcB);

//화살표 함수
let funcD =  (index) => console.log(index);
let funcE = (index) => console.log(index*10);
let funcF = (index) => console.log(index+50);

//let callback = funA;
//repeat(5, funcA);
repeat(5, (index1, index2) => console.log(index1 + index2));
repeat(5, (index) => console.log(index*10));
repeat(5, (index) => console.log(index+50));

