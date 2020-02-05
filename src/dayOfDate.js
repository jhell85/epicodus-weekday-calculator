export function dayCalculator(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day 
}


dayCalculator.prototype.checkValidDate = function() {
  if ((this.day <= 31 && this.day >= 1) && (this.month <= 12 && this.month >= 1)) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let date = new Date(`${this.year}, ${this.month}, ${this.day}`)
    let dayResult = weekday[date.getDay()]
    return dayResult
  } else {
    let date = new Date(`${this.year}, ${this.month}, ${this.day}`)
    console.log(`${this.year} ${this.month} ${this.day}`)
    console.log(date)
    return false;
  }
}



// dayCalculator.prototype.returnDayOfWeek = function () {

// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

//  return weekday[this.getDay()];

// }