function checkCashRegister(price, cash, cid) {

  // money Units (in pennies)
  const moneyUnits = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
  };

  let status = '';
  let change = [];

  // Total cash in register machine
  let cidTotal = cid.reduce((acc, curr) => acc += curr[1] * 100, 0);

  // Cash due to costumer
  let dueCash = cash * 100 - price * 100;

  // If not enough cash in register machine
  if (dueCash > cidTotal) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  // If exact amount of cash in register machine
  else if (dueCash === cidTotal) {
    status = "CLOSED";
    change = cid;
  }
  // If enough cash in the register machine
  else {
    status = "OPEN";

    cid.reverse().forEach(item => {

      // Money unit variable
      let unit = item[0];
      // Money amount in register machine variable
      let amount = item[1] * 100;
      // Returned cash to customer variable
      let returnedCash = 0;

      while (dueCash >= moneyUnits[unit] && amount > 0) {
        // decriment dueCash
        dueCash -= moneyUnits[unit];
        // decriment cash in register machine
        amount -= moneyUnits[unit];
        // increment cash returned to customer
        returnedCash += moneyUnits[unit];
      }

      if (returnedCash !== 0) {
        change.push([unit, returnedCash / 100]);
      }

    });

    // Check possibility to returned excat change
    if (dueCash > 0) {
      status = "INSUFFICIENT_FUNDS";
      change = [];
    }

  }
  return { status: status, change: change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
