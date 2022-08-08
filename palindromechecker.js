/* 如果您的字符串是回文，则必须返回“true”。否则，返回“false”。
您需要删除所有非字母数字字符（标点、空格和符号）并将所有内容转换为相同的大小写（小写或大写）以检查回文。
*/

//快捷方式
function palindrome(str) {
  let regex = /[A-Za-z0-9]+/g
  let target = str.match(reg).join("").toLowerCase()
  return target == target.split("").reverse().join("")
}

palindrome("eye");
