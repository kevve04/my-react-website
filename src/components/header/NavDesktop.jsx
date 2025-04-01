import NavButton from "./NavButton";

import '../../styles/components/header/nav_desktop.css'

function NavDesktop({activeIndex, setActiveIndex}) {
	return (
		<div id="navigation">
			<NavButton 
				link={"/menu"}
				tabIndex={"2"}
				name={"Meny"}
				desktop={true}
				isActive={activeIndex == 2}
				setActiveIndex={setActiveIndex}
			/>
			<NavButton 
				link={"/events"}
				tabIndex={"3"}
				name={"Evenemang"}
				desktop={true}
				isActive={activeIndex == 3}
				setActiveIndex={setActiveIndex}
			/>
			<NavButton 
				link={"/about"} 
				tabIndex={"4"} 
				name={"Om oss"} 
				desktop={true} 
				isActive={activeIndex == 4} 
				setActiveIndex={setActiveIndex}
			/>
			<NavButton 
				link={"/contact"} 
				tabIndex={"5"} 
				name={"Kontakt"} 
				desktop={true} 
				isActive={activeIndex == 5} 
				setActiveIndex={setActiveIndex}
			/>
		</div>
	)
}

export default NavDesktop;