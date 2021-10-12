import React from 'react';
import ProductosContext from '../context/productos.context';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Formulario from '../components/FormularioProducto.component';

function CrearProductoPage() {
	const { productos, setProductos } = React.useContext(ProductosContext);
	const [nombre, setNombre] = React.useState('');
	const [observacion, setObservacion] = React.useState('');
	const [talla, setTalla] = React.useState('');
	const [marca, setMarca] = React.useState('');
	const [inventario, setInventario] = React.useState('');
	const [fecha, setFecha] = React.useState('');

	let history = useHistory();

	async function handleSubmit(event) {
		event.preventDefault();
		let product = {
			nombre: nombre,
			talla: talla,
			observaciones: observacion,
			marca: marca,
			inventario: inventario,
			fechaEmbarque: fecha,
		};
		const response = await axios({
			method: 'post',
			url: `${process.env.REACT_APP_SERVER}/productos/`,
			data: product,
		});
		if (response.status === 200) {
			setProductos(...productos, response.data);
			alert('Producto creado correctamente');
			history.push('/');
		} else {
			console.log('Bad request');
		}
	}

	return (
		<div className='home'>
			<div className='titulo'>
				<h1>Crear producto</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label className='form-label'>Nombre</label>
					<input
						id='text'
						type='text'
						className='form-control'
						required
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<Formulario
					onChangeObservaciones={(e) => setObservacion(e.target.value)}
					onChangeTalla={(e) => setTalla(e.target.value)}
					onChangeMarca={(e) => setMarca(e.target.value)}
					onChangeInventario={(e) => setInventario(e.target.value)}
					onChangeFecha={(e) => setFecha(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default CrearProductoPage;
