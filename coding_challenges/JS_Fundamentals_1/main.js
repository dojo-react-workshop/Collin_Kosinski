var x = [3, 5, "Dojo", "rocks", "Michael", "sensei"];

function arrLog(x) {
    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"])

function sumOf500() {
    var sum = 0;
    for (var i = 1; i <= 500; i++) {
        sum += i;
    }
    console.log(sum);
}
var arr = [1, 5, 90, 25, -3, 0];

function minVal(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
function average(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum);
    }
    avg = (sum / arr.length);
    console.log(avg);
}
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

function objectDisplay(){
    for(var key in newNinja){
        console.log(key, newNinja[key]);
    }
}