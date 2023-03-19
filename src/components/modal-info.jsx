import wallpaper from "../assets/images/weather-wallpapers.jpg";

const ModalIndo = ({ listInfo, isVisible, handleShowModal }) => {
	const className = isVisible ? "modal-info is-visible" : "modal-info";

	return (
		<div className={className}>
			<div
				className="modal-info__background"
				onClick={() => handleShowModal()}
			>
				<img src={wallpaper} alt="" />
			</div>

			<div className="modal-info__content">
				{listInfo.map((item, index) => {
					const {
						main: mainHourly,
						dt_txt: dateHourly,
						weather: weatherHourly,
					} = item;
					const { temp_max: maxHourly, temp_min: minHourly } =
						mainHourly;
					const { description: descriptionHourly, icon: iconHourly } =
						weatherHourly[0];

					const iconUrlHourly = ` https://openweathermap.org/img/wn/${iconHourly}@2x.png`;

					const maxRound = Math.round(maxHourly);
					const minRound = Math.round(minHourly);

					const date = dateHourly.split(" ")[0];
					const time = dateHourly.split(" ")[1];

					return (
						<div className="tile" key={index}>
							<div className="card-day__inner">
								<span>{minRound}&#176;</span>/
								<span>{maxRound}&#176;</span>
							</div>

							<img src={iconUrlHourly} alt="" width={50} />

							<h6>{date}</h6>

							<h6>
								<small>{time}</small>
							</h6>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ModalIndo;
