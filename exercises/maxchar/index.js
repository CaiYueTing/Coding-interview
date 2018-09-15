// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {}
    str.split('').forEach((el, i)=>{
        if (!obj[el]){
            obj[el] = 1;
        }else{
            obj[el] ++;
        }
    })
    // for (let char of str){
    //     if(obj[char]){
    //         obj[char] ++
    //     }else{
    //         obj[char] = 1
    //     }
    // }
    let max =0
    let value = ''
    for (let prop in obj){
        if(obj[prop] >max){
            max = obj[prop]
            value = prop
        }
    }
    return value
    
}

module.exports = maxChar;
