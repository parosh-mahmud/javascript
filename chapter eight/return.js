// function greet(msg){
//     function greetings(name){
// return msg+' ,'+name
//     }
//     return greetings
// }

// var gm=greet('Good morning')

// console.log(gm('Parosh mahmud'))

function base(b){
    return function(n){
        var result=1
        for(i=0;i<b;i++){
            result*=n
        }
        return result

    }
}
var base10=base(10)
console.log(base10(2))