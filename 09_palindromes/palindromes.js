function palindromes(string) {

    var replaceWithSpaces = /[\W_]/g;

    var lowRegStr = string
    .toLowerCase()
    .replace(replaceWithSpaces, '');

    var reverseStr = lowRegStr
    .split('')
    .reverse()
    .join('');
    
    return reverseStr === lowRegStr;
 }

// Do not edit below this line
module.exports = palindromes;
