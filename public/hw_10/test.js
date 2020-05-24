var jsonObj  = {
    pk11 : {name : '홍길동', age : 29},
    pk22 : {name : '손흥민', age : 34},
    pk33 : {name : '배수도', age : 33}
}
for(var key in jsonObj){
    var personObj = jsonObj[key]; 
    console.log(key + ", " + personObj.name + ", " + personObj.age);  
    //결과 : 
    //pk11, 홍길동, 29 
    //pk22, 손흥민, 34
    //pk33, 배수도, 33
  }