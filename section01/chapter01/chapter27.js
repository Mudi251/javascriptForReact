let object1 = {name : "홍길동", age: 30}
let object2 = {...object1}
object2.hobby = "테니스";

console.log(object2)
console.log(object1 === object2);
console.log(JSON.stringify(object1)=== JSON.stringify(object2));