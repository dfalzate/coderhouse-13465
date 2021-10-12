// import React, { useState } from 'react'
import { useState } from 'react'
import './App.css'
import './App.scss'
import logo from './assets/react.svg'

function App() {
	const [name, setName] = useState('')
	return (
		<div>
			<h1>
				React App - Hola Webpack
				<img src={logo} alt='' width='30px' height='30px' />
			</h1>
			<fieldset className='name'>
				<label htmlFor='name'>Nombre:</label>
				<input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
			</fieldset>
			<fieldset className='lastName'>
				<label htmlFor='lastName'>Apellido:</label>
				<input type='text' name='lastName' id='lastName' value={name} onChange={(e) => setName(e.target.value)} />
			</fieldset>
		</div>
	)
}
export default App
