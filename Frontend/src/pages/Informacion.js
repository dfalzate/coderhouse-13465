import React from 'react';
import ProductosContext from '../context/productos.context';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import SeleccionarProducto from '../components/SeleccionarProducto.component';

function InformacionPage() {
	const { productos, setProductos, setMarcas } = React.useContext(ProductosContext);
	const [producto, setProducto] = React.useState({});
	const [marca, setMarca] = React.useState({});
	const [fechaEmbarque, setFechaEmbarque] = React.useState('');

	React.useEffect(() => {
		getProductos();
		getMarcas();
	}, []);

	async function getProductos() {
		const products = await axios({
			methods: 'get',
			url: `${process.env.REACT_APP_SERVER}/productos`,
		});
		setProductos(products.data);
		sessionStorage.setItem('productos', JSON.stringify(products.data));
	}

	async function getMarcas() {
		const brands = await axios({
			method: 'get',
			url: `${process.env.REACT_APP_SERVER}/marcas/`,
		});
		setMarcas(brands.data);
		sessionStorage.setItem('marcas', JSON.stringify(brands.data));
	}

	function handleReferencia(event) {
		const productId = event.target.value;
		const productoSeleccionado = productos.filter((producto) => {
			return producto._id === productId;
		});
		setProducto(productoSeleccionado[0]);
		setMarca(productoSeleccionado[0].marca);
		let date = new Date();
		date.setTime(Date.parse(productoSeleccionado[0].fechaEmbarque));
		setFechaEmbarque(
			`${date.getUTCFullYear()}-${
				date.getUTCMonth() < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1
			}-${date.getUTCDate()}`
		);
	}

	return (
		<div className='home'>
			<div className='titulo'>
				<h1>Información</h1>
			</div>
			<Form>
				<SeleccionarProducto onChange={handleReferencia} />
				<div className='form-group'>
					<label className='form-label'>Talla</label>
					<input
						id='text'
						type='text'
						className='form-control'
						required
						readOnly
						value={producto.talla}
					/>
				</div>
				<div className='form-group'>
					<label className='form-label'>Observaciones</label>
					<input
						id='text'
						type='text'
						className='form-control'
						required
						readOnly
						value={producto.observaciones}
					/>
				</div>
				<div className='form-group'>
					<label className='form-label'>Marca</label>
					<input
						id='text'
						type='text'
						className='form-control'
						required
						readOnly
						value={marca.marca}
					/>
				</div>
				<div className='form-group'>
					<label className='form-label'>Referencia</label>
					<input
						id='text'
						type='text'
						className='form-control'
						required
						readOnly
						value={marca.referencia}
					/>
				</div>
				<div className='form-group'>
					<label className='form-label'>Inventario</label>
					<input
						id='number'
						type='text'
						className='form-control'
						required
						readOnly
						value={producto.inventario}
					/>
				</div>
				<div className='form-group'>
					<label className='form-label'>Fecha embarque</label>
					<input
						id='date'
						type='date'
						className='form-control'
						required
						readOnly
						value={fechaEmbarque}
					/>
				</div>
			</Form>
		</div>
	);
}

export default InformacionPage;
