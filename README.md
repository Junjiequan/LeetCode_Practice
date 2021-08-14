# LIST

1. Two Sum (Hash map solution)
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums= 1,4,3,7,10,6

// map = {1:0,9:1,3:2,6:3, }

// target = 13
// i=4
// value=10
// (3) complementValue = 13 - 10

// [i(4),complementValue(2)]
 


var twoSum = function(nums, target) {
    let map = {};
    for(let i =0; i<nums.length; i++){
        let value = nums[i];
        let complementValue = target-value;
        
        if(map[complementValue] !== undefined){
            return [i, map[complementValue]]
        } else {
            map[value] = i
        }
    }
};
```


2. Reverse Integer
```
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    const Num = Math.abs(x).toString().replace(/0+$/,'').split('').reverse()
    const Result = Number(Num.join('')) * Math.sign(x)

    let Max = 2147483647
    let Min = -2147483648
    if(Result > Max || Result < Min) return 0;
    else return Result
};

```

