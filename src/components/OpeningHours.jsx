function OpeningHours({className, id}) {
	return (
		<table className={className} id={id}>
			<tbody>
				<tr>
					<th className="table_date" scope="row">Mån-Tors:</th>
					<td>09:00 - 03:00</td>
				</tr>
				<tr>
					<th className="table_date" scope="row">Fre-Lör:</th>
					<td>09:00 - 05:00</td>
				</tr>
				<tr>
					<th className="table_date" scope="row">Sön:</th>
					<td>09:00 - 03:00</td>
				</tr>
			</tbody>
		</table>
	)	
}

export default OpeningHours;