// function add(a,b){
//     return a+b
// }
// function manipulate(a,b,func){
//     var c=a+b
//     var d=a-b
//     function multiply(){
//         var m=func(a,b)
//         return c*d*m
//     }
//     return multiply

    
// }
// var multiply=manipulate(3,4,add)
//     console.log(multiply)
    //5. we can pass function as an arguments



//6. we can return function from another function

function name(firstName,lastName,gender){
    if(gender=='male'){
        var output= 'Mr'+''+firstName+''+lastName
return output
    }else if(gender=='female'){
        var output = 'Mrs'+''+firstName+lastName
        return output
    }
    
}
var result= name('Parosh','mahmud','male');
console.log(result)