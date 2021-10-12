import React from 'react';
import ProductosContext from '../context/productos.context';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SeleccionarProducto from '../components/SeleccionarProducto.component';
import Formulario from '../components/FormularioProducto.component';

function EditarProductoPage() {
	const { productos, setProductos, setMarcas } = React.useContext(ProductosContext);
	const [_id, set_id] = React.useState('');
	const [observaciones, setObservaciones] = React.useState('');
	const [talla, setTalla] = React.useState('');
	const [marca, setMarca] = React.useState('');
	const [inventario, setInventario] = React.useState('');
	const [fechaEmbarque, setFechaEmbarque] = React.useState();

	let history = useHistory();

	React.useEffect(() => {
		const products = JSON.parse(sessionStorage.getItem('productos'));
		setProductos(products);
		const brands = JSON.parse(sessionStorage.getItem('marcas'));
		setMarcas(brands);
	}, []);

	function handleSeleccionarProducto(event) {
		const productID = event.target.value;
		const product = productos.filter((producto) => producto._id === productID);
		set_id(productID);
		setObservaciones(product[0].observaciones);
		setTalla(product[0].talla);
		setMarca(product[0].marca._id);
		setInventario(product[0].inventario);
		let date = new Date();
		date.setTime(Date.parse(product[0].fechaEmbarque));
		setFechaEmbarque(
			`${date.getUTCFullYear()}-${
				date.getUTCMonth() < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1
			}-${date.getUTCDate()}`
		);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		let product = {
			observaciones,
			talla,
			marca,
			inventario,
			fechaEmbarque,
		};

		const response = await axios({
			method: 'put',
			url: `${process.env.REACT_APP_SERVER}/productos/producto/${_id}`,
			data: product,
		});
		if (response.status === 200) {
			const producto = productos.filter((producto) => producto._id === _id)[0];
			const index = productos.indexOf(producto);
			productos[index] = response.data;
			setProductos(productos);
			sessionStorage.setItem('productos', JSON.stringify(productos));
			alert('Producto editado correctamente');
			history.push('/');
		} else {
			console.log('Bad request');
		}
	}

	return (
		<div className='home'>
			<div className='titulo'>
				<h1>Editar producto</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<SeleccionarProducto onChange={handleSeleccionarProducto} />
				<Formulario
					onChangeObservaciones={(e) => setObservaciones(e.target.value)}
					valueObservaciones={observaciones}
					onChangeTalla={(e) => setTalla(e.target.value)}
					valueTalla={talla}
					onChangeMarca={(e) => setMarca(e.target.value)}
					valueMarca={marca}
					onChangeInventario={(e) => setInventario(e.target.value)}
					valueInventario={inventario}
					onChangeFecha={(e) => setFechaEmbarque(e.target.value)}
					valueFecha={fechaEmbarque}
				/>
			</form>
		</div>
	);
}

export default EditarProductoPage;
