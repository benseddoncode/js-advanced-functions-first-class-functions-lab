// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function createFareMultiplier(multiplyValue) {
    return function (value) {
        return multiplyValue * value
    }
}

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers)
}