function exponent(n,p){
    let exp=0;
    if(p===0){
        return 1;
    }else{
    exp = n*exponent(n,p-1);
    return exp;
    }
}

console.log(exponent(16,2));