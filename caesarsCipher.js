/*
一种密码，其中字母的值移动了 13 个位置
因此 A ↔ N、B ↔ O 等等。
*/

//先创建另一个长库
let caesarsDictionary = {
  N: "A",
  O: 'B',
  P: 'C',
  Q: 'D',
  R: 'E',
  S: 'F',
  T: 'G',
  U: 'H',
  V: 'I',
  W: 'J',
  X: 'K',
  Y: 'L',
  Z: 'M',
  A: 'N',
  B: 'O',
  C: 'P',
  D: 'Q',
  E: 'R',
  F: 'S',
  G: 'T',
  H: 'U',
  I: 'V',
  J: 'W',
  K: 'X',
  L: 'Y',
  M: 'Z',
  " " : " ",
  "!" : "!",
  "?" : "?",
  "." : "."
};
;

//使用“split”和“map”和“join”方法
function rot13(str) {
  return str
  .split("")
  .map(target => caesarsDictionary[target]
  .join("")
}
