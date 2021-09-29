//Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

const next=function(str){
    const nextArr=str.split("");
    let newString="";
    for (let i=0;i<nextArr.length;i++){
        let cc = nextArr[i].charCodeAt(0)
        if (nextArr[i]==="z"){
            cc=96;
        }
        newString += String.fromCharCode(cc+1);
    }
    console.log(newString);
    
};

//test
console.log(next("whez"));
console.log(next("ok"));


