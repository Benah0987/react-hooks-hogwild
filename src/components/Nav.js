import React from "react";
import piggy from "../assets/porco.png";

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
			<button onClick = {handleGreased} >Grease</button>
			{/*passnig down prop to Filter child*/}
			<Filter 
		</div>
	);
};

export default Nav;
