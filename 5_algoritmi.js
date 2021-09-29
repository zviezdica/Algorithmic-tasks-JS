/*Given an array of integers, find the pair
 of adjacent elements that has the largest product and return that product.*/

const findLargest = function(arr){ 
    let all=[];
   for (let i=0; i<arr.length-1;i++){
       all.push(arr[i]*arr[i+1]);
    };
    let largest=all[0];
    for (let j=0;j<all.length;j++){
        if (largest<=all[j]){
            largest=all[j];
        }
    }
    console.log(largest);
   };

//test
console.log(findLargest([1,2,3,4]));
console.log(findLargest([5,1,8,4,5]));