/*1. Write a function that returns the sum of two numbers.
2. Write a function that returns the sum of all numbers regardless of # of params.*/

const sum2=function(a,b){
    return a+b;
};

//1.way
const sumAll1= function(arr){
    let num=0;
    for (let i=0;i<arr.length;i++){
        num+=arr[i];
    } 
    console.log(num);
    };

//2.way
const sumAll2= function (arr){
    let num2=0;
    arr.forEach(function(number){
        num2+=number;
    });
    console.log(num2);
};

//3.way
const sumAll3 = function(arr){
    const reducer = function(a,b){
        return a+b;
    }
    console.log(arr.reduce(reducer));   
    };

//test
console.log(sum2(1,3));
console.log(sumAll1([1,2,3,4,5]));
console.log(sumAll2([1,2,3,4,5]));
console.log(sumAll3([1,2,3,4,5]));