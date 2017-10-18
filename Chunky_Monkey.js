//This function splits an array into groups of length given in size. The result is returned in a two-dimensional array..
function chunkArrayInGroups(arr, size) {
    var chunk = [];
    var j = 0;
    for(var i = 0; i < arr.length; i += size) {
        chunk[j] = arr.slice(i, i + size);;
        j++;
    }

    return chunk;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 4);