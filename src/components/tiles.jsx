const Tiles = ({ list }) => {
	const weekDays = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	const dayInAWeek = new Date().getDay();

	const days = weekDays
		.slice(dayInAWeek, weekDays.length)
		.concat(weekDays.slice(0, dayInAWeek))
		.slice(0, 5);

	return (
		<ul className="tiles">
			{list.map((tile, index) => {
				const { main, weather } = tile;
				const { temp_max: max, temp_min: min } = main;
				const { description, icon } = weather[0];

				const iconUrl = ` https://openweathermap.org/img/wn/${icon}@2x.png`;
				const maxRound = Math.round(max);
				const minRound = Math.round(min);

				return (
					<li key={index}>
						<div className="tile">
							<h6>
								{minRound}&#176; / {maxRound}&#176;
							</h6>

							<img src={iconUrl} alt="" />

							<p>{description}</p>

							<p>{days[index]}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default Tiles;
