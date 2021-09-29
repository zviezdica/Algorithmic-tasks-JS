/*Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

**Example**

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

For inputArray = [2, 9, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 8.

**Hints**
-   Math.abs()*/

let arrayMaximalAdjacentDifference = function(arr){
    let newArr=[];
    for (let i=0;i<arr.length-1;i++){
        newArr.push(arr[i]-arr[i+1]);
    }
    let newArrAbsolute=newArr.map(Math.abs);
    let biggest=newArr[0];
    for (let j=0;j<newArrAbsolute.length;j++){
        if (newArrAbsolute[j]>biggest){
            biggest=newArrAbsolute[j];
        }
    }
    console.log(biggest);
};

//test
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));

