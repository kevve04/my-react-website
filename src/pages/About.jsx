import { useEffect } from 'react'
import Suppliers from '../components/Suppliers'

import pricePicture from '../assets/sveriges_basta.jpg'
import owners from '../assets/Erik_Carlo126.jpg'

import '../styles/pages/about.css'

function About() {
	useEffect(() => {
		document.title = "Vegabaren - Om oss"
	});

	return (
		<main id="about_main">
			<nav id="about_sidebar">
				<ul>
					<li><a tabIndex="6" href="#about">Om Vegabaren</a></li>
					<li><a tabIndex="7" href="#history">Vår Historia</a></li>
					<li><a tabIndex="8" href="#our_motto">Våra Ledord & Kvalitet</a></li>
					<li><a tabIndex="9" href="#membership">Förmåner & Medlemskort</a></li>
				</ul>
			</nav>
		
			<div className="about_section" id="about">
				<hr className="line"/>
				
				<h2>Om Vegabaren</h2>
				<p>
					Hos oss på Vegabaren finns en trivsam atmosfär fylld med nostalgi och med god mat. Enligt oss själva är vi
					även strategist belagda genom vår närhet till både Handens handelsområde och väg 73.
				</p>
				
				<img src={pricePicture} alt="Foto på Vegabarens anställda"/>

				<p>
					Vegabaren i Haninge söder om Stockholm röstades fram av Expressen som "Sveriges bästa korvmoj". Här ovanför 
					ser du några av oss som gärna serverar dig när du besöker oss på "Sveriges bästa korvmoj".
					Inte undra på att Erdal Kurt, Carlo Taccola, Ali Polat, Nevzat Polat, Hasan Celen, Ahmet Polat och (sittande)
					Kadir Corum och Hüseyin Samanci jublar.
				</p>
			</div>

			<div className="about_section" id="history">
				<hr className="line"/>

				<h2>Vår Historia</h2>
				<p>
					Omkring år 1964 serverades Sveriges första Hamburgare, "en platt köttbulle" - Erik Engströms egna ord.
					Två mil söder om Stockholms centrum ligger Vegabaren - Sveriges bästa hamburgerbar!
					På 1950-talet fick man inte servera Hamburgare. Hamburgare var inte snabbmat, som snabbmat räknades bara korv med 
					bröd, pölsa och köttbullar. Erik stod på sig och fick Sveriges myndigheter att ändra sig - så det är bara att buga sig 
					alla ni andra snabbmatskedjor - <b>Vegabaren var först!!!</b>
				</p>

				<img src={owners} alt="Foto på Erik Engström och Carlo Taccola"/>
				<p className="img_text">Erik Engström och Carlo Taccola</p>

				<p>
					Carlo Taccola började som diskare på Vegabaren, 1964. Så småningom arrenderade han Vegabaren för att senare tillsammans 
					med Ali Polat köpa den. Kompanjonerna Carlo och Ali har tillsammans vidareutvecklat Vegabaren genom att bygga Vega 
					Stadshotell samt skapa en samlingsplats för allehanda folkfester, musik och dans. Där har bl.a. popbandet The Animals 
					spelat live ”The House of the Rising Sun”. Under flera år anordnades även bilträffen ”Grand Prix Raggarbil” och MC-träffen 
					”Easy Rider Festival”.
				</p>

				<h3 className="history_divider"><span>"Sveriges Bästa Korvmoj"</span></h3>
				<p>
					"Signore Korv-moj", italienaren Carlo Taccola, 68, har tårar i ögonen när han får diplomet. Expressens läsare har 
					röstat fram Vegabaren i Haninge till "Sveriges bästa korvmoj". - Tack! Vi har slitit hårt i många år för att hamna 
					i första klass, säger han. Gnistan i Carlos ögon är tänd och plötsligt släpper han lös sin ohämmade italienska glädje: 
					- Jag måste få krama dig, och nöjer sig inte med en kram utan smackar på båda kinderna och ropar "uno, due..." Nu har 
					Carlo Taccola och kompanjonen Ali Polat fått lön för allt slit. Carlo lämnade som yngling byn i Toscana för att hitta jobb 
					i Norden. Drömde om att bli sjöman i Norge, men upptäckte att han blev sjösjuk. - När jag var 22 år fick jag börja som 
					diskare på Vegabaren i Haninge. Då var det så kallt i den lilla kiosken att kapsylerna på läskflaskorna small av som kanonkulor...
				</p>
				
				<h3 className="history_divider"><span>Historiska Rötter</span></h3>
				<p>
					Tvärs över vägen låg på 1600-talet Söderby krog och Gästgiveri. Vegabarens moderna vägrestaurang är en historisk länk 
					i matkulturen sedan 1600-talet och gästgiveriet lever vidare som Vega Stadshotell.
				</p>
				<p>
					Intill ligger den gamla mjölnarbostaden, ett reveterat vitstruket tvåvåningshus. Huset byggdes på 1600-talet under 
					drottning Kristinas tid. De halvmeter tjocka väggarna består av stampad lera och halm. I bostaden, som från 1911 ägdes 
					av mjölnare Ragnar Grip låg även traktens telefonstation. Telefonstationen benämndes först Söderby och ändrades 1936 till 
					Handen. Telefonväxeln sköttes av Ragnars syster Vanja.
				</p>
				<p>
					På höjden bredvid mjölnarbostaden ligger ett ståtligt knuttimrat magasin, Söderby kvarns stora lada, numera en Antikhandel. 
					Det är panelat och rödstruket, troligen från första hälften av 1800-talet. Ett litet uthus finns strax bredvid. På planen 
					framför magasinet står en välvuxen gran. Straxt intill kan man fortfarande se grunden av den vattendrivna kvarnen som har 
					brunnit ner.
				</p>
				<p>
					För att dryga ut inkomsterna när telefonväxeln lades ner, anlade Ragnar en minigolfbana på västra sidan av Nynäsvägen 
					och lät den väderkvarn som fortfarande står bakom Vegabaren symbolisera kvarnen. Han började sälja glass och korv i en kiosk, 
					en rörelse som Erik Engström i slutet på 1950-talet tog över och utvecklade till Vegabaren.
				</p>
				<p>
					På 1950-talet fick man endast servera snabbmat från kiosker. Som snabbmat räknades bara korv med bröd, pölsa och 
					köttbullar. Erik pratade med Livsmedelsverket och undrade vad det var för skillnad mellan en köttbulle och en “platt köttbulle”.
				</p>
				<p>
					Sveriges myndigheter ändrade sig - så det är bara att buga, alla ni andra snabbmatskedjor - <b>Vegabaren var först!!!</b>
				</p>
				<p>
					Vi vill därför även hjärtligt tacka alla våra gamla, nya och blivande kunder för stöd och lojalitet. Tillsammans vi har 
					byggt Haninges Historia!
				</p>
			</div>

			<div className="about_section" id="our_motto">
				<hr className="line"/>

				<h2>Våra Ledord & Kvalitet</h2>
				<p style={{marginBottom: "10px"}}>
					Vi är mycket noggranna vid vårt val av leverantörer.
					Därför samarbetar vi enbart med utvalda, seriosa leverantörer som vi känner och har fullt förtroende 
					för och som i alla avseenden lever upp till våra högt ställda kvalitetskrav.
				</p>
				<p>
					<Suppliers/>
				</p>
				<p>
					God mat för alla! Vi har en lång tradition av matglädje och i över 60 år har vi lagad god fast-food mat.
				</p>
				<p>
					<b>Våra ledord</b> är matglädje, kvalitet, service och renlighet. Via <a tabIndex="11" href="https://www.green-heart.se">Green Heart</a> 
					- med omtanke om gästens hälsa och välmående - tänker vi på ditt hjärta när vi tillagar mat och går på den "gröna linjen". 
					Minst 25% av din måltid består därför av fräscha grönsaker.
				</p>
			</div>
			
			<div className="about_section" id="membership">
				<hr className="line"/>

				<h2>Förmåner & Medlemskort</h2>
				<p>
					<b>BlI MEDLEM</b> <br/> 
					i Vegabaren för endast 30 kr, kortet ger Dig alltid:
					5% RABATT, som dras direkt i kassan vid varje inköp.
				</p>
				<p>
					<b>VINSTCHANS</b> <br/>
					Numret på ditt Förmåns & Medlemskort fungerar som lottsedel. Vid flera tillfällen per år lottas fina vinster ut, som Du har 
					möjlighet att vinna.
				</p>
				<p>
					<b>SAMHÄLLS-SPECIAL</b> <br/>
					Medlemmar i samhällstjänst (Polis-Brandkår-Hemtjänst-Väktare-Taxi-Bussförare...) under yrkesutövning mellan kl. 22.00 - 05.00 
					får 10% rabatt.
				</p>
			</div>
		</main>
	)
}

export default About;
