function amountTocoins(amount, coins) {
    let result = [];
    for (var i = 0; i < coins.length; i++) {
      while (amount >= coins[i]) {
        result.push(coins[i]);
        amount = amount - coins[i];
      }
    }
    return result;
  }

var coins = [25, 10, 5, 2, 1];
var amount = parseInt(prompt("ENter the number"));
var result = amountTocoins(amount, coins);
console.log(result);