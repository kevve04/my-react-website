
function Sausage() {
	return (
		<div className="food_category" id="sausage">
			<h2 className="category_title">Korvmenyer</h2>
			<table>
				<tbody>
					<tr className="food_item">
						<th className="food_name" scope="row" colSpan="2">Korvmenytallrik
							<p className="food_info">Välj mellan pommes, mos, ris eller stektpotatis som tillbehör. Inkluderar 40cl dryck.</p>

							<table>
								<tbody>
									<tr>
										<th className="food_option" scope="row">1 Kokt/grillad</th>
										<td>88:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Stekt</th>
										<td>98:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Kabanoss</th>
										<td>98:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Chorizo</th>
										<td>98:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Bratwurst</th>
										<td>98:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Lammkorv</th>
										<td>98:-</td>
									</tr>
								</tbody>
							</table>
						</th>
					</tr>

					<tr className="food_item">
						<th className="food_name" scope="row" colSpan="2">Kokt med bröd
							<table>
								<tbody>
									<tr>
										<th className="food_option" scope="row">Kokt/grillad</th>
										<td>20:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Stekt korv</th>
										<td>40:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Kabanoss</th>
										<td>40:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Chorizo</th>
										<td>40:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Bratwurst</th>
										<td>40:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Lammkorv</th>
										<td>40:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Special (med en klick mos)</th>
										<td>60:-</td>
									</tr>
								</tbody>
							</table>
						</th>
					</tr>

					<tr className="food_item">
						<th className="food_name" scope="row" colSpan="2">Hotdogs
							<p className="food_info">French hotdog bröd, korv och valfri sås</p>

							<table>
								<tbody>
									<tr>
										<th className="food_option" scope="row">Kokt/grillad</th>
										<td>20:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Stekt korv</th>
										<td>40:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Kabanoss</th>
										<td>40:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Chorizo</th>
										<td>40:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Bratwurst</th>
										<td>40:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Lammkorv</th>
										<td>40:-</td>
									</tr>
								</tbody>
							</table>
						</th>
					</tr>

					<tr className="food_item">
						<th className="food_name" scope="row">Vegabarens korvburgare
							<p className="food_info">Bröd, bearnaisesås och råkostsallad</p>
						</th>
						<td>36:-</td>
					</tr>
					
					<tr className="food_item">
						<th className="food_name" scope="row" colSpan="2">Tillbehör
							<table>
								<tbody>
									<tr>
										<th className="food_option" scope="row">Räksallad</th>
										<td className="price">20:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Bostongurka</th>
										<td className="price">10:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Gurkmajonäs</th>
										<td className="price">10:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Bearnaisesås</th>
										<td className="price">10:-</td>
									</tr>
									<tr>
										<th className="food_option" scope="row">Fårost</th>
										<td className="price">20:-</td>
									</tr>
								</tbody>
							</table>
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Sausage;