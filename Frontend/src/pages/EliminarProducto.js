import React from 'react';
import SeleccionarProducto from '../components/SeleccionarProducto.component';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ProductosContext from '../context/productos.context';

function EliminarProductoPage() {
	const { productos, setProductos } = React.useContext(ProductosContext);
	const [_id, set_id] = React.useState('');
	const [show, setShow] = React.useState(false);

	React.useEffect(() => {
		const products = JSON.parse(sessionStorage.getItem('productos'));
		setProductos(products);
	}, []);

	let history = useHistory();

	function handleSubmit(event) {
		event.preventDefault();
		setShow(true);
	}

	async function handleContinuar() {
		setShow(false);
		const response = await axios({
			method: 'delete',
			url: `${process.env.REACT_APP_SERVER}/productos/producto/${_id}`,
		});
		if (response.status === 200) {
			const productID = _id;
			const product = productos.filter((producto) => producto._id === productID)[0];
			const index = productos.indexOf(product);
			productos.splice(index, 1);
			setProductos(productos);
			sessionStorage.setItem('productos', JSON.stringify(productos));
			alert('Producto eliminado correctamente');
			history.push('/');
		} else {
			console.log('Bad request');
		}
	}

	return (
		<div className='home'>
			<div className='titulo'>
				<h1>Eliminar producto</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<SeleccionarProducto onChange={(e) => set_id(e.target.value)} />
				<Button type='submit' className='saveButton'>
					Eliminar
				</Button>
			</form>
			<>
				<Modal show={show} onHide={() => setShow(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Pregunta</Modal.Title>
					</Modal.Header>
					<Modal.Body>Esta seguro de eliminar el producto?</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={() => setShow(false)}>
							Cerrar
						</Button>
						<Button variant='primary' onClick={handleContinuar}>
							Continuar
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		</div>
	);
}

export default EliminarProductoPage;
