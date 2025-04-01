
function Grill() {
	return (
		<div className="food_category" id="grill">
			<h2 className="category_title">Grillrätter</h2>
			<h4>Till alla grillrätter kan man välja pommes, mos, ris eller stektpotatis som tillbehör. Inkluderar 40cl dryck också</h4>

			<table>
				<tbody>
					<tr className="food_item">
						<th className="food_name" scope="row">Grillad kyckling
							<p className="food_info">Med sallad, bearnaisesås eller kryddsmör</p>
						</th>
						<td><b>130:-</b></td>
					</tr>

					<tr className="food_item">
						<th className="food_name" scope="row">Grillspett
							<p className="food_info">En grillspett av fläskfile med sallad, bearnaisesås eller kryddsmör</p>
						</th>
						<td>160:-</td>
					</tr>

					<tr className="food_item">
						<th className="food_name" scope="row">Revbensspjäll
							<p className="food_info">Fläskkött med sallad, bearnaisesås eller kryddsmör</p>
						</th>
						<td>150:-</td>
					</tr>


					<tr className="food_item">
						<th className="food_name" scope="row">Lövbiff
							<p className="food_info">Med sallad, bearnaisesås eller kryddsmör</p>
						</th>
						<td>125:-</td>
					</tr>

					<tr className="food_item">
						<th className="food_name" scope="row">Entrecote
							<p className="food_info">Med sallad, bearnaisesås eller kryddsmör</p>
						</th>
						<td>180:-</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Grill;