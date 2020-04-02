// function sample(a,b){
//     var c=a+b
//     var d=a-b
// var result=sum(c,d)
// return result
// }

// function sum(a,b){
//     return a+b
// }

// console.log(sample(3,4))

// function hello(name){
//     not(name)
//      not('something else')
   
// }
// function not(parosh){
//     console.log(parosh)
// }

// hello('parosh mahmud')

// function parosh(hi,parosh1){
//     console.log(hi)
    
// }

// function parosh1(hello){
//     console.log(hello)
// }
// parosh('p')
// parosh1('hey')
// function hello(name,not){
//     not(name);
    
// }
// // function not(parosh){
// //     console.log(parosh)
// // }

// hello('Parosh mahmud',function(hi){
// console.log('Hello'+hi)
// })
   
// function callback(fun,not){
//     not(fun)
// }
// callback('do fun with code',function(fun){
//     console.log('Parosh'+' '+fun)
// })

// function call(home,trying){
//     trying(home)
// }
// call('Go',function(home){
// console.log('Home'+home)
// })

// call('Hey there',function(home){
//     console.log('Hello'+home)
// })

// call('Hey there',function(home){
//     console.log('Length of'+home+'is '+home.length)
// })

var parosh={
    Name:'parosh mahmud',
    Age:25,
    email:'Prparosh@gmail.com'
}

function printMyself(person,callback){
    console.log('Person'+person.Name+'('+person.Age+')');
    
    if(person.Age>=18){
        callback(person.email)
    }else{
        console.log('You are allow')
    }
}
printMyself(parosh,function(email){
console.log('Email sent to '+email)
})
