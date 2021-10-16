/*Given array of integers, for each position i, search among the previous positions 
for the last (from the left) position that contains a smaller value.
 Store this value at position i in the answer. If no such value can be found, store -1 instead.

**Example**

For items = [3, 5, 2, 4, 5], the output should be
arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

**Hints**
-   unshift()
*/

let arrayPreviousLess = function(arr){
    let newArr=[-1];
    let smallest=0;
    for (let i=1;i<arr.length;i++){
        
        for (let j=i-1;j>=0;j--){
            //smallest=-1;
            if (arr[j]<arr[i]){
                newArr[i]=arr[j];
                break
            }

            if (newArr.length <= i){
                newArr[i]=-1
            }
          
        }  //newArr.push(smallest); 
    }   console.log(newArr);
    };
    
    console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
    console.log(arrayPreviousLess([2, 2, 5, 8, 3]));
    console.log(arrayPreviousLess([2, 2, 1, 8, 3]));