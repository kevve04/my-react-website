import { useEffect } from 'react';
import EventRoom from '../components/EventRoom';
import Music from '../components/Music';

import '../styles/pages/events.css'

function Events() {
	useEffect(() => {
		document.title = "Vegabaren - Evenemang"
	});

	return (
		<main>
			<EventRoom/>
			
			<Music/>
		</main>
	)
}

export default Events;