//Remove Falsy values in an array.
function bouncer(arr) {
    var list = arr.filter(Boolean);
    return list;
}

bouncer([false, null, 0, NaN, undefined, ""]);