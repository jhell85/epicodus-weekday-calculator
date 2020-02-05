import { dayCalculator } from './../src/dayOfDate.js';

describe('dayCalculator(year, month, day)', () => { 
  
  test('should determine if a date is not valid', () => {
    let userDate = new dayCalculator(2020, 12, 31);
    expect(userDate.checkValidDate()).toEqual(true);
    });
});

