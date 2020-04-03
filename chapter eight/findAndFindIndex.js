var arr=[9, 3, 5, 7, 8]



// var result=arr.find(function(value,index){
//     return value==9
// })
// console.log(result)

// var result=arr.findIndex(function(value,index){
//     return value==9
// })
// console.log(result)

function myFind(arr,cb){
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
}

var result=myFind(arr,function(value){
    return value==9
})
console.log(result)