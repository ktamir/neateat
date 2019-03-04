// @flow

import faker from 'faker';

// Picks a random item in an array
const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)];

// Picks a random whole number in a range
const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// To be replaced by redux store
export const restaurants = [];

// To be retrieved from an API, etc...
export const cuisines = [
  {
    key: 'italian',
    displayName: 'Italian',
  },
  {
    key: 'french',
    displayName: 'French',
  },
  {
    key: 'burgers',
    displayName: 'Burgers',
  },
];

for (let i = 0; i < 5; i = i + 1) {
  restaurants.push(
    {
      id: i.toString(),
      name: faker.company.companyName(),
      cuisine: pickRandom(cuisines),
      rating: randomNumberInRange(1, 3),
      address: faker.address.streetAddress,
      deliveryTime: randomNumberInRange(30, 120),
      accepts10Bis: Math.random() >= 0.5,
    },
  );
}
