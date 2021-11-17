// Given a word, return true if that word contains only unique characters. 
//Return false otherwise.

function isUnique(str){
    let charCount = {}
    for (let i = 0; i < str.length; ++i){
        let char = str[i];
        if(charCount[char]){
            return false
        }
        charCount[char] = true
    }
    return true
}

console.log(isUnique('Laramie'))
console.log(isUnique('Downs'))

//Scotts Solution
function hasUniqueChars(word){
    let uniqueChars = new Set([])
    for(let i = 0; i < word.length; i++){
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(hasUniqueChars('Laramie'))
console.log(hasUniqueChars('Downs'))