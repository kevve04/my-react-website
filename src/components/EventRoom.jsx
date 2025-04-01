import '../styles/components/event_room.css'

function EventRoom() {
	return (
		<div className="event_section" id="event_room">
			<h2>Föreningslokal!</h2>
			<h4>Saknar du en lokal att träffas i?</h4>
			<h4>Inte nu - Vegabaren har en lokal som du kan boka!</h4>

			<p id="room_info">
				Vegabarens goda kök ger er allt som ni behöver i form av mat, kaffe, hamburgare, husmanskost mm.!
			</p>

			<p id="room_feature_opening">
				Bokas föreningslokalen medföljer:
			</p>

			<div id="room_features">
				<ul>
					<li className="room_feature">Plats för cirka 35 + 15 personer</li>
					<li className="room_feature">Internetanslutning</li>
					<li className="room_feature">Blädderblock</li>
					<li className="room_feature">Overheadprojektor</li>
					<li className="room_feature">Fullständiga rättigheter</li>
				</ul>
			</div>
		</div>
	)
}

export default EventRoom;