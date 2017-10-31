//Decode the string in the ROT13 Cipher
function rot13(str) {
    var thing = [];
    for (var i = 0; i < str.length; i++) {
        var letter = str.charCodeAt(i);
        if (letter < 65 || letter > 90)
            thing[i] = String.fromCharCode(letter);
        else if (letter + 13 > 90)
            thing[i] = String.fromCharCode(letter - 13);
        else
            thing[i] = String.fromCharCode(letter + 13);
    }
    return thing.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
