function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed){
    var self = this;
    this.name = name;
    this.speed = speed;
    var distance_travelled = 0;
    var updateDistanceTravelled = function(){
        distance_travelled += self.speed;
    }
    this.numberOfWheels = numberOfWheels;
    this.numberOfPassengers = numberOfPassengers;
    this.makeNoise = function (){
        console.log('make some noise');
    }
    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
    }
    this.checkMiles = function(){
        console.log(distance_travelled);
    }
}


var Bike = new VehicleConstructor('Bike', 2, 1, 50)
Bike.makeNoise = function (){
    console.log('ring ring!')
}

var Sedan = new VehicleConstructor('Sedan', 4, 5, 40)
Sedan.makeNoise = function(){
    console.log('Honk Honk!');
}

var Bus = new VehicleConstructor('Bus', 6, 40, 20)
Bus.addPassengers = function(num){
    Bus.numberOfPassengers += num;
    console.log(Bus.numberOfPassengers);
}

console.log(Bus.speed);
Bus.move();
Bus.move();
Bus.checkMiles();
// console.log(Bus);
// Bike.makeNoise();
// Sedan.makeNoise();
// Bus.makeNoise();
// Bus.addPassengers(4);
// Bus.addPassengers(10);
