var obj1={
    x:3,
    y:4
}
var obj2={
    x:3,
    y:4
}

// if(obj1.x==obj2.x&&obj1.y==obj2.y){
//     console.log(true)
// }else{
//    console.log(false)
// }
//Another easy method
console.log(JSON.stringify(obj1)==JSON.stringify(obj2))