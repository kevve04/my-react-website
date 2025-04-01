import { Link } from 'react-router-dom';
import OpeningHours from '../components/OpeningHours.jsx';
import '../styles/components/footer.css'

function Footer() {
	return (
		<footer>
			<div className="footer_element">
				<h4>Öppetider</h4>
				<OpeningHours id={"footer_open"}/>
			</div>

			<div className="footer_element">
				<h4>Adress</h4>
				<p>Nynäsvägen 8</p>
				<p>136 47 Haninge</p>
			</div>

			<div className="footer_element">
				<h4>Beställning</h4>
				<p>Ring: 08-777 20 58</p>
				<a tabIndex="100" href="https://www.foodora.se/restaurant/e2be/vegabaren">Foodora</a>
				<a tabIndex="101" href="https://wolt.com/sv/swe/stockholm/restaurant/vegabaren-haninge">Wolt</a>
			</div>

			<div className="footer_element">
				<h4>Övrigt</h4>
				<a tabIndex="102" href="https://www.vegastadshotell.se">Vega Stadshotell</a>
				<Link to="/other" tabIndex="103">Uppgifts-sida</Link>
			</div>
		</footer>
	)
}

export default Footer;