/* 내장함수((라이브러리)반복문 => 자기스타일로 변경 반복문)
1. forEach 멤버함수(화살표함수)
//const array = [1,2,3,4];

// for (let i =0; i < array.length; i++) {
//   console.log(array[i]);
// }
//**********forEach************** */
//value, index, array 
//  1,    0,   [1,2,3,4]
//  2,    1,   [1,2,3,4]
//  3,    3,   [1,2,3,4]
//  4,    4,   [1,2,3,4]
// array.forEach((value, index, array)=>{
//   console.log(`value = ${value}`)
//   console.log(`index = ${index}`)
//   console.log(`array = ${array}`)
//   console.log(`********************************************`)
// });
// array.forEach((value)=>{
//   console.log(`${value}`);

// })
//3. map
// const array = [1,2,3,4];
// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//   let value = array[i];
//   value = value * 10;
//   newArray.push(value);  
// }

// console.log(array);
// console.log(newArray);

// let _newArray = array.map((value)=> value * 10);
// console.log(_newArray);
//************************************************** */


// 3. filter 
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
// let array1 = [ 
// { name: "구길동", hobby: "테니스" }, 
// { name: "저길동", hobby: "테니스" }, 
// { name: "홍길동", hobby: "독서" }, 
// ]; 
// const tennisPeople = array1.filter( 
// (item) => item.hobby === "테니스" 
// ); 

// let newArray1 = [];
// for (let i = 0; i < array1.length; i++) {
//     let item = array1[i];
//     if(item.hobby === "테니스"){
//       newArray1.push(item);
//     }
// }
// console.log(array1);
// console.log(newArray1);

// const array = [1,2,3,4,5,3,2,2,1,3,5,6,8,2,2,4]

// let newArray = array.filter((value)=> value === 2);
// console.log(array);
// console.log(newArray);
// //Console.log(tennisPeople);    
// // [{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" }] 배열이 출력됨.

// let newArray2 = array1.filter((value)=> value.hobby === "테니스");
// console.log(newArray2);

//************************************************************ */
//4. find, index
// let array1 = [ 
// { name: "구길동", hobby: "테니스" }, 
// { name: "저길동", hobby: "테니스" }, 
// { name: "홍길동", hobby: "독서" }, 
// ]; 

// let findItem = null;
// for (let i = 0; i < array1.length; i++) {
//   let item = array1[i];
//   if(item.hobby === "테니스"){
//     findItem = item;
//     break;
//   }
// }
// console.log(findItem);

// let findItem2 = array1.find((value)=> value.hobby === "독서");

// let findIndex = array1.findIndex((value)=> value.hobby === "독서");

// let findIndex2 = array1.indexOf({ name: "홍길동", hobby: "독서" });

// console.log(findIndex2);
// console.log(findIndex);

// 5. slice(start, end);
//  let array1 = [ 
// { name: "구길동", hobby: "테니스" }, 
// { name: "저길동", hobby: "테니스" }, 
// { name: "홍길동", hobby: "독서" }, 
// { name: "홍길동2", hobby: "독서2" }, 
// { name: "홍길동3", hobby: "독서3" }, 
// { name: "홍길동4", hobby: "독서4" }, 
// ]; 

// let newArray = array1.slice(0,3);
// console.log(newArray);

//******************************************

// 6. concat
// let array1 = [ 
// { name: "구길동", hobby: "테니스" }, 
// { name: "저길동", hobby: "테니스" }, 
// { name: "홍길동", hobby: "독서" }, 
// ]; 

// let array2 = [
// { name: "홍길동2", hobby: "독서2" }, 
// { name: "홍길동3", hobby: "독서3" }, 
// { name: "홍길동4", hobby: "독서4" }, 
// ]

// let array3 = array1.concat(array2)
// console.log(array3);

// 7. sort, reverse
// 배열을 사전순으로 내림차순 정렬하는 메서드 
// let arr3 = [0,1,3,2,10,30,20]; 
// //숫자단위의 정렬은 문제가 발생한다.
// arr3.sort((num1, num2)=> num1 - num2);
// console.log(arr3)

// //문자단위 정렬 문제없다 
// let arr4 = ["adb","adc","dfs","sdd","sdf","sdf"]; 
// arr4.sort() 
// console.log(arr4);

// let arr5 = ["adb","adc","dfs","sdd","sdf","sdf"]; 
// let arr6 = arr5.sort().reverse();
// console.log(arr6);

//8. join, split
// const arr6 = ["김동진","님","안녕하세요","반가워요"]; 
// const joined = arr6.join("=="); 
// console.log(joined);

// const array7 = joined.split("==");
// console.log(array7);