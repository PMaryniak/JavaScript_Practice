//Take the values past the first argument and remove them from the array given in the first argument.
function destroyer(arr) {
    var destroy = [];
    for (var i = 1; i < arguments.length; i++)
        destroy.push(arguments[i]);

    return arr.filter(function(item){
        return destroy.indexOf(item) === -1;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
