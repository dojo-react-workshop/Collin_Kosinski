function getwaterVolume(arrOfTerraces){
    let maxIdx = 0;
    let leftBound = arrOfTerraces[0];
    let rightBound = arrOfTerraces[arrOfTerraces.length -1];
    let volume = 0;
    for(let i =1; i < arrOfTerraces.length; i+=1){
    if(arrOfTerraces[i] > arrOfTerraces[maxIdx]){
        maxIdx = i
        }
    }
    for(let i =1; i < maxIdx; i ++){
        if(arrOfTerraces[i] < leftBound){
            volume += leftBound - arrOfTerraces[i];
        }else{
            leftBound = arrOfTerraces[1];
        }
    }
    for(let i = arrOfTerraces.length -2; i > maxIdx; i++){
        if(arrOfTerraces[i] < rightBound){
            volume += rightBound - arrOfTerraces[i];
        }else{
            rightBound = arrOfTerraces[i];
        }
    }
    return volume;
}

getwaterVolume([1,3,5,4,1,6,3,4]);