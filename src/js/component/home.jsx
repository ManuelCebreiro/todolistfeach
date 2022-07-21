import React, { useState, useEffect } from "react";
import { func } from "prop-types";


const Home = () => {

	const url = 'https://assets.breatheco.de/apis/fake/todos/user/manuelcebreiro';

	const [inputText, setInputText] = useState([]);
	const [inputValue, setinputValue] = useState();   //para vaciar el input
	// const [deleteall, setdeleteall] = useState();




	const get = () => {
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		
			.then(resp => { return resp.json(); })
			.then(data =>
				setInputText(data))
			.catch(error => {
				//manejo de errores
				console.log(error)

			}
			);
	}
	const newUser = () => {
		fetch(url, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(respuesta =>{
			if(respuesta.ok)
			get()
		})
		.catch(error=>
			console.log("No se ha podido llamar a los datos"))
	}

	useEffect(() => {
		get()
	}, []);

	const actualizarlista = (data) => {
		console.log(data)
		fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
		})
			.then(respuesta => {
				console.log(respuesta.status)
				if (respuesta.ok)
					get()
			
			})
			.catch(error =>
				console.log("no funciona hay un error")
			)
	}
	const deletelist = () => {
		fetch(url, {
			method: "DELETE",
			body: JSON.stringify(),
			headers: {
				"Content-Type": "application/json"
			}})
			.then(response => {
				if(response.ok)
					newUser()
					
			})
		
	}


	function borrarelemento(why) {
		const listaborrar = inputText.filter(valor => valor !== why)
		actualizarlista(listaborrar)
	}


	return (
		<div className="container text-center">
			<h1 className="container d-flex justify-content-center text-center col-8 bi bi-x-lg">TODOS</h1>
			<div className="container d-flex justify-content-center text-center mb-3">
				<button type="button" onClick={() => deletelist()} className="btn btn-danger" value>Borrar</button>
			</div>
			<div className="container shadow p-1 bg-white rounded col-8 bi bi-x-lg">
				<input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)}
					onKeyDown={(e) => {

						let newObj = { label: inputValue, done: false };
						let aux = [...inputText, newObj]

						let array = Array.from(e.target.value);
						let filterarray = array.filter(words => words !== " ");

						if (e.key === "Enter" && filterarray.length) {
							actualizarlista(aux)
							setInputText(aux);
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
										onClick={() => borrarelemento(texto)}></button></li>

							)
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;

