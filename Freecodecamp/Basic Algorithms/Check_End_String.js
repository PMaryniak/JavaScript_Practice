//Check if a string's end matches given target string
function confirmEnding(str, target) {
    if (str.substring(str.length - target.length) !== target) {
        return false;
    }
    return true;
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
