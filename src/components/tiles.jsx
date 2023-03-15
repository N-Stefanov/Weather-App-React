const Tiles = ({ list }) => {
	return (
		<ul className="tiles">
			{list.map((tile) => {
				console.log(tile);
				const { main, weather } = tile;
				const { temp_max: max, temp_min: min } = main;
				const { description, icon } = weather[0];

				const iconUrl = ` https://openweathermap.org/img/wn/${icon}@2x.png`;
				const maxRound = Math.round(max);
				const minRound = Math.round(min);

				return (
					<li>
						<div className="tile">
							<h6>
								{minRound}deg / {maxRound}deg
							</h6>

							<img src={iconUrl} alt="" />

							<p>{description}</p>

							<p>Monday</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default Tiles;
