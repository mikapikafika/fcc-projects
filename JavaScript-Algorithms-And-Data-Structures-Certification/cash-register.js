/*--- CASH REGISTER ---*/
/*Design a cash register drawer function checkCashRegister() 
that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} 
if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} 
with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, 
with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */

function checkCashRegister(price, cash, cid) {
    let change = cash - price;

    const currency = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
      ];

    // calculating total cash available in cid
    // currValue[1] represents available cash for the current currency denomination
    let totalCid = cid.reduce((accumulator, currValue) => accumulator + currValue[1], 0);

    if (totalCid < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (totalCid === change) {
        return { status: "CLOSED", change: cid };
    }

    // there's enough cash to give change:
    // array to contain change
    const changeArray = [];
    // from highest to lowest currency unit
    for (let i = currency.length - 1; i >= 0; i--) {
        // destructuring - current unit and value
        const [unit, value] = currency[i];
        let available = cid[i][1];
        let toReturn = 0;

        while (change >= value && available > 0) {
            toReturn += value;
            change -= value;
            // rounding up to .XX
            change = Math.round(change * 100) / 100;
            available -= value;
        }

        if (toReturn > 0) {
            changeArray.push([unit, toReturn]);
        }
    }

    // still can't return full change
    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
      
    return { status: "OPEN", change: changeArray };
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);