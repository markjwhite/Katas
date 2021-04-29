//This code is very repetitive and probably not good.

const calculateChange = (total, cash) => {
  let numOfBills;
  let changeRemaining = cash - total;
  let bills = {};

  if (changeRemaining >= 2000) {
    numOfBills = changeRemaining / 2000;
    numOfBills = Math.floor(numOfBills);
    changeRemaining -= numOfBills * 2000;
    bills.twentyDollar = numOfBills;
  }
  if (changeRemaining >= 1000) {
    numOfBills = changeRemaining / 1000;
    numOfBills = Math.floor(numOfBills);
    changeRemaining -= numOfBills * 1000;
    bills.tenDollar = numOfBills;
  }
  if (changeRemaining >= 500) {
    numOfBills = changeRemaining / 500;
    numOfBills = Math.floor(numOfBills);
    changeRemaining -= numOfBills * 500;
    bills.fiveDollar = numOfBills;
  }
  if (changeRemaining >= 200) {
    numOfBills = changeRemaining / 200;
    numOfBills = Math.floor(numOfBills);
    changeRemaining -= numOfBills * 200;
    bills.twoDollar = numOfBills;
  }
  if (changeRemaining >= 100) {
    numOfBills = changeRemaining / 100;
    numOfBills = Math.floor(numOfBills);
    changeRemaining -= numOfBills * 100;
    bills.oneDollar = numOfBills;
  }
  if (changeRemaining >= 25) {
    numOfBills = changeRemaining / 25;
    numOfBills = Math.floor(numOfBills);
    changeRemaining -= numOfBills * 25;
    bills.quarter = numOfBills;
  }
  if (changeRemaining >= 10) {
    numOfBills = changeRemaining / 10;
    numOfBills = Math.floor(numOfBills);
    changeRemaining -= numOfBills * 10;
    bills.dime = numOfBills;
  }
  if (changeRemaining >= 5) {
    numOfBills = changeRemaining / 5;
    numOfBills = Math.floor(numOfBills);
    changeRemaining -= numOfBills * 5;
    bills.nickel = numOfBills;
  }
  if (changeRemaining >= 1) {
    numOfBills = changeRemaining / 1;
    numOfBills = Math.floor(numOfBills);
    changeRemaining -= numOfBills * 1;
    bills.penny = numOfBills;
  }
  return bills;
};
console.log(calculateChange(76, 7000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

