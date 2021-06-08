Array.prototype.bubbleSort = function(){

    let sorted = false

    while (!sorted){
        sorted = true

        for (let i = 0; i < this.length - 1; i++){
            if (this[i] > this[i+1]){
                [this[i],this[i+1]] = [this[i+1], this[i]]
                sorted = false
            }
        }
    }
    return this;
}
arr = [6,4,8,0,6,8,9,3,1,5]
console.log(arr.bubbleSort())

let string = "string"

String.prototype.substrings = function(){
    let output = [];

    for (let i = 0; i < this.length; i++){
        for (let j = i + 1; j <= this.length; j++){
            output.push(this.slice(i,j))
        }
    }
    return output
}

console.log(string.substrings())