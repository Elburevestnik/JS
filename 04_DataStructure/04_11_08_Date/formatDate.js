"use strict"
function formatDate(date) {
  var date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
  var newDate = date1.toISOString();
  var arrDate = newDate.split('T');
  var arr = arrDate[0].split('-');
  var year = (arr[0].charAt(2) + arr[0].charAt(3));
  return (arr[2] + '.' + arr[1] + '.' + year);    
  
}