Array.prototype.uniq = function() {
    let count = []

    for (i = 0; i < this.length; i++){
        if (!count.includes(this[i])){
            count.push(this[i])
        }
    }
    return count
}

Array.prototype.twoSum = function() {
    let res = []

    for(i = 0; i < this.length; i++){
        for(j = i + 1; j < this.length; j++){
            if (this[i] + this[j] === 0){
                res.push([i, j])
            }
        }
    }
    return res
}

Array.prototype.transpose = function() {
    let res = []

    for(i=0; i < this[0].length; i++){
        let sub = []
        while (sub.length < this.length){
            for(j=0; j < this.length; j++){
            sub.push(this[j][i])
            }
        }
        res.push(sub)
    }
    return res
}

arr = [[1,2,3], [7,8,9], [10,11,12], [4,5,6]]
console.log(arr.transpose());