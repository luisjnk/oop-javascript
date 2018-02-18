class DateHelper {

    textForDate (text) {
        let data = new Date(
            ...text
                   .split('-')
                   .map((item,index) => item - index % 2 )
        )

        return data;
    }

    dateForText (date) {

        let dayMonthYear = date.getDate()
        + '/' + (date.getMonth() + 1)
        + '/' + (date.getFullYear());

        return dayMonthYear;
    }
}