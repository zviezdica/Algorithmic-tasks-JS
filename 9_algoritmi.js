//Check whether the given string is a subsequence of the plaintext alphabet.

const subAlph = function(str){
    let splited=str.split("");
    let newArr=[];
    splited.forEach(element => {
        newArr.push(element.charCodeAt(0));
    });
    if (new Set(newArr).size!=splited.length){
        return false;
    }
    for (let i=0;i<newArr.length-1;i++){
        if (newArr[i]>=newArr[i+1]){
            return false;
        }
        //if (65<=newArr[i] || newArr[i]>=122){
         //   return false;
        //}
        };  
        return true;
  
};

console.log(subAlph("akhl"));
console.log(subAlph("ahkl"));
console.log(subAlph("@adfiz"));
console.log(subAlph("zfiz"));

