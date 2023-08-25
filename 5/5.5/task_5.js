// reduce/reduceRight

/* syntax is:
let value = arr.reduce(function(accumulator, item, index, array) {
   // ....
}, [initial]);  



    accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
    item – is the current array item.
    index – is its position.
    array – is the array.

*/

// value sum mateuse che in this method
let arr = [1, 2, 3, 4, 5];

// removed initial value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current , 1 + 2);    // last number also count

console.log(result); // 15

