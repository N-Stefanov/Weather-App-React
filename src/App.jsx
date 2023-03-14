import React, { useState, useEffect } from "react";
import wallpaper from "./assets/images/weather-wallpapers.jpg";

const App = () => {
	const [response, setResponse] = useState({});

	return (
		<div className="App">
			<div className="card">
				<div className="card__image">
					<img src={wallpaper} alt="" />
				</div>

				<div className="card__content">
					<h3>Varna</h3>

					<h2>34F</h2>

					<div className="span">Clouds</div>
				</div>
			</div>

			<ul className="tiles">
				<li>
					<div className="tile">
						<h6>34f</h6>

						<p>Monday</p>
					</div>
				</li>

				<li>
					<div className="tile">
						<h6>34f</h6>

						<p>Monday</p>
					</div>
				</li>

				<li>
					<div className="tile">
						<h6>34f</h6>

						<p>Monday</p>
					</div>
				</li>

				<li>
					<div className="tile">
						<h6>34f</h6>

						<p>Monday</p>
					</div>
				</li>

				<li>
					<div className="tile">
						<h6>34f</h6>

						<p>Monday</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default App;
