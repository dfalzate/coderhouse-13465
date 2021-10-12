import React from 'react';
import ProductosContext from '../context/productos.context';

function SeleccionarMarcaComponent(props) {
	const { marcas } = React.useContext(ProductosContext);

	return (
		<div className='form-group'>
			<label className='form-label'>Marca</label>
			<select
				id='select'
				className='form-control'
				required
				defaultValue=''
				onChange={props.onChange}
				value={props.value}
			>
				<option value='' disabled>
					Seleccione una marca
				</option>
				{marcas.length > 0 &&
					marcas.map((marca) => {
						return (
							<option value={marca._id} key={marca._id}>
								{marca.marca}
							</option>
						);
					})}
			</select>
		</div>
	);
}

export default SeleccionarMarcaComponent;
