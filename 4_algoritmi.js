/*You are given a two-digit integer n. Return the sum of its digits.*/
const sum = function (num){
    const str = num.toString();
    const numSplit = str.split('');
    const firstString= numSplit[0];
    const secondString= numSplit[1];
    const firstNum = parseInt(firstString);
    const secondNum = parseInt(secondString);
    console.log(firstNum+secondNum);
};

//test
console.log(sum(34));
console.log(sum(99));

