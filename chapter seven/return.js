sum=0
function addAll(){
    for(i=0;i<arguments.length;i++){
        sum+=arguments[i]
        
    }
    console.log(sum)
    return sum
}
var b = addAll(4, 2, 3, 1)
var a = addAll(4,3,2,77)
console.log(a,b)