import React from "react";
import piggy from "../assets/porco.png";
import Filter from "./Filter";

//passing down props
const Nav = ({handleChange, handleGreased}) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			{/*will handle the grease and the not greased*/}
			<button onClick = {handleGreased} >Grease</button>
			{/*passing down prop to Filter child*/}
			<Filter handleChange = {handleChange} />
		</div>
	);
};

export default Nav;
