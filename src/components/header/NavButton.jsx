import { Link } from 'react-router-dom';

function NavButton({link, tabIndex, name, desktop, isActive, setActiveIndex, closeHamburger}) {
	return (
		<Link 
			to={link}
			tabIndex={tabIndex} 
			className={`nav_button ${desktop ? "button_desktop" : "button_mobile"}`}
			id={isActive? 'current_page_button' : ''}
			onClick={() => {
				setActiveIndex(tabIndex);
				if (closeHamburger) {
					closeHamburger();
				}
			}}
		>
			{name}
		</Link>
	)
}

export default NavButton;