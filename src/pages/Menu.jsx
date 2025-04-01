import { useEffect } from 'react';

import WeeksLunch from '../components/food_categories/WeeksLunch';
import Grill from '../components/food_categories/Grill';
import Sausage from '../components/food_categories/Sausage';

import '../styles/pages/menu.css'

function Menu() {
	useEffect(() => {
		document.title = "Vegabaren - Meny"
	});
	
	return (
		<main id="menu_main">
			<h1 id="menu_title">Maten hos Vegabaren</h1>

			<nav id="menu_sidebar">
				<ul>
					<li><a tabIndex="6" href="#weeks_lunch">Veckans Lunch</a></li>
					<li><a tabIndex="7" href="#grill">Grillrätter</a></li>
					<li><a tabIndex="8" href="#sausage">Korvmenyer</a></li>
					<li><a tabIndex="9" href="#thinbread">Tunnbrödsrullar</a></li>
					<li><a tabIndex="10" href="#special_burgers">Special Hamburgare</a></li>
					<li><a tabIndex="11" href="#burgers">Hamburgare</a></li>
					<li><a tabIndex="12" href="#kebab">Kebab</a></li>
					<li><a tabIndex="13" href="#salad">Sallader</a></li>
					<li><a tabIndex="14" href="#other">Övriga Rätter</a></li>
					<li><a tabIndex="15" href="#sandwich_snacks">Mackor och Snacks</a></li>
					<li><a tabIndex="16" href="#vegetarian">Vegetariskt</a></li>
					<li><a tabIndex="17" href="#child">Barnmeny</a></li>
				</ul>
			</nav>

			<div id="menu">
				{/* <!-- Veckans lunch --> */}
				<WeeksLunch/>
				
	
				{/* <!-- Grillrätter --> */}
				<Grill/>
				
				{/* <!-- Korv --> */}
				<Sausage/>
	
				{/* <!-- Tunnbröd --> */}
				<div className="food_category" id="thinbread">
					<h2 className="category_title">Tunnbrödsrullar</h2>
					<h4>Kommer snart...</h4>
				</div>
				
				{/* <!-- Special hamburgare --> */}
				<div className="food_category" id="special_burgers">
					<h2 className="category_title">Special Hamburgare</h2>
					<h4>Kommer snart...</h4>
				</div>
				
				{/* <!-- Hamburgare --> */}
				<div className="food_category" id="burgers">
					<h2 className="category_title">Hamburgare</h2>
					<h4>Kommer snart...</h4>
				</div>
				
				{/* <!-- Kebab --> */}
				<div className="food_category" id="kebab">
					<h2 className="category_title">Kebab</h2>
					<h4>Kommer snart...</h4>
				</div>
				
				{/* <!-- Sallader --> */}
				<div className="food_category" id="salad">
					<h2 className="category_title">Sallader</h2>
					<h4>Kommer snart...</h4>
				</div>
				
				{/* <!-- Övrigt --> */}
				<div className="food_category" id="other">
					<h2 className="category_title">Övriga Rätter</h2>
					<h4>Kommer snart...</h4>
				</div>
				
				{/* <!-- Mackor och Snacks --> */}
				<div className="food_category" id="sandwich_snacks">
					<h2 className="category_title">Mackor och Snacks</h2>
					<h4>Kommer snart...</h4>
				</div>
				
				{/* <!-- Vegetariskt --> */}
				<div className="food_category" id="vegetarian">
					<h2 className="category_title">Vegetariskt</h2>
					<h4>Kommer snart...</h4>
				</div>
				
				{/* <!-- Barnmeny --> */}
				<div className="food_category" id="child">
					<h2 className="category_title">Barnmeny</h2>
					<h4>Kommer snart...</h4>
				</div>
			</div>
		</main>
	)
}

export default Menu;