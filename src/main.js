import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { dayCalculator } from './dayOfDate';
import $ from "jquery";

$(document).ready(function(){
  $("#dateinput").submit(function(event){
    event.preventDefault();

    let userYear = parseInt($('input#year').val());
    let userMonth = parseInt($('input#month').val());
    let userDay = parseInt($('input#day').val());

    let userCalculator = new dayCalculator(userYear, userMonth, userDay);
    $('#showdayresult').html(userCalculator.checkValidDate());
  });
});