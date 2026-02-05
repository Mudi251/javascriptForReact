//구조분해할당 => 배열/분해/할당(변수에 저장)로 이해
//배열(객체)을 분해를 해서 변수에 할당하는 것
let array = [1,2,3];
let one = array[0];
let two = array[1];
let three = array[2];

let [_one, _two, _three, four = 4] = array;
console.log(_one);
console.log(_two);
console.log(_three);
console.log(four);

//구조분해할당(객체, 분해, 변수할당)

let person = { 
  name: "홍길동", 
  age: 27, 
  hobby: "테니스", 
};

let person3 = person;
console.log(person3 === person);

let person2 = {
  age : myAge,
  name : myName,
  hobby : myHobby,
  extra = "hello"
} = person;

 let myAge2 = person.age;
 let myName = person.name;
 
console.log(myAge, myName, myHobby, extra);

//3. 함수(람다식= 화살표함수)
//각 멤버변수를 변수로 저장하고, 그리고 출력하고 싶을 때
let printPerson = ({name, age, hobby, extra = "hello"})=>{
  console.log(`name = ${name}`);
  console.log(`age = ${age + 1}`);
  console.log(`hobby = ${hobby}`);
  console.log(`hobby = ${extra}`);
  };

  printPerson(person);