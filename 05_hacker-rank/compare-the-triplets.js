'use strict';

const checkTriplets = function(aliceRating, bobRating) {
    let i = 0,
        j = 0,
        aliceMax = aliceRating.length,
        bobMax = bobRating.length,
        alicePoints = [],
        bobPoints = [];

    for( ;i < aliceMax; i += 1 ) {
        if( aliceRating[i] > bobRating[i] ) {
            alicePoints.push(1);
        } else if ( aliceRating[i] < bobRating[i] ) {
            bobPoints.push(1);
        } else if ( aliceRating[i] === bobRating[i] ) {
            alicePoints.push(0);
            bobPoints.push(0);
        }
    }

    alicePoints = (alicePoints.length === 0) ? 0 : alicePoints.reduce(getTotal);
    bobPoints = (bobPoints.length === 0) ? 0 : bobPoints.reduce(getTotal);


    return `${alicePoints} ${bobPoints}`;
};

function getTotal(acc, current, arr) {
    return acc + current;
}

function assingPoint(element, index) {
    if( element > bobRating[index] ) {
        alicePoints.push(1);
    } else if ( element < bobRating[index] ) {
        bobPoints.push(1);
    }
}

module.exports = {
    checkTriplets
};
