import React, { useState, useEffect } from "react";
import { func } from "prop-types";


const Home = () => {

	const [inputText, setInputText] = useState([]);
	const [inputValue, setinputValue] = useState();

const get = () =>{       													//funcion para traerme datos a traves de la api
fetch('http://assets.breatheco.de/apis/fake/todos/user/manuelcebreiro',{
	method: "GET",
	headers: {
	  "Content-Type": "application/json"
	}})
.then(respuesta => {return respuesta.json();}) 		//convertir los datos llamados en texto legible para mi pagina
.then(data => setInputText(data))   				//actualizar mi inputText con los datos ya legibles de la api

}

useEffect(() => {
	get()
  },[]);

const put = () =>{
fetch("http://assets.breatheco.de/apis/fake/todos/user/manuelcebreiro",{
	method: "PUT",
	body: JSON.stringify(inputText),
	headers: {
	  "Content-Type": "application/json"
	}})

.then(respuesta => {if(respuesta.ok) get() })

}





	return (
		<div className="container text-center">
			<h1 className="container d-flex justify-content-center text-center col-8 bi bi-x-lg">TODOS</h1>
			<div className="container d-flex justify-content-center text-center mb-3"><button type="button" className="btn btn-danger">Borrar</button></div>
			<div className="container shadow p-1 bg-white rounded col-8 bi bi-x-lg">
			<input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} onKeyDown={(e) => {

				let array = Array.from(e.target.value);
				let filterarray = array.filter(words => words !== " ");

				if (e.key === "Enter" && filterarray.length) {
					setInputText([...inputText, e.target.value]);
					setinputValue("")
					put()
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
						// [{"label":"sample task","done":false}]
							className="container list-group-item">{texto.label}   
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

