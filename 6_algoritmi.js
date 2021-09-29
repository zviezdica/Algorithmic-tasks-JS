/*Given an array of strings, return another array containing all of its longest strings.*/
const longestStrArray = function(arr){
let longest = arr[0];
let newArr=[];
for (var i=0;i<arr.length;i++){
    if (longest.length<arr[i].length){
        longest=arr[i];
}
};
for (var j=0;j<arr.length;j++){
    if (longest.length===arr[j].length){
        newArr.push(arr[j]);
}
};
console.log(newArr);
};

//test
console.log(longestStrArray(["boy", "ok", "listen", "random"]));
console.log(longestStrArray(["boy", "ok", "i was thinking","listen", "random"]));
console.log(longestStrArray(["boy", "yes", "as", "now"]));
