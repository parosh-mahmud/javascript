function currying(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

var result =currying(4)(6)(3)
console.log(result)