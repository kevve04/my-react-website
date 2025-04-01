import { useEffect } from 'react'
import OpeningHours from '../components/OpeningHours.jsx'

import burger from '../assets/Hamburgare.jpg'
import restaurant from '../assets/vegabaren.png'
import bread from '../assets/Tunnbrod.jpg'

import '../styles/pages/home.css'

function Home() {
	useEffect(() => {
		document.title = "Vegabaren"
	});

	return (
		<main id="index_main">
			<div className="text_box" id="welcome">
				<h2 className="text_box_text">Välkommen!</h2>
				<h3 className="text_box_text">
					Hos oss finns god mat med en känsla av nostalgi!
				</h3>
				<p className="text_box_text">
					Vi har tillagat hamburgare sedan 1957, genom vad som då kallades "platta köttbullar". Är du intresserad 
					av mer av vår historia? Klicka in till <a tabIndex="6" href="/about.html">Om oss</a>
				</p>
				<p className="text_box_text">
					Vill du beställa mat från oss? Ring oss på 08-777 20 58. Vi finns även på <a tabIndex="7" href="https://www.foodora.se/restaurant/e2be/vegabaren">Foodora</a> och <a tabIndex="8" href="https://wolt.com/sv/swe/stockholm/restaurant/vegabaren-haninge">Wolt</a>.
				</p>
			</div>

			<div className="image_box" id="welcome_photo">
				<img src={restaurant} id="photo_1" alt="Bild på utsidan Vegabaren"/>
			</div>
			
			<div className="text_box" id="opening_hours">
				<h2 className="text_box_text">Öppetider!</h2>
				<OpeningHours className={"text_box_text"}/>
			</div>

			<div className="image_box" id="bread">
				<img src={bread} id="photo_2" alt="Bild på en tunnbrödsrulle"/>
			</div>
			
			<div className="text_box" id="find_us">
				<h2 className="text_box_text">Hitta till oss!</h2>
				<p className="text_box_text">
					Vi finns på Nynäsvägen 8 i Haninge, Stockholm.
				</p>
				<p className="text_box_text">
					Det gör att vi är nära Handens handelsområde och ligger intill väg 73 som leder mot bland annat Haninges skärgård, Gotland och Polen.
				</p>
				<p className="text_box_text">
					Använd den interaktiva kartan för mer information!
				</p>
			</div>
			
			<div className="image_box" id="map">
				<iframe id="photo_4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2043.9389015785434!2d18.144071977096598!3d59.18359947454408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7b860f8e9c89%3A0x3705a340decd11ad!2sVegabaren!5e0!3m2!1ssv!2sse!4v1739015237837!5m2!1ssv!2sse" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>

			<div className="image_box" id="hamburger">
				<img src={burger} id="photo_3" alt="Bild på en hamburgare"/>
			</div>
		</main>
	)
}

export default Home;

