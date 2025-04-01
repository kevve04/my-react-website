import Calendar from './Calendar';

import '../styles/components/music.css'

function Music() {
	return (
		<div className="event_section" id="music">
			<div id="music_intro">
				<h2>Musikplats Vegabaren!</h2>
				<p>Varje Lördag och Söndag har vi olika former av shower, musikkvällar, dj-spelningar stand up med mera.</p>
			</div>

			<div id="music_booking">
				<h3>Bokning!</h3>
				<p>På Vegabaren finns det möjlighet att uppträda på våran scen.</p>
				<p>Är du intresserad? Kontakta oss via antingen mail via Cenkan.polat@gmail.com eller telefon 070-721 14 55</p>
			</div>

			<div id="music_calendar">
				<h3>Kalender!</h3>
				<p>Nedan finns kommande evenemang. Spara gärna i din kalender så att du inte missar dem!</p>

				<Calendar/>
			</div>


			<div id="music_extra">
				<p>Nya spännande evenemang är planerade för 2025! För mer info kontakta carlo@vegabaren.se eller ring 070 798 24 48</p>
			</div>
		</div>
	)
}

export default Music;