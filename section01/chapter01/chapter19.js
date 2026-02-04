//클래스속에 멤버변수 반복문을 이용해서 출력
const person = { 
name: "김동진", 
age: 25, 
tall: 179 
};  

const personKeys = Object.keys(person);
console.log(personKeys);

//const personKeys = ['name', 'age', 'tall']             const는 배열번지를 못받음
for (let index = 0; index < personKeys; index++) {
  const key = personKeys[index];
  console.log(`${key} = ${person[key]}`);
}

const valuesArray = Object.values(person);
for (let index = 0; index < valuesArray.length; index++) {
  console.log(`${valuesArray[index]}`);
  
}
console.log(values);
