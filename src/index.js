module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let string = str;
  for (let i in bracketsConfig) {
      arr[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
  }
  for (let i = 0; i <= str.length; i++) {
      for (let j in bracketsConfig) {
          string = string.split(`${arr[j]}`).join('');
      }
  }
  if (string.length == 0) {
      return (true);
  } else if (string.length != 0) {
      return (false);
  }
}
