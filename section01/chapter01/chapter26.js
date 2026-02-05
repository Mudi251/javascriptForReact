//1. spread 연산자
let array1 = [1,2,3,4,5];
let array2 = [10,...array1,20,30];
let array3 = array1; //얕은복사
console.log(array2);

//깊은복사
let array4 = [...array1];
console.log(array4 === array1);

 // 2. 객체생성(spread 연산자 활용 깊은복사) 배열 뿐만 아니라 객체도 복사
let obj1 = { 
  a: 1, 
  b: 2, 
}; 
 let obj2 = {
  ...obj1
 };
 console.log(obj2 === obj1);

//3. 구조분해할당(변수별로), 스프레드 연산자
function funcB([p1,p2,p3]){
  console.log(p1*10, p2*10, p3/10);
}
const array6 = [1,2,3];
funcB(...array6);

//rest 매개변수
const array7 = [11,12,13]
function funcC(p1,...rest){
  console.log(p1, p2)
  console.log(rest)
}
funcC(...array7);

// let obj2 = { 
// a: obj1.a, 
// b: obj1.b, 
//   c: 3, 
//   d: 4, 
// }; 
 
// let obj2 = { 
//   ...obj1, 
//   c: 3, 
//   d: 4, 
// }; 
// console.log(obj2);  