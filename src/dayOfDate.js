export function dayCalculator(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day 
}


dayCalculator.prototype.checkValidDate = function() {
  if ((this.day <= 31 && this.day >= 1) && (this.month <= 12 && this.month >= 1)) {
    return true;
  } else {
    return false;
  }
}

