function romanToInteger(s) {
    const translations = {};

    translations['I'] = 1
    translations['V'] = 5
    translations['X'] = 10
    translations['L'] = 50
    translations['C'] = 100
    translations['D'] = 500
    translations['M'] = 1000

    let number = 0
    s = s.replace("IV", "IIII").replace("IX", "VIIII")
    s = s.replace("XL", "XXXX").replace("XC", "LXXXX")
    s = s.replace("CD", "CCCC").replace("CM", "DCCCC")
    for(let char of s) {
        number += translations[char]
    }
    return number;
}
let s = 'III'
console.log(romanToInteger(s))
