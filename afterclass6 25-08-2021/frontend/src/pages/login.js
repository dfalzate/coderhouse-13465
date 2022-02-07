import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import io from 'socket.io-client'
import axios from 'axios'

const socket = io('http://localhost:8080')

function LoginPage() {
	const [user, setUser] = React.useState('')
	const [users, setUsers] = React.useState([])
	const [input, setInput] = React.useState('')
	const [message, setMessage] = React.useState('')
	const [messages, setMessages] = React.useState([])

	React.useEffect(() => {
		socket.on('users', (data) => {
			setUsers(data)
		})

		socket.on('messages', (data) => {
			setMessages(data)
		})
	}, [])

	async function handleSubmit(e) {
		e.preventDefault()
		setUser(input)
		const newUsers = await getUsers()
		newUsers.push(input)
		socket.emit('users', newUsers)
	}

	async function getUsersFetch() {
		let response = await fetch('http://localhost:8080/users', {
			method: 'GET',
		})
		//.then(data=>data.json()).then(data=>console.log(data))
		response = response.json()
		console.log(response)
	}

	async function getUsers() {
		const response = await axios({
			method: 'GET',
			url: 'http://localhost:8080/users',
		})
		return response.data
	}

	function handleSubmitChat(e) {
		e.preventDefault()
		socket.emit('message', { message, name: user })
		setMessage('')
	}

	const initialPage = (
		<div className='login'>
			<h2 className='login__title'>Ingreso</h2>
			<form onSubmit={handleSubmit} className='login__form'>
				<div className='login__form-group'>
					<label className='login__form-group-label'>
						<FontAwesomeIcon icon={faUser} />
						<span>Usuario</span>
					</label>
					<input type='text' placeholder='Escriba el usuario' onChange={(e) => setInput(e.target.value)} className='login__text-input' />
				</div>
				<Button variant='primary' type='submit' className='login__Button'>
					Ingresar
				</Button>
			</form>
		</div>
	)

	const chat = (
		<div className='principal'>
			<div className='panel1'>
				<div className='video'>
					{messages.length > 0 &&
						messages.map((chat, index) => {
							return (
								<p key={`message-${index}`} className={chat.name === user ? 'me' : 'others'} id={chat.userType}>
									{`${chat.message} - ${chat.name} `}
								</p>
							)
						})}
				</div>
				<div className='chat'>
					<form onSubmit={handleSubmitChat} className='chat-form'>
						<label className='form-label'>Mensaje</label>
						<input
							type='text'
							placeholder='Escriba su mensaje'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className='form-control'
						/>
						<Button variant='primary' type='submit'>
							Enviar
						</Button>
					</form>
				</div>
			</div>
			<div className='panel2'>
				<div className='chats'>
					<h2>Chat users</h2>
					{users.map((user, index) => {
						return <div key={`user-${index}`}>{user}</div>
					})}
				</div>
				<div className='userInformation'>
					<h3>Usuario</h3>
					<p>{user}</p>
				</div>
			</div>
		</div>
	)

	return <div>{user === '' ? initialPage : chat}</div>
}

export default LoginPage
