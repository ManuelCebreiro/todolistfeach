import React, { useState, useEffect } from "react";
import { func } from "prop-types";


const Home = () => {

	const url = 'https://assets.breatheco.de/apis/fake/todos/user/man';

	const [inputText, setInputText] = useState([]);
	const [inputValue, setinputValue] = useState();


	const get = ()=>{
		fetch(url, {
		  method: "GET",
		  headers: {
			"Content-Type": "application/json"
		  }
		})
		.then(resp => {return resp.json();})
		.then(data => 
		setInputText(data))
		.catch(error => {
			//manejo de errores
			console.log(error)
	
		}
		);}
	


useEffect(() => {
	get()
  },[]);

const newUser = () =>{
fetch(url,{
	method: "GET",
	body: JSON.stringify([]),    //con esto creo un nuevo usuario. Porque me piden un array vacio para crearlo
	headers: {
	  "Content-Type": "application/json"
	}
})
}

const actualizarlista = () =>{
fetch(url,{
	method: "PUT",
	headers: {
		"Content-Type": "application/json"
	  },
	body: JSON.stringify([...inputText, {label :inputValue, done : false}]),
	})
.then(respuesta => {
	if(respuesta.ok)
	get()
})
.catch(error=> 
	console.log("no funciona hay un error")
	)
}




// .then(reponse => {
// 	if (!reponse.ok)
// 		throw new Error ("No existe el usuario")
// })
// .then(data =>{
// 	setInputText([...data])
// 	console.log("Se han descargado las tareas")
// })
// .catch(error=>
// 	console.log(error)
// 	newUser()
// 	)




	return (
		<div className="container text-center">
			<h1 className="container d-flex justify-content-center text-center col-8 bi bi-x-lg">TODOS</h1>
			<div className="container d-flex justify-content-center text-center mb-3"><button type="button" className="btn btn-danger">Borrar</button></div>
			<div className="container shadow p-1 bg-white rounded col-8 bi bi-x-lg">
			<input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} 
			
				onKeyDown={(e) => {

				let array = Array.from(e.target.value);
				let filterarray = array.filter(words => words !== " ");

				if (e.key === "Enter" && filterarray.length) {
					actualizarlista()					
					setInputText([...inputText, {label : e.target.value, done : false}]);
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

