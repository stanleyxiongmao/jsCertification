//设计一个收银机抽屉函数 checkCashRegister()，它接受购买价格作为第一个参数 (price)，付款作为第二个参数 (cash)，并将现金抽屉 (cid) 作为第三个参数。
function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price* 100;
  let cidSum = 0;
  for(let elem of cid) {
    cidSum += elem[1]*100
  };
  if (change > cidSum) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  else if (change == cidSum) {
    return {status: "CLOSED", change: cid}
  }
  else {
    cid = cid.reverse()
    let answer = []
    let moneys = {
      "PENNY": 1,
      "NICKEL":5,
      "DIME": 10,
      "QUARTER": 25,
      "ONE": 100,
      "FIVE": 500,
      "TEN": 1000,
      "TWENTY": 2000,
      "ONE HUNDRED": 10000
    }
    for(let elem of cid) {
      let holder = [elem[0], 0] 
      elem[1] = elem[1] * 100
      while (change >= moneys[elem[0]] && elem[1] > 0) {
        change -= moneys[elem[0]]
        elem[1] -= moneys[elem[0]]
        holder[1] += moneys[elem[0]]/100
      }
      if (holder[1] > 0) {
        answer.push(holder)
        
      }
    }
    if(change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
  return {status: "OPEN", change: answer}
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
