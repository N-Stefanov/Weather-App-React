import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./components/card";
import Tiles from "./components/tiles";

const App = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		axios
			.get(
				"https://api.openweathermap.org/data/2.5/forecast?lat=43.219816&lon=27.903659&appid=acdef770b69db9dd76eee3d335a25eb9&units=metric&cnt=5"
			)
			.then((response) => {
				const newData = response.data;
				setData(newData);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="App">
			{Object.keys(data).length > 1 && (
				<main>
					<Card data={data} />
					<Tiles list={data.list} />
				</main>
			)}
		</div>
	);
};

export default App;
