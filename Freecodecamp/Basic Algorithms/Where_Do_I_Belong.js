//Place the value given in num into the array, sort it from low to high, and return the index at which the num appears in the array.
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);