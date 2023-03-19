import React, { useState } from "react";
import ModalIndo from "./modal-info";
import Button from "./button";

const Tile = ({ tile, day, list }) => {
	const { main, weather, dt_txt: date } = tile;
	const { temp_max: max, temp_min: min } = main;
	const { description, icon } = weather[0];

	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(!showModal);

		document.querySelector("body").classList.toggle("is-fixed");
	};

	const iconUrl = ` https://openweathermap.org/img/wn/${icon}@2x.png`;
	const maxRound = Math.round(max);
	const minRound = Math.round(min);

	const detailedInformationAboutTheDay = list.filter((item) => {
		if (item.dt_txt.split(" ")[0] === date.split(" ")[0]) return item;
	});

	return (
		<div className="tile" onClick={() => handleShowModal()}>
			<div className="tile__inner">
				<div className="tile__main">
					<h6>
						{minRound}&#176; / {maxRound}&#176;
					</h6>

					<img src={iconUrl} alt="" />

					<p>{description}</p>

					<p>{day}</p>
				</div>

				<Button>More Info</Button>

				<ModalIndo
					listInfo={detailedInformationAboutTheDay}
					isVisible={showModal}
					handleShowModal={handleShowModal}
				/>
			</div>
		</div>
	);
};

export default Tile;
