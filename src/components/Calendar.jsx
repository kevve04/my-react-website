import '../styles/components/calendar.css'

function Calendar() {
	return (
		<div id="calendar">
			<CalendarEntry date={"27 februari 2025"} time={"17-22"} event={"Chuck Berry Main"} />
			<CalendarEntry date={"27 mars 2025"} time={"17-22"} event={"New Redwine Band"} />
			<CalendarEntry date={"24 april 2025"} time={"17-22"} event={"Looking Back Band"} />
		</div>
	)

	function CalendarEntry({date, time, event}) {
		return (
			<div className="calendar_entry">
				<p className="calendar_date"><b>{date}</b> kl {time}</p>
				<p className="calendar_title">{event}</p>
			</div>
		)
	}
}

export default Calendar;