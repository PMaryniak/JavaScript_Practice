const TAX_RATE = 0.08;
const PHONE_PRICE = 300.00;
const ACCESS_PRICE = 50.00;
const SPEN_THRESH = 200.00;

function findTax(total) {
    return total *= TAX_RATE;
}

var total = 0;
var bank_balance = prompt( "Please tell me your bank balance:" );

while (total < bank_balance) {
    total += PHONE_PRICE;
    if (total < SPEN_THRESH) {
        total += ACCESS_PRICE;
    }
}

total += findTax(total);

console.log("$" + total + " is your price");

if (total > bank_balance) {
    console.log("You can't afford this.");
}
else
    console.log("Enjoy Your Purchase! :)");