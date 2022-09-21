
const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]]
}
const returnLastTwoDrivers = function(array) {
    return [array[array.length-2], array[array.length-1]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function (fare) {
        return number*fare
    }
}

const fareDoubler = fare => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = fare => {
    return createFareMultiplier(3)(fare)
}


function selectDifferentDrivers(drivers, otherDrivers) {
    if (otherDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    else if (otherDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}