//speed limit = 70
//+5 above the speed limit > +1 point
//Math.floor()
// 12 points license suspended


checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit =70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint)
        console.log ('OK');

    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);

        if(points >= 12)
            console.log('License suspended');
        else
            console.log ("Points", points);
    }
}