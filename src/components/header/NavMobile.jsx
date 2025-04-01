import NavButton from './NavButton';

import { useState } from 'react';

import '../../styles/components/header/nav_mobile.css';
import HamburgerButton from './HamburgerButton';

function NavMobile({activeIndex, setActiveIndex}) {
	const [opened, setOpenState] = useState(false);
	const [isOpening, setOpening] = useState(false);

	const reduceMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
	const lightMode = window.matchMedia(`(prefers-color-scheme: light)`).matches === true;

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
				{/* Open Button */}
				<HamburgerButton 
					forOpening={true} 
					isShowing={isOpening}
					onClickFunction={openHamburger} 
				/>

				{/* Open Button */}
				<HamburgerButton 
					forOpening={false} 
					isShowing={!isOpening}
					onClickFunction={closeHamburger} 
				/>
			</div>

			{opened? (
				<div id="nav_mobile" className={isOpening ? "ham_menu_open" : "ham_menu_closed"} style={lightMode? {backgroundColor: "hsl(176, 100%, 94%)"} : {backgroundColor: "hsl(177, 39%, 46%)"}}>
					<ul>
						<li>
							<NavButton 
								link={"/menu"} 
								tabIndex={"2"} 
								name={"Meny"} 
								desktop={false}
								isActive={activeIndex == 2} 
								setActiveIndex={setActiveIndex}
								closeHamburger={closeHamburger}
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
								closeHamburger={closeHamburger}
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
								closeHamburger={closeHamburger}
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
								closeHamburger={closeHamburger}
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