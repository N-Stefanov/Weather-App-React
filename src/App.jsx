import React, { useState, useEffect } from "react";

import Card from "./components/card";
import Tiles from "./components/tiles";

import wallpaper from "./assets/images/weather-wallpapers.jpg";

import handleAjax from "./helpers/handle-ajax";

const App = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		handleAjax(
			"https://api.openweathermap.org/data/2.5/forecast?lat=43.219816&lon=27.903659&appid=acdef770b69db9dd76eee3d335a25eb9&units=metric&cnt",
			function (status, error) {
				console.log(error);
				return;
			},
			function (response, error) {
				const newData = response.data;
				setData(newData);
			}
		);
	}, []);

	return (
		<div className="App">
			{Object.keys(data).length > 1 && (
				<main>
					<section className="section">
						<div className="section__image">
							<img src={wallpaper} alt="" />
						</div>

						<div className="section__content">
							<Card data={data} />

							<Tiles list={data.list} />
						</div>
					</section>
				</main>
			)}
		</div>
	);
};

export default App;
