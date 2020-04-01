var array =[2, 3, 4 ,6, 33, 22,10]
var find=10
var isFound= false
for(var i=0;i<array.length;i++){
    if(array[i]==find){
        console.log('Data found at index'+i)
        isFound= true
        break;
    }
}
if(!isFound){
    console.log('Data not found')
}

