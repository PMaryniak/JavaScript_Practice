//Repeat given string based on number of times given. If num isn't a number it returns an empty string.
function repeatStringNumTimes(str, num) {
    var repeat = "";
    if (Math.sign(num) === 1) {
        for (i = 0; i < num; i++) {
            repeat += str;
        }
        return repeat;
    }

    return "";
}

repeatStringNumTimes("abc", 3);