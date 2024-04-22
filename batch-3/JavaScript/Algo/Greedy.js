// imagine you have a big bag of candies with different flavors, and you want to eat as many candies as possible without getting sick. The greedy method is like picking the candy that looks the best right now without thinking about the future.

// let's say you have candies of different sizes and you want to fill your tummy with as much candy as possible. With the greedy method, you would just keep picking the biggest candy left until your tummy is full. You don't think about saving any for later, you just go for the biggest one at the moment.

// So in JavaScript, you'd write a function that looks at all the candies and picks the biggest one each time until your tummy can't hold any more candy. It's simple and quick, but sometimes it might not give you the absolute best result in the end.

//// Let's use the example of finding the minimum number of coins needed to make change for a given amount 

function minCoins(coins, amount) {
    // Sort coins in descending order
    coins.sort((a, b) => b - a);
    
    let coinCount = 0;
    let remainingAmount = amount;

    for (let i = 0; i < coins.length; i++) {
        const currentCoin = coins[i];
        // Calculate how many coins of this type we can use
        const coinsNeeded = Math.floor(remainingAmount / currentCoin);
        // Add the number of coins to the total count
        coinCount += coinsNeeded;
        // Update the remaining amount after using these coins
        remainingAmount -= coinsNeeded * currentCoin;
    }

    return coinCount;
}

// Example usage:
const coins = [25, 10, 5, 1]; //  4 + 1 + 1 + 1
const amount = 73; // 73-41 = 32-25  = 7 - 5 =2
console.log(minCoins(coins, amount)); 
