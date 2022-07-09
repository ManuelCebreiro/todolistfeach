import { func } from "prop-types";
import React, { useState } from "react";


const Home = () => {

	const [inputText, setInputText] = useState([]);
	
const borrar = ()=>{
	e.target.parentElement.style.display = none
	 console.log(e.target.value)
}

	return (
	<div className="container">
		<h1>Todo</h1>
		<input type="text" 	onKeyDown={(e)=>{
							if( e.key === "Enter"){
							setInputText([...inputText, e.target.value])
							
							}

							}}
							className="form-control" 
							placeholder="Username" aria-label="Username" 
							aria-describedby="basic-addon1"/>
		<ul>

		{inputText.map((texto,index)=>{return(
			<li key={index}>{texto}
					<button 
					type="button" 
					className="btn-close"
					onClick={(e)=> e.target.parentElement.style.display = "none"}></button></li>
					
		)})}
		</ul>

	</div>
	);
};

export default Home;

