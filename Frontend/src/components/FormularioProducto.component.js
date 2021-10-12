import React from 'react';
import SeleccionarMarca from './SeleccionarMarca.component';
import { Button } from 'react-bootstrap';

function FormularioComponent(props) {
	return (
		<div>
			<div className='form-group'>
				<label className='form-label'>Observaciones</label>
				<input
					id='text'
					type='text'
					className='form-control'
					required
					onChange={props.onChangeObservaciones}
					value={props.valueObservaciones}
				/>
			</div>
			<div className='form-group'>
				<label className='form-label'>Talla</label>
				<select
					id='select'
					className='form-control'
					required
					defaultValue=''
					onChange={props.onChangeTalla}
					value={props.valueTalla}
				>
					<option value='' disabled>
						Seleccione una talla
					</option>
					<option value='S'>S</option>
					<option value='M'>M</option>
					<option value='L'>L</option>
				</select>
			</div>
			<SeleccionarMarca name='marca' onChange={props.onChangeMarca} value={props.valueMarca} />
			<div className='form-group'>
				<label className='form-label'>Inventario</label>
				<input
					id='number'
					type='number'
					className='form-control'
					min='0'
					required
					onChange={props.onChangeInventario}
					value={props.valueInventario}
				/>
			</div>
			<div className='form-group'>
				<label className='form-label'>Fecha embarque</label>
				<input
					id='date'
					type='date'
					className='form-control'
					required
					onChange={props.onChangeFecha}
					value={props.valueFecha}
				/>
			</div>
			<Button type='submit' className='saveButton'>
				Grabar
			</Button>
		</div>
	);
}

export default FormularioComponent;
