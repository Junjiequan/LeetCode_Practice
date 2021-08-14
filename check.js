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

/**
 * 
 * @desc LOGIC: The left side unit should always larger than right side unit. 
 *              If not, then it is the combination unit such as (IV,IX,XL,XC,CD,CM)
 *              Therefore, the key is to identify whether left side is larger than right side unit.
 *              Since The first value of the combination unit already summed up with result(total value),
 *              for the next calculation the previous unit value needs to be deducted from the 2nd unit of combination unit, 
 *              moreover, extra previous value is also needs to be deducted, as the actual value of the combination unit is equal to
 *              combination value = combination.second_unit - combination.first_unit 
 *              || IV(4) = V(5) - I(1)            
 */
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
    console.log(result)
    return result
};
romanToInt('CXLVIII')