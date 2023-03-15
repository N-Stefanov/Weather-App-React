import wallpaper from "../assets/images/weather-wallpapers.jpg";

const Card = ({ data }) => {
	const { country, name } = data.city;
	const { dt_txt, main, weather } = data.list[0];
	const { temp } = main;
	const { description } = weather[0];

	const tempRound = Math.round(temp);

	return (
		<div className="card">
			<div className="card__image">
				<img src={wallpaper} alt="" />
			</div>

			<div className="card__content">
				<h3>
					{name} , {country}
				</h3>

				<h2>{tempRound} deg</h2>

				<div className="span">{description}</div>
			</div>
		</div>
	);
};

export default Card;
