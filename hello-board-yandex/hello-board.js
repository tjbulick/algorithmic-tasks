const isYearLeap = year => {
	if ((year % 4 !== 0) || (year % 100 === 0) && (year % 400 !== 0)) { return false }
    else return true
}

const getYearBeginDay = year => {
	let leapyears, years, days, dayofweek;
 
    years = year - 1900;
    leapyears = Math.floor((years - 1) / 4);
    days = years * 365 + leapyears;
    dayofweek = days % 7;
 
    return dayofweek
}

const getPosts = year => {
	let arr = [];
	let month = 1, day, daysInYear, sum = 0, dayOfWeek, dayOfMonth, leap;

	leap = isYearLeap(year);
	daysInYear = (leap) ? 366 : 365;
	dayOfWeek = getYearBeginDay(year);
	console.log(dayOfWeek);
	dayOfMonth = 1;

	for (day = 1; day <= daysInYear; day++) {
		// 
		if ((dayOfMonth % 2 !== 0) && ([1,2,6].includes(dayOfWeek))) {
			sum++;
			arr.push({
				'day': day,
				'month': month,
				'dayOfMonth': dayOfMonth,
				'dayOfWeek': dayOfWeek
			});
		}
		// 
		dayOfWeek++;
		if (dayOfWeek === 7) { dayOfWeek = 0 }

		// февраль
		if (month === 2) {
			if (leap) {
				if (dayOfMonth === 29) {
					month++;
					dayOfMonth = 1;
				} else dayOfMonth++;
			} else {
				if (dayOfMonth === 28) {
					month++;
					dayOfMonth = 1;
				} else dayOfMonth++;
			}
		}

		// месяца, в которых 31 день
		if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
			if (dayOfMonth === 31) {
					month++;
					dayOfMonth = 1;
				} else dayOfMonth++;
		}

		// месяца, в которых 30 дней
		if ([4, 6, 9, 11].includes(month)) {
			if (dayOfMonth === 30) {
					month++;
					dayOfMonth = 1;
				} else dayOfMonth++;
		}

	}


	console.log(arr)
	return sum
}

console.log(getPosts(2050)); // 79