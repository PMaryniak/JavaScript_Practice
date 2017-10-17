/*Truncate a given string. Add "..." if the num argument is shorter than the string.
/Note that the three dots will add to the string (Unless num is less than or equal to 3)*/
function truncateString(str, num) {
    if (str.length <= num )
        return str;
    else if (num <= 3)
        return str.slice(0, num) + "...";
    else
        return str.slice(0, num - 3) + "...";

}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
