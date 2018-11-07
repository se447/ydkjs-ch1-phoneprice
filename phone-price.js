/*
Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/


const TAX_RATE = 0.08;
const PHONE_PRICE = 200;
const ACCESSORY_PRICE = 8.99;
const SPENDING_THRESHOLD = 0;

let bank_balance = 1000;
let purchase_amount = 0;

while (purchase_amount < bank_balance) {
  purchase_amount = purchase_amount + PHONE_PRICE;

  if (purchase_amount < SPENDING_THRESHOLD) {
    purchase_amount = purchase_amount + ACCESSORY_PRICE;
  }
}

calculateTax = (amount) => {
  return amount = amount * TAX_RATE;
}

formatPrice = (amount) => {
  return '$' + amount.toFixed(2);
}

purchase_amount = purchase_amount + calculateTax(purchase_amount);

console.log('Your purchase is ' + formatPrice(purchase_amount))

if (purchase_amount < bank_balance) {
  console.log('You can afford this purchase');
} else {
  console.log('You can\'t afford this purchase');
}
