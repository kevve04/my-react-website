import NavButton from './NavButton';

import { useState } from 'react';

import '../../styles/components/header/nav_mobile.css';

function NavMobile({activeIndex, setActiveIndex}) {
	const [opened, setOpenState] = useState(false);
	const [isOpening, setOpening] = useState(false);

	const reduceMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

	function openHamburger() {
		setOpenState(true);
		setOpening(true);

		// Prevent scrolling
		document.body.style.position = "fixed";
		document.body.style.top = "0px";
	}

	function closeHamburger() {
		setOpening(false);

		// Enable scrolling
		document.body.style.position = "";
		document.body.style.top = "";

		// Only have a timeout if the animation plays
		if (reduceMotion) {
			setOpenState(false);
	
		} else {
			setTimeout(() => {
				setOpenState(false);

			}, 600);
		}
	}

	return (
		<>
			<div id="ham_buttons">
				{opened? (
					<button 
						tabIndex="1" 
						className="hamburger_button"
						// className={`hamburger_button ${isOpening ? "ham_button_show" : "ham_button_hide"}`} 
						id="close_hamburger" 
						aria-label='Stäng'
						onClick={() => closeHamburger()}
					>
						<hr className="ham_line" style={{rotate: 45+'deg'}}/>
						<hr className="ham_line" style={{rotate: -45+'deg', marginTop: -10+'px'}}/>
					</button>
				): (
					<button 
						tabIndex="1"
						className="hamburger_button"
						// className={`hamburger_button ${isOpening ? "ham_button_hide" : "ham_button_show"}`} 
						id="open_hamburger" 
						aria-label='Öppna'
						onClick={() => openHamburger()}
					>
						<hr className="ham_line"/>
						<hr className="ham_line"/>
						<hr className="ham_line"/>
					</button>
				)}
			</div>

			{opened? (
				<div id="nav_mobile" className={isOpening ? "ham_menu_open" : "ham_menu_closed"} >
					<ul>
						<li>
							<NavButton 
								link={"/menu"} 
								tabIndex={"2"} 
								name={"Meny"} 
								desktop={false}
								isActive={activeIndex == 2} 
								setActiveIndex={setActiveIndex}
							/>
						</li>
						<li>
							<NavButton 
								link={"/events"} 
								tabIndex={"3"} 
								name={"Evenemang"} 
								desktop={false}
								isActive={activeIndex == 3} 
								setActiveIndex={setActiveIndex}
							/>
						</li>
						<li>
							<NavButton 
								link={"/about"} 
								tabIndex={"4"} 
								name={"Om oss"} 
								desktop={false}
								isActive={activeIndex == 4} 
								setActiveIndex={setActiveIndex}
							/>
						</li>
						<li>
							<NavButton 
								link={"/contact"} 
								tabIndex={"5"} 
								name={"Kontakt"} 
								desktop={false}
								isActive={activeIndex == 5} 
								setActiveIndex={setActiveIndex}
							/>
						</li>
					</ul>
				</div>
			): (
				null
			)}
		</>
	)
}

export default NavMobile;