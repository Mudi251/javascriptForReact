let a; //undefined
console.log(a);
console.log(typeof a);
//누군가가 값을 주었다. (어떤값을 줄지 아무도 모른다.)
//동적타입이기 때문에 모든 타입을 다 받아버린다.
//절대 받으면 안되는 것이 null, undefined 타입  문제가 생김.
let b = 20;
a = 30;
a = a?? b;
console.log(a);