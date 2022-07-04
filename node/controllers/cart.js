const ErrorResponse = require('../utilities/ErrorResponse');

exports.calculatePrice = (req, res, next) => {
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

    //  Main price calculation
    const calculateTotal = (items) => {
        let countA = 0;
        let countB = 0;
        let totalPrice = 0;

        items
            .trim()
            .split('')
            .forEach((item) => {
                if (!item.match(/[abc]/i)) {
                    return next(new ErrorResponse('Unexpected identifier, please check the provided items.'), 400);
                }

                totalPrice += prices[item];
                if (item === 'A') countA++;
                if (item === 'B') countB++;
            });

        return totalPrice - calculateDiscount(countA, countB);
    };

    const total = calculateTotal(req.body.items);

    res.status(200).json({ success: true, totalPrice: total });
};
