import React from 'react';
import SeleccionarMarca from '../components/SeleccionarMarca.component';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ProductosContext from '../context/productos.context';

function EliminarMarcaPage() {
	const { marcas, setMarcas } = React.useContext(ProductosContext);
	const [_id, set_id] = React.useState('');
	const [show, setShow] = React.useState(false);

	let history = useHistory();

	React.useEffect(() => {
		const brands = JSON.parse(sessionStorage.getItem('marcas'));
		setMarcas(brands);
	}, []);

	function handleSubmit(event) {
		event.preventDefault();
		setShow(true);
	}

	async function handleContinuar() {
		setShow(false);
		const response = await axios({
			method: 'delete',
			url: `${process.env.REACT_APP_SERVER}/marcas/marca/${_id}`,
		});
		if (response.status === 200) {
			const marcaID = _id;
			const brand = marcas.filter((marca) => marca._id === marcaID)[0];
			const index = marcas.indexOf(brand);
			marcas.splice(index, 1);
			setMarcas(marcas);
			sessionStorage.setItem('marcas', JSON.stringify(marcas));
			alert('Marca eliminada correctamente');
			history.push('/');
		} else {
			console.log('Bad request');
		}
	}

	return (
		<div className='home'>
			<div className='titulo'>
				<h1>Eliminar marca</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<SeleccionarMarca onChange={(e) => set_id(e.target.value)} />
				<Button type='submit' className='saveButton'>
					Eliminar
				</Button>
			</form>
			<>
				<Modal show={show} onHide={() => setShow(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Pregunta</Modal.Title>
					</Modal.Header>
					<Modal.Body>Esta seguro de eliminar la marca?</Modal.Body>
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

export default EliminarMarcaPage;
