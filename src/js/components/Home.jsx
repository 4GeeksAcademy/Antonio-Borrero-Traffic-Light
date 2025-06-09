import React, { useState } from "react";

//create your first component
const Home = () => {

	const [Color, setColor] = useState("")

	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container">
				<div className={`red light ${Color === "red" ? "selected" : ""}`} onClick={() => setColor("red")}></div>
				<div className={`yellow light ${Color === "yellow" ? "selected" : ""}`} onClick={() => setColor("yellow")}></div>
				<div className={`green light ${Color === "green" ? "selected" : ""}`} onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};

export default Home;