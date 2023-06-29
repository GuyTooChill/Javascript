/* 
Given two strings, return true if the first string can be built from the letters in the 2nd string
Ignore case .indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/*****************************************************************************/
function canBuildS1FromS2(s1, s2) {
    let temp = []
    let temp2 = []
    for (let i = 0; i < s1.length; i++){
        temp.push(s1[i].toLowerCase())
    }
    for (let i = 0; i < s2.length; i++) {
        if (temp.includes(s2[i]))
            temp2.push(s2[i].toLowerCase())
    }
    // console.log(temp.sort())
    // console.log(temp2.sort())
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp2.length; j++) {
            if (temp[i] === temp2[j]) {
                continue
            }
            else
                break
        }
        return false
    }
    return true
}

console.log(canBuildS1FromS2(strA1, strB1));
console.log(canBuildS1FromS2(strA2, strB2));
// console.log(canBuildS1FromS2(strA3, strB3));
// console.log(canBuildS1FromS2(strA4, strB4));
// console.log(canBuildS1FromS2(strA5, strB5));

module.exports = { canBuildS1FromS2 };