import React from 'react';
import ProductosContext from '../context/productos.context';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CrearMarcaPage() {
	const { marcas, setMarcas } = React.useContext(ProductosContext);
	const [marca, setMarca] = React.useState('');
	const [referencia, setReferencia] = React.useState('');

	let history = useHistory();

	async function handleSubmit(event) {
		event.preventDefault();
		const brand = {
			marca,
			referencia,
		};
		const response = await axios({
			method: 'post',
			url: `${process.env.REACT_APP_SERVER}/marcas/`,
			data: brand,
		});
		if (response.status === 200) {
			setMarcas(...marcas, response.data);
			alert('Marca creada correctamente');
			history.push('/');
		} else {
			console.log('Bad request');
		}
	}

	return (
		<div className='home'>
			<div className='titulo'>
				<h1>Crear marca</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label className='form-label'>Marca</label>
					<input
						id='text'
						className='form-control'
						type='text'
						onChange={(e) => {
							setMarca(e.target.value);
						}}
						value={marca}
						required
					/>
				</div>
				<div className='form-group'>
					<label className='form-label'>Referencia</label>
					<input
						id='text'
						className='form-control'
						type='text'
						onChange={(e) => setReferencia(e.target.value)}
						value={referencia}
						required
					/>
				</div>
				<Button className='saveButton' type='submit'>
					Grabar
				</Button>
			</form>
		</div>
	);
}

export default CrearMarcaPage;
