import React, { useState, useEffect } from "react";

import Card from "./components/card";
import Tiles from "./components/tiles";
import wallpaper from "./assets/images/weather-wallpapers.jpg";
import handleAjax from "./helpers/handle-ajax";

const App = () => {
	const [data, setData] = useState({});
	const [userLocation, setUserLocation] = useState([]);
	const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?";

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			const lat = position.coords.latitude;
			const long = position.coords.longitude;
			const newUserLocation = [lat, long];
			setUserLocation(newUserLocation);
		});
	}, []);

	useEffect(() => {
		const url =
			userLocation.length > 0
				? `${baseUrl}lat=${userLocation[0]}&lon=${userLocation[1]}&appid=acdef770b69db9dd76eee3d335a25eb9&units=metric&cnt`
				: `${baseUrl}lat=42.696993&lon=23.310437&appid=acdef770b69db9dd76eee3d335a25eb9&units=metric&cnt`;

		handleAjax(
			url,
			function (status, error) {
				console.log(error);
				return;
			},
			function (response, error) {
				const newData = response.data;
				setData(newData);
			}
		);
	}, [userLocation]);

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
