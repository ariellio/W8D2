Array.prototype.myEach = function(callback2) {
   
    for (let i = 0; i < this.length; i++) {
        callback2(this[i]);
    }
   
}

function timesTwo(n){
  return  (n * 2);
}

let arr = [1,2,3]



Array.prototype.myMap = function(callback) { 
    let new_arr = [];
    let answer = this;
    const myFunc = function (n) {
        let new_n = callback(n);
        new_arr.push(new_n);
    }

    answer.myEach(
        myFunc
    )
    return new_arr;
}

// console.log(arr.myMap(timesTwo));

Array.prototype.myReduce = function(callback, initialValue){
    if (!initialValue) {
        initialValue = this[0]
        this.slice(1).myEach (
            function(n) {
                initialValue = callback(initialValue, n)
            }
        )
    } else {
        this.myEach (
            function(n) {
                initialValue = callback(initialValue, n)
            }
        )
    }
    return initialValue
}

console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
})); // => 6

// with initialValue
console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25)); // => 31