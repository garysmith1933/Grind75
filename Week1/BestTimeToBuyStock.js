var maxProfit = function(prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[right] < prices[left]) {
      left = right;
    }

    const profit = prices[right] - prices[left];
    maxProfit = Math.max(profit, maxProfit);
    right++;
  }

  return maxProfit;
};

//Time: O(N)
//Space: O(1)