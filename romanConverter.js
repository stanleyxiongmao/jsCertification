/*将您的号码转换为罗马数字。
所有罗马数字的答案都应以大写形式提供！
*/

//罗马数字词典
let romanDictionary = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

//我不喜欢使用循环，但在这里
function convertToRoman(num) {
  if (num === 0) {return ""};
  for(let x = 0; x < romanDictionary.length; x++ {
    if( num >= romanDictionary[x][0]) {
      return romanDictionary[x][1] + convertToRoman(num - romanDictionary[x][0])
    }
  }
}


