/*Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

**Example**

For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].*/

const teamsWeight = function(arr){
    let firstTeam = [];
    let secondTeam=[];
    let finalArr=[];
    for (let i=0;i<arr.length;i+=2){
        firstTeam.push(arr[i]);
    };
    for (let j=1;j<arr.length;j+=2){
        secondTeam.push(arr[j]);
    };
    function reducing (a,b){
        return a+b;
    };

    const firstTeamWeight= firstTeam.reduce(reducing);
    const secondTeamWeight= secondTeam.reduce(reducing);
    finalArr.push(firstTeamWeight);
    finalArr.push(secondTeamWeight);
    console.log(finalArr);
};

//test
console.log(teamsWeight([50, 60, 60, 45, 70]));
console.log(teamsWeight([10, 20, 30]));
console.log(teamsWeight([50, 100, 50, 100, 50 ]));