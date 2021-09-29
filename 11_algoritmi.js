/*Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong 
(the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

**Example**

- For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
- For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
- For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.*/

//i misunderstood the question. This function compares sum of both left and right hand of each man
const areEquallyStrong1= function(arr){
    if (arr[0]+arr[1]===arr[2]+arr[3]){
        return true;
    }
    else{
        return false;
    }
};

//test
console.log(areEquallyStrong1([10,5,15,0]));
console.log(areEquallyStrong1([1,5,15,0]));
console.log(areEquallyStrong1([1,1,0,0]));
console.log(areEquallyStrong1([1,0,1,0]));

//right solution:
const areEquallyStrong = function(myLeft, myRight, friendsLeft, friendsRight){
    const myWeakest = myLeft<=myRight? myLeft: myRight;
    const myStrongest = myLeft>=myRight? myLeft: myRight;
    const friendsWeakest = friendsLeft<=friendsRight? friendsLeft: friendsRight;
    const friendsStrongest=friendsLeft>=friendsRight? friendsLeft: friendsRight;

    if(myStrongest===friendsStrongest && myWeakest===friendsWeakest){
    return true;
    }
    else{
        return false;
    }
};

//test
console.log(areEquallyStrong(10,5,15,0));
console.log(areEquallyStrong(1,5,15,0));
console.log(areEquallyStrong(1,1,0,0));
console.log(areEquallyStrong(1,0,1,0));