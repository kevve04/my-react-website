
function HamburgerButton({forOpening, isShowing, onClickFunction}) {

	return (
		<button 
			tabIndex="1"
			className={`hamburger_button ${isShowing ? "ham_button_hide" : "ham_button_show"}`} 
			aria-label= {forOpening? 'Öppna' : 'Stäng'}
			onClick={() => onClickFunction()}
		>
			{forOpening? (
				<>
					<hr className="ham_line"/>
					<hr className="ham_line"/>
					<hr className="ham_line"/>
				</>
			) : (
				<>
					<hr className="ham_line" style={{rotate: 45+'deg'}}/>
					<hr className="ham_line" style={{rotate: -45+'deg', marginTop: -10+'px'}}/>
				</>
			)}
		</button>
	)
}

export default HamburgerButton;