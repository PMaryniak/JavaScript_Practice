//Return True if the string in the first wlwment of the array contains all the letters of the string in the second element in the array.
function mutation(arr) {

    var string = arr[0].toLowerCase();
    var stringTwo = arr[1].toLowerCase();

    for (var i = 0; i < stringTwo.length; i++) {
        if (string.indexOf(stringTwo[i]) === -1)
            return false;
    }
    return true;
}
mutation(["hello", "Hello"]);