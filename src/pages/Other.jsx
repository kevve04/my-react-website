import { useEffect } from 'react'
import audio from '../assets/short_audio.mp3'
import clownfishVid from '../assets/clownfish.mp4'
import '../styles/pages/other.css'

function Other() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})

		document.title = "Vegabaren - Övrigt"
	});

	return (
		<main id="other_main">
			<h1>Övrigt</h1>
			<p>
				Denna sida är för de delar som huvudsakligen är för de uppgifter som utförs inom kursen hemsidan görs inom. Innehållet
				har ingen större koppling till resten av den här webbplatsen.
			</p>

			<div className="other_section">
				<h2>Video</h2>
				<figure>
					<figcaption>En video som visar en clownfisk som simmar runt vid en havsanemon.</figcaption>
					<video controls muted width="500" aria-label="en video på en clownfisk">
						<source src={clownfishVid} type="video/mp4"/>
					</video>
				</figure>
			</div>

			<div className="other_section">
				<h2>Audio / Ljud</h2>
				<figure>
					<figcaption>Kort låt gjord med piano, gitarr och bas inom GarageBand</figcaption>
					<audio controls src={audio} aria-label="en kort låt"/>
				</figure>
			</div>

			<div className="other_section">
				<h2>Listor</h2>
				<p>Nedan finns två listor (ej numrerad och numrerad). Listor används på andra delar av hemsidan, men görs extra tydlig här.</p>
				
				<div className="other_list">
					<p>Lista över svenska städer:</p>
					<ul>
						<li>Stockholm</li>
						<li>Umeå</li>
						<li>Göteborg</li>
						<li>Falköping</li>
						<li>Malmö</li>
					</ul>
				</div>

				<div className="other_list">
					<p>Länder med flest invånare:</p>
					<ol>
						<li>Indien</li>
						<li>Kina</li>
						<li>Förenta Staterna (USA)</li>
						<li>Indonesien</li>
						<li>Pakistan</li>
					</ol>
				</div>
			</div>

			<div className="other_section">
				<h2>Tabell</h2>
				<p>Tabeller har använts på andra delar av sidan, som exempelvis för öppetiderna. Däremot görs det tydligare här.</p>

				<table id="other_table">
					<thead>
						<tr>
							<th colSpan="4" id="other_table_title">Information för vissa ämnen inom det periodiska systemet</th>
						</tr>
						<tr>
							<th scope="col">Ämne</th>
							<th scope="col">Kemiskt tecken</th>
							<th scope="col">Atomnummer</th>
							<th scope="col">Atomvikt</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Väte</th>
							<td>H</td>						
							<td>1</td>						
							<td>1,008</td>						
						</tr>
						<tr>
							<th scope="row">Kol</th>
							<td>C</td>						
							<td>6</td>						
							<td>12,011</td>						
						</tr>
						<tr>
							<th scope="row">Kväve</th>
							<td>N</td>						
							<td>7</td>						
							<td>14,007</td>						
						</tr>
						<tr>
							<th scope="row">Syre</th>
							<td>O</td>						
							<td>8</td>						
							<td>15,999</td>						
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	)
}

export default Other;