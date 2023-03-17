const ModalIndo = ({ item }) => {
	const {
		main: mainHourly,
		dt_txt: dateHourly,
		weather: weatherHourly,
	} = item;
	const { temp_max: maxHourly, temp_min: minHourly } = mainHourly;
	const { description: descriptionHourly, icon: iconHourly } =
		weatherHourly[0];

	const iconUrlHourly = ` https://openweathermap.org/img/wn/${iconHourly}@2x.png`;

	return (
		<ul>
			<li>{dateHourly}</li>

			<li>{minHourly}</li>

			<li>{maxHourly}</li>

			<li>{descriptionHourly}</li>

			<li>
				<img src={iconUrlHourly} alt="" />
			</li>
		</ul>
	);
};

export default ModalIndo;
