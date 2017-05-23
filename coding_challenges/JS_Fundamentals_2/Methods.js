var findSum = function sumUp(x, y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
        sum += i;
    }
    console.log(sum);
}


var minumumValue = function minVal(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}

var averageValue = function average(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum);
    }
    avg = (sum / arr.length);
    console.log(avg);
}







var person = {
    name: 'Collin',
    distance_traveled: 0,
    say_name: function () {
        console.log(this.name);
    },
    say_something: function (text) {
        console.log(`${this.say_name()}  ${text}`);
        return person;
    },
    walk: function () {
        this.distance_traveled += 3;
        console.log(`${this.say_name()} is walking`);
        return person;
    },
    run: function () {
        this.distance_traveled += 10;
        console.log(`${this.say_name()} is running`);
        return person;
    },
    crawl: function () {
        this.distance_traveled += 1;
        console.log(`${this.say_name()} is crawling`);
        return person;
    },
}





