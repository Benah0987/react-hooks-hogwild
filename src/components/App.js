import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import { useState } from "react/cjs/react.production.min";

function App() {

	const [sort, setSort] = useState("all")

	const [greased, setGreased] = useState(false)

	function handleGreased() {
		setGreased(!greased)
	}
    //will handle the filter, help with sorting
	const handleChange = (e) =>
		setSort(e.target.value)
	
	return (
		<div className="App">
			<Nav handleGreased = {handleGreased} handleChange = {handleChange}/>
			<DisplayHogs sort ={sort} hogs ={hogs} greased = {greased} />
		</div>
	);
}

export default App;
