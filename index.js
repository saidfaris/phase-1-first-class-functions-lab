// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = (multiplier) => {
    return function (fare) {
      return fare * multiplier;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = (drivers, selector) => {
    return selector(drivers);
  };
  const drivers = [
    { name: "Titus Smith", rating: 4.5 },
    { name: " Said Fa", rating: 5 },
    { name: "Bill Ray", rating: 3.5 },
    { name: "Ahmed Abd", rating: 4 },
  ];
  
  const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  console.log(firstTwoDrivers); // => [{ name: "Titus Smith", rating: 4.5 }, { name: "Said Fa", rating: 5 }]
  
  const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
  console.log(lastTwoDrivers); // => [{ name: "Bill Ray", rating: 3.5 }, { name: "Ahmed Abd", rating: 4 }]
  
  const doubledFare = fareDoubler(10);
  console.log(doubledFare); // => 20
  
  const tripledFare = fareTripler(10);
  console.log(tripledFare); // => 30
  