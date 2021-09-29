/*Given a sorted array of integers a, find an integer x which is element of array a 
from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
    
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.*/

function getX(a){
    const even = a.length%2===0;
    return even? a[a.length/2-1]: a[Math.floor(a.length/2)];
};


//test
console.log(getX([1,5,7]));
console.log(getX([1,1,1,39,55,70]));
console.log(getX([1,1,5,7]));
console.log(getX([1,2,3,4,5,6,7]));