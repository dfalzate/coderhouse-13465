import React from 'react';
import ProductosContext from '../context/productos.context';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SeleccionarMarca from '../components/SeleccionarMarca.component';

function EditarMarcaPage() {
	const { marcas, setMarcas } = React.useContext(ProductosContext);
	const [_id, set_id] = React.useState('');
	const [marca, setMarca] = React.useState({});
	const [referencia, setReferencia] = React.useState('');

	React.useEffect(() => {
		const brands = JSON.parse(sessionStorage.getItem('marcas'));
		setMarcas(brands);
	}, []);

	let history = useHistory();

	function handleChangeMarca(event) {
		const marcaId = event.target.value;
		const marcaSeleccionada = marcas.filter((marca) => {
			return marca._id === marcaId;
		})[0];
		setMarca(marcaSeleccionada);
		set_id(marcaSeleccionada._id);
		setReferencia(marcaSeleccionada.referencia);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		let brand = {
			referencia,
		};

		const response = await axios({
			method: 'put',
			url: `${process.env.REACT_APP_SERVER}/marcas/marca/${_id}`,
			data: brand,
		});
		if (response.status === 200) {
			const index = marcas.indexOf(marca);
			marcas[index] = response.data;
			setMarcas(marcas);
			sessionStorage.setItem('marcas', JSON.stringify(marcas));
			alert('Marca editada correctamente');
			history.push('/');
		} else {
			console.log('Bad request');
		}
	}

	return (
		<div className='home'>
			<div className='titulo'>
				<h1>Editar marca</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<SeleccionarMarca onChange={handleChangeMarca} />
				<div className='form-group'>
					<label className='form-label'>Referencia</label>
					<input
						id='text'
						type='text'
						className='form-control'
						required
						onChange={(e) => setReferencia(e.target.value)}
						value={referencia}
					/>
				</div>
				<Button type='submit' className='saveButton'>
					Grabar
				</Button>
			</form>
		</div>
	);
}

export default EditarMarcaPage;
