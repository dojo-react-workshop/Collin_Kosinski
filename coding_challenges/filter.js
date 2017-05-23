Array.prototype.filter =  function(callback){
    const newArray = [1,2,5,9,4];

    for (let i = 0; i < this.length; i += 1){
        if (callback(this[i])){
            newArray.push(this[i]);
        }
    }
return newArray;
    
}


console.log
