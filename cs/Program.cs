//  Prices object containing prices for each SKU
Dictionary<char, int> prices = new Dictionary<char, int>(){
    {'A', 50},
    {'B', 30},
    {'C', 20},
    {'D', 15}
};

//  Calculate discount for items with SKU 'A' and 'B' (20 for every 3 'A' items, 15 for every 2 'B' items)
int calculateDiscount(int countA, int countB) {
    return 20 * (countA / 3) + 15 * (countB / 2);
}

//  Main price calculation
int calculateTotal(string items) {
    int countA = 0;
    int countB = 0;
    int totalPrice = 0;

    foreach (var item in items.Trim().ToUpper()) 
    {
        if (!Char.IsLetter(item)) 
        {
            throw new Exception("Invalid input");
        }

        totalPrice += prices[item];
        if (item == 'A') countA++;
        if (item == 'B') countB++;
    }

    return totalPrice - calculateDiscount(countA, countB);
}

//  IO and interface
Console.WriteLine("Please provide items to be added to cart\n");

string? input = Console.ReadLine();

Console.WriteLine("Items: " + input);

if (input != null) {
    try
    {
        Console.WriteLine("Total: " + calculateTotal(input));
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
} else {
    Console.WriteLine("Invalid input!");
}
