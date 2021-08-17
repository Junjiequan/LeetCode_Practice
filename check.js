/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (strs.length == 0){
        return "";
    }
    let subStr = strs[0];
    for (let i=1;i<strs.length;i++){
        while (strs[i].indexOf(subStr) != 0){
            subStr = subStr.slice(0,subStr.length-1);
            console.log(subStr)
            if (subStr === ""){
                return "";
            }
        }
    };
    return subStr;
};

longestCommonPrefix(["flow","flow","flight"])