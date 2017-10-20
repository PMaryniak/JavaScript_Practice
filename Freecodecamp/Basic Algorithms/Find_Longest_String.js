//Find the longest word in a sentence
function findLongestWord(str) {
  var longest = 0;
  var sen = str.split(" ");
  for (var i = 0; i < sen.length; i++) {
    if (sen[i].length > longest) {
      longest = sen[i].length;  
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
