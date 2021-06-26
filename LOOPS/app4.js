  
/*Consider you are given an array [2,0,1,6,45,89].
You need to find the largest element in the array.
How’d you do that? */

let numberArray1 = [2, 0, 1, 6, 45, 89];
let max = 0;
for (let i = 0; i < numberArray1.length; i++) {
    if (numberArray1[i] > max) {
        max = numberArray1[i]
    }
}
console.log(max);