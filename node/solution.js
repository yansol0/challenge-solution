const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

//  Prices object containing prices for each SKU
const prices = {
    A: 50,
    B: 30,
    C: 20,
    D: 15,
};

//  Calculate discount for items with SKU 'A' and 'B' (20 for every 3 'A' items, 15 for every 2 'B' items)
const calculateDiscount = (countA, countB) => {
    return 20 * Math.floor(countA / 3) + 15 * Math.floor(countB / 2);
};

const calculateTotal = (items) => {
    let countA = 0;
    let countB = 0;
    let totalPrice = 0;

    items
        .trim()
        .split('')
        .forEach((item) => {
            if (!item.match(/[a-zA-Z]/i)) {
                throw new Error('Unexpected identifier, please check the provided items.');
            }

            totalPrice += prices[item];
            if (item === 'A') countA++;
            if (item === 'B') countB++;
        });

    return totalPrice - calculateDiscount(countA, countB);
};

readline.question(`Please provide items to be added to cart\n`, (items) => {
    console.log(`Total price: ${calculateTotal(items.toUpperCase())}`);
    readline.close();
});
