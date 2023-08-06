const countHours = (year, holidays) => {
    const OFF_DAYS = [0, 6];
    const compensationDays = holidays.filter(holiday => {
        const [month, day] = holiday.split('/');
        const holidayDay = new Date(year, parseInt(month) - 1, parseInt(day));
        if (!OFF_DAYS.includes(holidayDay.getDay())) {
            return holiday;
        }

    })

    return compensationDays.length * 2;
};

module.exports = countHours;
