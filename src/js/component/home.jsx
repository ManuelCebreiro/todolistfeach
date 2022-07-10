import { func } from "prop-types";
import React, { useState } from "react";

const Home = () => {

	const [inputText, setInputText] = useState([]);
	const [inputValue, setinputValue] = useState();

	return (
	<div className="container">
		<h1>Todo</h1>
		<input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)} onKeyDown={(e)=>{

							let array = Array.from(e.target.value);
							let filterarray = array.filter(words => words !== " ");
							
							if( e.key === "Enter" &&  filterarray.length){
							setInputText([...inputText, e.target.value]);
							setinputValue("")}
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

