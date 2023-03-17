const Card = ({ data }) => {
	const { country, name } = data.city;
	const { main, weather, wind } = data.list[0];
	const { temp, humidity, pressure, feels_like } = main;
	const { description, icon } = weather[0];

	const tempRound = Math.round(temp);
	const iconUrl = ` https://openweathermap.org/img/wn/${icon}@2x.png`;

	return (
		<div className="card">
			<header className="card__head">
				<h3>
					{name} , {country}
				</h3>

				<h5>{description}</h5>
			</header>

			<div className="card__icon">
				<img src={iconUrl} alt="" />
			</div>

			<div className="card__body">
				<span>{tempRound}&#176;C</span>

				<ul className="list-details">
					<li>
						Feels like: <small>{feels_like}</small>
					</li>

					<li>
						Wind: <small>{wind.speed}</small>
					</li>

					<li>
						Humidity: <small>{humidity}</small>
					</li>

					<li>
						Pressure: <small>{pressure}</small>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Card;
