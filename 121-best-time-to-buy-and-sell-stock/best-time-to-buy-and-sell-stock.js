/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0;
    let maximumProfit = 0;

    for(let i=1; i<prices.length; i++){
        if(prices[i] < prices[buy]){
            buy = i;
        }

        if(prices[i]-prices[buy] > maximumProfit){
            maximumProfit = prices[i]-prices[buy];
        }
    }

    return maximumProfit>0? maximumProfit: 0;
};