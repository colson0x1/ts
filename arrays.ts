const coolPlaces: string[] = [];
const carMakers = ['Ferrari', 'Lamborghini', 'McLaren'];
const dates = [new Date(), new Date()];

const carsByMake = [['LaFerrari'], ['Veneno Roadster'], ['P1']];
const topExoticCars: string[][] = [];

/* Benefits of Arrays in TypeScript */

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map', 'forEac', 'reduce' and more
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
// const importantDates = [new Date(), '2025-01-01'];

const importantDates: (Date | string)[] = [];
importantDates.push('2025-01-01');
importantDates.push(new Date());
