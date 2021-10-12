import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBarComponent() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand href='#home'>TiendaApp</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Link className='nav-link' to='/'>
						Información
					</Link>
					<NavDropdown title='Crear' id='collasible-nav-dropdown'>
						<NavDropdown.Item>
							<Link className='dropdown-item' to='/crearproducto'>
								Producto
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<Link className='dropdown-item' to='/crearmarca'>
								Marca
							</Link>
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title='Editar' id='collasible-nav-dropdown'>
						<NavDropdown.Item>
							<Link className='dropdown-item' to='/editarproducto'>
								Producto
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<Link className='dropdown-item' to='/editarmarca'>
								Marca
							</Link>
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title='Eliminar' id='collasible-nav-dropdown'>
						<NavDropdown.Item>
							<Link className='dropdown-item' to='/eliminarproducto'>
								Producto
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<Link className='dropdown-item' to='/eliminarmarca'>
								Marca
							</Link>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBarComponent;
