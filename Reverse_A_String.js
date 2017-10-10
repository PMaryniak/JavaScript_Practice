//This code takes in a string and reverses it
function reverseString(str) {
  var array = [];
  var string = str;
  array = string.split('');
  array = array.reverse();
  string = array.join('');
  return string;
}

reverseString("hello");
