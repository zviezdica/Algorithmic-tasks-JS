/*Given array of integers, find the maximal possible sum of some of its k consecutive elements.

**Example**

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:
-   2 + 3 = 5;
-   3 + 5 = 8;
-   5 + 1 = 6;
-   1 + 6 = 7.

   Thus, the answer is 8*/

let arrayMaxConsecutiveSum = function(arr,k){
    let arrOfSums = [];
    for (let i=0;i<(arr.length-k+1);i++){
        let sum=0;
        for (let j=i;j<(i+k);j++){
            sum+=arr[j];
        }
        arrOfSums.push(sum);
    }
    let biggest = arrOfSums[0];
    for (let k=0;k<arrOfSums.length;k++){
        if (arrOfSums[k]>=biggest){
            biggest=arrOfSums[k];
        };
    }
    console.log(arrOfSums);
    console.log(biggest);

};

//test
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6],2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6, 3],2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6, 3],3));