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


function NinjaConstructor(name, cohort){
    this.name = name;
    this.newBelts = "yellow belt";
    var belts = ['yellow belt', 'red belt', 'black belt'];
    this.sayName = function(){
        console.log(`My name is ${this.name} and I am a ninja`);
    },
    this.cohort = cohort;
    this.beltLevel = 0
    this.beltLevelUp = function(){
        if(this.beltLevel < 2){
            this.beltLevel += 1;
            this.newBelts = belts[this.beltLevel];
            console.log(`I am now a ${this.newBelts}`)
        }
    }
}

var Jimmy = new NinjaConstructor("jimmy");
Jimmy.sayName();
console.log(`Right now I am a ${Jimmy.newBelts}`)
Jimmy.beltLevelUp();
Jimmy.beltLevelUp();









