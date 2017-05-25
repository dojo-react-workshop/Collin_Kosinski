
 var myObj =  {
        add: function (x, y) {
            var sum = 0;
            sum = x + y;
            return sum;
        },
        multiply: function (x, y) {
            var sum = 0;
            sum = x * y;
            return sum
        },
        square: function (x) {
            var sum = 0;
            sum = x * x;
            return sum;
        },
        random: function (min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    
};
module.exports = myObj;

// console.log(myObj.add(5, 5));
// console.log(myObj.multiply(5, 5));
// console.log(myObj.square(4));
// console.log(myObj.random(10, 50));
