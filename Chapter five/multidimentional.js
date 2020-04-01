var array=[
    [20, 21, 22, 23],
    [12, 11, 23, 32],
    [29, 21, 22, 23],
    [12, 11, 24, 32]
]
// console.log(array[0][1])
// console.log(array[1][2])
for(var i=0;i<array.length;i++){
    for(var j=0;j<array[i].length;j++){
        console.log('Element'+i+': '+array[i][j])
    }
   console.log(array[i])
}
