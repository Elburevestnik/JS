"use strict"
function getWeekDay(date) {
	switch (+date.getDay()) {
		case 0:
		return 'вс';
		case 1:
		return 'пн';
		case 2:
		return 'вт';
		case 3:
		return 'ср';
		case 4:
		return 'чт';
		case 5:
		return 'пт';
		case 6:
		return 'сб';
	}
}