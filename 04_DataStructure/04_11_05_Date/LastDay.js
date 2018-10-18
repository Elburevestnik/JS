"use strict"
function getLastDayOfMonth(year, month) {
	var date = new Date(year, month, 28+3);
	if(+date.getDate() != 31) {
		date.setFullYear(year, month, 28+2);
		//date.setDate(28+2);
			if(+date.getDate() !=30) {
				date.setFullYear(year, month, 28+1);
					if(+date.getDate() !=29) {
					date.setFullYear(year, month, 28);
				}
			}
	}
	return date.getDate();
}