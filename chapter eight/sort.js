// var person=[
//     {name:'parosh',
//         age:25
//     },
//     {name:'Rubana',
//         age:22
//     },
//     {name:'Tasmia',
//         age:1
//     }
// ]

// var arr=[4,5,3,1,5,9,-8,-2]

// arr.sort(function(a,b){
//     if(a>b){
//         return -1
//     }else if(a<b){
//         return 1
//     }else{
//         return 0
//     }
// })

// console.log(arr)

// person.sort(function(a,b){
//     if(a.age>b.age){
//         return 1
//     }else if(a.age<b.age){
//         return -1
//     }
//     else return 0
// })

// console.log(person)

var arr=[4,5,3,1,5,-1]

// var rest1=arr.every(function(value){
//     return value%2==0
// })
// console.log(rest1)

// var rest2=arr.every(function(value){
//     return value>0
// })
// console.log(rest2)

var rest3=arr.some(function(value){
    return value%2==1
})
console.log(rest3)
