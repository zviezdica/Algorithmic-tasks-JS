/*Given a rectangular matrix of characters, add a border of asterisks(*) to it.

**Example**
For
    picture = ["abc",
           "ded"]
the output should be
    addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/
const addBorder = function(arr){
    arr.forEach(function(element, index, arr){
        arr[index]="*"+ element + "*";
    });
    arr.unshift("*".repeat(arr[0].length));
    arr.push("*".repeat(arr[0].length));
    console.log(arr);
};

//test
console.log(addBorder(["abc","ded","abc","ded"]));

