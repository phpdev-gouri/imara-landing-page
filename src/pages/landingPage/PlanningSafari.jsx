import { forwardRef, useState } from 'react';

const PlanningSafari = forwardRef(
    ({ scrollToContactInformation, onChange }, ref) => {
        const today = new Date();
        const currentDate = today.getDate();
        const currentMonth = today.getMonth();
        const currentYearToday = today.getFullYear();

        const [selectedDate, setSelectedDate] = useState(null);
        const [view, setView] = useState('year'); // 'year' or 'month'
        const [currentYear, setCurrentYear] = useState(currentYearToday);
        const [selectedMonth, setSelectedMonth] = useState(null);


        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const handleYearChange = (increment) => {
            const newYear = currentYear + increment;
            // user can't go to years before current year
            if (newYear >= currentYearToday) {
                setCurrentYear(newYear);
            }
        };

        const handleMonthClick = (monthIndex) => {
            // check if the month is in the past
            if (currentYear === currentYearToday && monthIndex < currentMonth) {
                return; // don't allow selection of past months
            }
            setSelectedMonth(monthIndex);
            setView('month');
        };

        const handleDateClick = (day) => {
            if (
                currentYear === currentYearToday &&
                selectedMonth === currentMonth &&
                day < currentDate
            ) return;

            const selected = new Date(currentYear, selectedMonth, day);

            const formattedDate = `${String(day).padStart(2, '0')}-${String(selectedMonth + 1).padStart(2, '0')}-${currentYear}`;
            setSelectedDate(selected);       // ui state
            onChange(formattedDate);       
            // console.log(formattedDate);
            scrollToContactInformation();

            scrollToContactInformation();
        };

        const getDaysInMonth = (year, month) => {
            return new Date(year, month + 1, 0).getDate();
        };

        const getFirstDayOfMonth = (year, month) => {
            return new Date(year, month, 1).getDay();
        };

        const renderCalendar = () => {
            const daysInMonth = getDaysInMonth(currentYear, selectedMonth);
            const firstDay = getFirstDayOfMonth(currentYear, selectedMonth);
            const days = [];

            // previous month's trailing days
            const prevMonthDays = getDaysInMonth(
                selectedMonth === 0 ? currentYear - 1 : currentYear,
                selectedMonth === 0 ? 11 : selectedMonth - 1
            );

            for (let i = firstDay - 1; i >= 0; i--) {
                days.push(
                    <div
                        key={`prev-${i}`}
                        className="text-center py-2"
                        style={{ color: '#999' }}
                    >
                        {prevMonthDays - i}
                    </div>
                );
            }

            // current month's days
            for (let day = 1; day <= daysInMonth; day++) {
                const isPast =
                    currentYear === currentYearToday &&
                    selectedMonth === currentMonth &&
                    day < currentDate;

                const isToday =
                    !selectedDate &&
                    currentYear === currentYearToday &&
                    selectedMonth === currentMonth &&
                    day === currentDate;


                const isSelected =
                    selectedDate &&
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === selectedMonth &&
                    selectedDate.getFullYear() === currentYear;

                days.push(
                    <div
                        key={`current-${day}`}
                        onClick={() => !isPast && handleDateClick(day)}
                        className="text-center py-2"
                        style={{
                            cursor: isPast ? 'not-allowed' : 'pointer',
                            color: isPast ? '#ccc' : '#000',
                            backgroundColor: isSelected
                                ? '#d87028'
                                : isToday
                                    ? '#d87028'
                                    : 'transparent',
                            color: isSelected || isToday ? '#fff' : isPast ? '#ccc' : '#000',
                            borderRadius: '4px',
                            fontWeight: isToday || isSelected ? 'bold' : 'normal',
                        }}
                    >
                        {day}
                    </div>
                );
            }

            // next month's leading days
            const totalCells = Math.ceil(days.length / 7) * 7;
            const remainingCells = totalCells - days.length;

            for (let day = 1; day <= remainingCells; day++) {
                days.push(
                    <div
                        key={`next-${day}`}
                        className="text-center py-2"
                        style={{ color: '#999' }}
                    >
                        {day}
                    </div>
                );
            }

            return days;
        };

        const isMonthDisabled = (monthIndex) => {
            return currentYear === currentYearToday && monthIndex < currentMonth;
        };

        const handleArrowClick = (direction) => {
            if (view === 'year') {
                // existing behavior
                handleYearChange(direction);
                return;
            }

            // month view logic
            let newMonth = selectedMonth + direction;
            let newYear = currentYear;

            if (newMonth > 11) {
                newMonth = 0;
                newYear += 1;
            }

            if (newMonth < 0) {
                newMonth = 11;
                newYear -= 1;
            }

            // prevent going before current month/year
            if (
                newYear < currentYearToday ||
                (newYear === currentYearToday && newMonth < currentMonth)
            ) {
                return;
            }

            setCurrentYear(newYear);
            setSelectedMonth(newMonth);
        };

        return (
            <section ref={ref} className="planning-safari-section py-lg-5 py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-capitalize">
                                4. When would you like to travel?
                            </h3>
                            <p>
                                Your travel dates help us understand wildlife movement, park conditions, crowd levels, and lodge availability to plan the best Tanzania safari.
                            </p>
                        </div>
                        <div className="col-12 d-flex justify-content-center mb-md-3 mb-2">
                            <div style={{ width: '320px' }}>

                                <div className="d-flex justify-content-center align-items-center mb-4">
                                    <button
                                        onClick={() => handleArrowClick(-1)}
                                        className="btn btn-link text-dark"
                                        style={{
                                            textDecoration: 'none',
                                            fontSize: '1.2rem',
                                            visibility:
                                                view === 'year'
                                                    ? currentYear > currentYearToday
                                                        ? 'visible'
                                                        : 'hidden'
                                                    : 'visible',
                                        }}
                                    >
                                        «
                                    </button>

                                    <h4 className="mx-4 mb-0" style={{ minWidth: '150px', textAlign: 'center', fontWeight: '600' }}>
                                        {view === 'year'
                                            ? currentYear
                                            : `${months[selectedMonth]} ${currentYear}`}
                                    </h4>

                                    <button
                                        onClick={() => handleArrowClick(1)}
                                        className="btn btn-link text-dark"
                                        style={{ textDecoration: 'none', fontSize: '1.2rem' }}
                                    >
                                        »
                                    </button>

                                </div>

                                {view === 'year' ? (
                                    <div
                                        className="d-grid"
                                        style={{
                                            gridTemplateColumns: 'repeat(4, 1fr)',
                                            gap: '12px',
                                        }}
                                    >

                                        {months.map((month, index) => (
                                            <div key={month}>

                                                <button
                                                    onClick={() => handleMonthClick(index)}
                                                    disabled={isMonthDisabled(index)}
                                                    className="btn py-3 w-100 month-button"

                                                    style={{
                                                        backgroundColor:
                                                            index === currentMonth && currentYear === currentYearToday
                                                                ? '#d87028'
                                                                : '#fff',
                                                        color:
                                                            index === currentMonth && currentYear === currentYearToday
                                                                ? '#fff'
                                                                : isMonthDisabled(index)
                                                                    ? '#ccc'
                                                                    : '#000',

                                                        border: '1px solid #dee2e6',
                                                        borderRadius: '6px',
                                                        fontSize: '0.95rem',
                                                        fontWeight: 500,
                                                        cursor: isMonthDisabled(index) ? 'not-allowed' : 'pointer',
                                                        opacity: isMonthDisabled(index) ? 0.5 : 1,
                                                    }}
                                                >
                                                    {month}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <div className="d-grid mb-3" style={{ gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
                                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                                                <div
                                                    key={day}
                                                    className="text-center fw-bold"
                                                    style={{ padding: '0.5rem', color: '#666' }}
                                                >
                                                    {day}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="d-grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
                                            {renderCalendar()}
                                        </div>
                                        <div className="mt-4 text-center">
                                            <button
                                                onClick={() => setView('year')}
                                                className="btn btn-theme mb-3"
                                            >
                                                Back to Months
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
)

export default PlanningSafari;