var arr =[1, 2, 3 ,4 ,5]

var reduceArr=arr.reduce(function(prev,curr){
    return prev+curr
},100)



var max=arr.reduce(function(prev,curr){
    return Math.max(prev,curr)
})

console.log(reduceArr)
console.log(max)