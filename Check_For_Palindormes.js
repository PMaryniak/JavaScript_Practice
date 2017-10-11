//Basic version of inding a palindrome if its a short string.
function palindrome(str) {

    return str.replace(/[\W_]/g, '').toLowerCase() ===
           str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join("");
}

palindrome("A man, a plan, a canal. Panama");

//More efficient version for strings having as many words as books.
function palindrome2(str) {
    var word = str.replace(/[\W_]/g, '').toLowerCase().split('');
    var j = word.length - 1;

    for(i = 0; i < word.length -1; i++) {
        if (word[i] !==  word[j]) {
            return false;
        }
        j--;
    }
    return true;
}

palindrome2("1 eye for of 1 eye.");