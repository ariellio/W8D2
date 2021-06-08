function range(start,end){   
    let result = []             
    if(start === end){
        return [start];
    }
    result.push(start)              
    return result.concat(range(start + 1, end))   
}


function sumRec(arr){
    if (arr.length === 1){
        return arr[0]
    }

    let sum = 0
    sum += arr[0]
    return sum += sumRec(arr.slice(1)) 
}


function exponent(base,exp){
    if (exp === 0){
        return 1
    }
     
    return base *= exponent(base,exp-1)
}

console.log(exponent(2,4))