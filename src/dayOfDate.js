export function dayCalculator(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day 
}


dayCalculator.prototype.checkValidDate = function() {
var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let date = new Date(`${this.year}, ${this.month}, ${this.day}`)
  if (date == "Invalid Date"){
    return false
  } else {

  let dayResult = weekday[date.getDay()]
  return dayResult
  }
} 

