/*Consider the above array again and find
the smallest element in the array.
*/
let numberArray2 = [2, 0, 1, 6, 45, 89];
let min = 0;
for (let i = 0; i < numberArray2.length; i++) {
    if (numberArray2[i] < min) {
        min = numberArray2[i]
    }
}
console.log(min)