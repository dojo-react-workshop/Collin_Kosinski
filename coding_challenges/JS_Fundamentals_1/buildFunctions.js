function runningLogger(){
    console.log('I am running!')
}

runningLogger();

function multiplyByTen(number){
    number *= 10;
    console.log(number);
}

multiplyByTen(5);

function stringReturnOne(){
    console.log('this is string one');
}

function stringReturnTwo(){
    console.log('this is string two');
}

stringReturnOne();
stringReturnTwo();

function caller(argument){
    if(typeof argument !== 'function'){
        console.log('this is not a function');
    }else{
        argument();
    }
}
caller('hello');
caller(stringReturnOne);

function myDoubleConsoleLog(x,y){
    if(typeof x === 'function' && typeof y === 'function'){
        x(); 
        y();
    }else if(typeof x === 'function' & typeof y !== 'function'){
        x();
        console.log(`${y} is not a function`);
    }else if(typeof y === 'function' & typeof x !== 'function'){
        y();
        console.log(`${x} is not a function`);
    }else{
    console.log('Please make sure the parameters entered are functions');
    }
}

myDoubleConsoleLog(stringReturnOne, stringReturnTwo );


function caller2(argument){
    console.log("starting")
    if(typeof argument === 'function'){
        setTimeout(function(){
            argument(stringReturnOne, stringReturnTwo)
            console.log('ending?')}
            , 2000)
            return ('intersting');
    }else{
        console.log('this is not a function');
    }
}

caller2(myDoubleConsoleLog);