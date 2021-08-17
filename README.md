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
3. Roman to Integer

The left side unit should always larger than right side unit. 
If not, then it is the combination unit such as (IV,IX,XL,XC,CD,CM)
Therefore, the key is to identify whether left side is larger than right side unit.
Since The first value of the combination unit already summed up with result(total value),
for the next calculation the previous unit value needs to be deducted from the 2nd unit of combination unit, 
moreover, extra previous value is also needs to be deducted, as the actual value of the combination unit is equal to
`combination.second_unit - combination.first_unit || IV(4) = V(5) - I(1) `
```
map = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
}

// 'IV':4,'IX':9,'XL':40,'XC':90,'CD':400,'CM':900,

var romanToInt = function(s) {
    let result = 0;
    let prev = 0;
    for (let i=0; i<s.length;i++){
        let num = map[s[i]];
        num > prev
        ? result += num - 2 * prev
        : result += num
        prev=num;
    }
    return result
};
romanToInt('CXLVIII')
```

4. Longest Common Prefix

```
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let target = strs[0];
    let check ='';
    for(let i=1; i<strs.length; i++){

        for(let ii=0; ii<strs[i-1].length; ii++){
            
            if (target[ii] === (strs[i][ii])){
                check += strs[i][ii]
            } else {
                target = check
            }
        }
        check='';
    }
    return target
};

longestCommonPrefix(["abcccc","a"])
```
