var addition= function(a,b){
    return a+b
    
}
addition(4,5)


setTimeout(function(){
console.log('I will call after 5 second')
},5000)

var another=addition

console.log(another(3,4))