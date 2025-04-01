import { Link } from 'react-router-dom';
import { useState } from 'react';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

import logo from '../../assets/logo_pink.png'

import '../../styles/components/header/header.css'

function Header() {
	const [activeIndex, setActiveIndex] = useState(0);

	// Boolean to store if the window is for desktop via width
	let desktop = window.innerWidth > 500;

	return (
		<header>
			<Link to="/" tabIndex="1" onClick={() => setActiveIndex(1)}>
				<img src={logo} alt="Vegabarens logotyp" id="main_logo"/>
			</Link>

			{desktop? (
				<NavDesktop activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
			): (
				<NavMobile activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
			)}
		</header>
	)
}

export default Header;

