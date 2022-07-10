import { func } from "prop-types";
import React, { useState } from "react";

const Home = () => {

	const [inputText, setInputText] = useState([]);
	const [inputValue, setinputValue] = useState();
	

	return (
		<div className="container text-center">
			<h1 className="container d-flex justify-content-center text-center col-8 bi bi-x-lg">TODOS</h1>
			<div className="container shadow p-1 bg-white rounded col-8 bi bi-x-lg">
			<input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} onKeyDown={(e) => {

				let array = Array.from(e.target.value);
				let filterarray = array.filter(words => words !== " ");

				if (e.key === "Enter" && filterarray.length) {
					setInputText([...inputText, e.target.value]);
					setinputValue("")
				}
			}}
				className="form-control"
				placeholder="¿Qué tienes que hacer?" aria-label="Username"
				aria-describedby="basic-addon1" />
			


		<div className="text-center">
			<ul className="list-group">
				{inputText.map((texto, index) => {
					return (
						<li key={index}
							className="container list-group-item">{texto}
							<button
								type="button"
								className="btn-close "
								onClick={(e) => e.target.parentElement.style.display = "none"}></button></li>

					)
				})}
			</ul>
			</div>
		</div>
		</div>
	);
};

export default Home;

