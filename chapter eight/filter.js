var arr=[2,5, 2, 8, 6, 5, 9]

// var filteredArray=arr.filter(function(value){
//     return value%2==0
// })

// console.log(filteredArray)

function myFilter(arr,cb){
    var newarray=[]
    for(i=0;i<arr.length;i++){
        if(cb(arr[i],i,arr)){
            newarray.push(arr[i])
        }
        
    }
    return newarray
}

console.log(myFilter(arr,function(value){
    return value%2==0
}))

console.log(myFilter(arr,function(value){
    return value%2==1
}))