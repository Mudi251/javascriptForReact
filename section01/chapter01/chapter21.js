// 1. 일반포문
const array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("********************");
// 2. forEach
array.forEach((value)=> console.log.value);

console.log("*********************");
// 3. for of문
for(let data of array){
  console.log(data);
}
console.log("********************");
// 4. for in문
for(let index in array){
  console.log(`index = ${index} ${array[index]}`);
}

// 5. 객체순휘
// 5.1 객체 순회, Object.keys 사용 
let person1 = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
}; 
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환 
let keys1 = Object.keys(person1); 
 
for (let key of keys) { 
  const value = person1[key]; 
  console.log(key, value); 
} 
 
// 5.2 Object.values 
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환 
let values1 = Object.values(person1); 
 
for (let values1 of values) { 
  console.log(values1); 
} 

// 1. 배열 순회 
 
for (let i = 0; i < arr1.length; i++) { 
  console.log(arr[i]); 
} 
 
// 2 for of 반복문 
let arr = [1, 2, 3]; 
for (let item of arr) { 
  console.log(item); 
} 
 
// 3.1 객체 순회, Object.keys 사용 
let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
}; 
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환 
let keys = Object.keys(person); 
 
for (let key of keys) { 
  const value = person[key]; 
  console.log(key, value); 
} 
 
// 3.2 Object.values 
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환 
let values = Object.values(person); 
 
for (let value of values) { 
  console.log(value); 
} 
 
// 4 for in 
for (let key in person) { 
  const  value = person[key]; 
  console.log(key, value); 
} 