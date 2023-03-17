import Tile from "./tile";

const Tiles = ({ list }) => {
	const weekDays = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	const uniqueDays = list.filter((value, index, self) => {
		return (
			index ===
			self.findIndex(
				(t) => t.dt_txt.split(" ")[0] === value.dt_txt.split(" ")[0]
			)
		);
	});

	const dayInAWeek = new Date().getDay();

	const days = weekDays
		.slice(dayInAWeek, weekDays.length)
		.concat(weekDays.slice(0, dayInAWeek))
		.slice(0, 5);

	return (
		<ul className="tiles">
			{uniqueDays.slice(0, 5).map((tile, index) => {
				return (
					<li key={index}>
						<Tile tile={tile} day={days[index]} list={list} />
					</li>
				);
			})}
		</ul>
	);
};

export default Tiles;
