/*You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

**Example**

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.*/

const minNum = function(arr){
    let count=0;
    for (let i=1; i<arr.length;i++){
        if(arr[i]<=arr[i-1]){
            count+=arr[i-1]-arr[i]+1;
            arr[i]=arr[i-1]+1;
        }
        } 
        console.log(count);  
    };

//test
console.log(minNum([1, 1, 1]));
console.log(minNum([1, 1, 1, 2, 5]));
console.log(minNum([2, 1, 1, 8, 5]));
console.log(minNum([8, 1]));