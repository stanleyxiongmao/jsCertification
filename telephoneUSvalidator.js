//如果传递的字符串看起来像一个有效的美国电话号码，则返回“true”。
function telephoneCheck(str) {
  let regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
  return regex.test(str)
}
