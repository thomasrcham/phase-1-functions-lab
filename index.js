let distanceFromHQ = "";
let farePrice = "";

function distanceFromHqInBlocks(pickup){
        let distance = pickup - 42;
        let distanceFromHQ = Math.abs(distance);
    return distanceFromHQ;
}

function distanceFromHqInFeet(pickup){
    let distance = pickup - 42;
    let distanceFromHQ = Math.abs(distance);
    let distanceFromHQFt = distanceFromHQ * 264;
    return distanceFromHQFt;
}

function distanceTravelledInFeet(blk1, blk2){
    let blocks = Math.abs(blk1 - blk2);
    let distanceTravelledInFeet = blocks * 264;
    return distanceTravelledInFeet;
}

function calculatesFarePrice(blk1, blk2){
   let blocks = Math.abs(blk1 - blk2);
   let distanceTravelledInFeet = blocks * 264;
   if (distanceTravelledInFeet <=400){
        farePrice = 0
        return farePrice;
    } else if (distanceTravelledInFeet >400 && distanceTravelledInFeet <=2000){
        farePrice = (distanceTravelledInFeet - 400) * 0.02;
        return farePrice;
    } else if (distanceTravelledInFeet >2000 && distanceTravelledInFeet <=2500){
        farePrice = 25
        return farePrice;
    } else if (distanceTravelledInFeet >2500){
        farePrice = 'cannot travel that far';
        return farePrice;
    }
}