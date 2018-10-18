"use strict"

function getLocalDay(date) {
  if (+date.getDay()) return (+date.getDay());
  else return 7;
}