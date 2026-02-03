//함수호이스팅(함수선언식)
getArea(10,20); //함수 선언식은 위에 있어도 됨.
function getArea(width,height){
  let area = width * height;
  console.log(`width = ${width} height = ${height} area = ${area}`)
}
//함수 표현식(리턴값 없음, 호이스팅 안됨)
 let getArea = function (width,height){
  let area = width * height;
  console.log(`width = ${width} height = ${height} area = ${area}`)
}
//람다식(호이스팅 안됨)
 let getArea = (width,height) => {
  let area = width * height;
  console.log(`width = ${width} height = ${height} area = ${area}`)
}

 function getArea(width, height) { 
   let area = width * height; 
   return area; 
  } 
