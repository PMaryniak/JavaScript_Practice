//Title the first letter of every word in a sentence
function titleCase(str) {
    var sen = str.toLowerCase().split(" ");
    var final = sen.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    return final.join(" ");
}

titleCase("I'm a little tea pot");