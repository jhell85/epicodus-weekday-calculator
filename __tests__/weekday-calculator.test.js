import { dayCalculator } from './../src/dayOfDate.js';

describe('dayCalculator(year, month, day)', () => { 
  
  test('should determine if a date is not valid', () => {
    let userDate = new dayCalculator(2020, 13, 5);
    expect(userDate.checkValidDate()).toEqual(false);
    });

  test('should return the day of the week for past date', () => {
    let pastDate = new dayCalculator(2020, 2, 5)
    expect(pastDate.checkValidDate()).toEqual("Wednesday")
  })
});

