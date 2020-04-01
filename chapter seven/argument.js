// function sub(a,b){
//     var result=a-b;
//     console.log(result)
// }

// sub(34,44)
 


// var sum1=0;
// for(i=0;i<arr1.length;i++){
//    sum1+=arr1[i]
//    console.log(arr1[i])
// }
// console.log(sum1)
// function add(a,b,c){
//     var result=a+b+c;
//     console.log(result)
// }
// a=1;
// b=2;
// c=3;
// console.log([add])
// var arr1=[23, 43, 22, 44]
// var arr2=[24, 43, 24]
// var arr3=[45, 23, 99]

// function sumOfArray(arr){
//     var sum=0;
//     for(i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     console.log(sum)
// }
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

// function test(a,b,c){
//     for(i=0;i<arguments.length;i++){
//         console.log(arguments[i])
//     }
    
// }
// test(20,30,40)
sum=0
function addAll(){
    for(i=0;i<arguments.length;i++){
        sum+=arguments[i]
        console.log(arguments[i])
    }
    console.log(sum)
}
addAll(4, 2, 3, 1)
console.log(arguments.length)