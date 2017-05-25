function getMaxProfit(a){
    var obj = {profit: a[0]-a[1], buyInd:0, sellInd:1};

    a.forEach((val,index) => {
        for(var i = index + 1; i < a.length; i++){
            if (a[i] - val > obj.profit){
                obj.profit = a[i] - val;
                obj.buyInd = index;
                obj.sellInd = i;
            }
        }
    })
     console.log(obj.profit);
}


var a = [10, 7, 5, 8 ,11, 9];

console.log(getMaxProfit(a));