import { useState } from "react";
import { Link } from "react-router-dom";

import '../styles/components/suppliers.css'

function Suppliers() {
	const [show, setVisibility] = useState(false);
	const [opening, setOpenState] = useState(false);

	function openPopUp() {		
		setVisibility(true);
		setOpenState(true);
	}

	function closePopUp() {
		setOpenState(false);

		setTimeout(() => {
			setVisibility(false);
		}, 300);
	}

	return (
		<>
			{show? (
				<div>
					<div id="supplier_list" className={opening? "list_open" : "list_closed"}>
						<h2>Våra Leverantörer</h2>
						<p>Kommer snart...</p>
						<button id="close" tabIndex={"1"} aria-label="Stäng" onClick={() => closePopUp()}>
							<hr className="close_line" style={{rotate: 45+'deg'}}/>
							<hr className="close_line" style={{rotate: -45+'deg', marginTop: -10+'px'}}/>
						</button>
					</div>

					<div id="overlay" className={opening? "overlay_open" : "overlay_closed"} onClick={() => closePopUp()}/>
				</div>
				) : (
					<div/> // Empty box as a way to hide the pop-up
				)
			}		
		
			<Link id="open_link" tabIndex={"10"} onClick={() => openPopUp()}>Klicka här för en lista över våra leverantörer.</Link>
		</>
	)
}

export default Suppliers;