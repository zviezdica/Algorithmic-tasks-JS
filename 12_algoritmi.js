/*Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

**Example**

- For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

- For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

- For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.*/

/*
-broj na poziciji a[i]=b[i+1] ili b[i]=a[i+1]
*/

const areSimilar = function(a,b){
    let count=0;
    
    for (let i=0;i<a.length-1;i++){
        if((a[i]===b[i] && a[i+1]===b[i+1]) || (a[i]===b[i+1] && a[i+1]===b[i])){
            count++;   
        }  
    };
    if ((a[a.length-1]===b[a.length-1] && a[a.length-2]===b[a.length-2]) || (a[a.length-1]===b[a.length-2] && a[a.length-2]===b[a.length-1])){
        count++;
    }

    return count>=a.length-1;
};

//test
console.log(areSimilar([1,2,3,4,5], [1,2,3,5,4]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1,2,3,4,5], [2,1,3,5,4]));
console.log(areSimilar([1,2,3,4,5], [1,2,3,4,5]));