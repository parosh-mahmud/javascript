var arr=[1, 2, 3]

// var str=arr.map(function(value,index,array){
//     // return Math.random()*100

//     return value*value
// })
// console.log(arr)
// console.log(str)

function mymap(arr,cb){
    var newArr=[]
    for(i=0;i<=arr.length;i++){
        var temp=cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
}
var qb=mymap(arr,function(value){
    return value*value*value
})
var mte=mymap(arr,function(value){
    return value*10
})

console.log(arr)
console.log(qb)
console.log(mte)


