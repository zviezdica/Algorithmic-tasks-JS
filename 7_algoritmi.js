/*Given a sequence of integers as an array, determine whether it is possible to obtain 
a strictly increasing sequence by removing no more than one element from the array.*/

const increasing= function(array){
const newArr=[array[0]];
let start=array[0]
for (let i=1;i<array.length;i++){
    ;
    if(start<array[i]){
        start=array[i];
        newArr.push(start);
    }
    }
    console.log(newArr);

if (newArr.length<(array.length-1)){
    return false;
}else {
    return true;
}
;
};

//test
console.log(increasing([3,5,3,7,1,8,9]));
console.log(increasing([3,5,3,7,8,9]));
console.log(increasing([1,5,2,2]));
console.log(increasing([6,3,5]));


//realised my soulution works only if first number in array is correct. Here is the original solution:
function ais(sequence){
    let count=0;

    for (let i=0;i<sequence.length;i++){
        if(sequence[i]<=sequence[i-1]){
            count++;
            if(sequence[i]<=sequence[i-2] && sequence[i+1]<=sequence[i-1]){
                return false;
            }
        }
    }
    return count <=1;
};

console.log(ais([6,3,5]));
//only counting wouldn't do good for [1,2,1,2]