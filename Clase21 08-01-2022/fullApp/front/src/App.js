import './App.css';
import faker from 'faker'
import axios from 'axios'
import React from 'react'
import lodash from 'lodash'

faker.locale='es'

function App() {

  const [noticias, setNoticias] = React.useState([])

  async function obtenerNoticias(e) {
    e.preventDefault()
    const response = await axios.get('http://localhost:4000/noticias')
   setNoticias(response.data)
  }

  async function generarNoticia() {
    const noticia = {
      titulo:faker.hacker.phrase(),
      cuerpo: faker.lorem.paragraph(),
      autor: faker.name.findName(),
      imagen: faker.image.avatar(),
      vista:false
    }
    const response = await axios.post('http://localhost:4000/noticias', noticia)
    console.log(response)
    if (response.status === 200) {
      const newNoticias = lodash.cloneDeep(noticias) // [...noticias]
      newNoticias.push(noticia)
      setNoticias(newNoticias)
    }
  }

  return (
    <div className="App">
      <header className='App-header'>
        <div className='form-group'>
          <label htmlFor='input'>Selecciona una noticia</label>
          <form>
            <input type='number' min='1' name='input' />
          <button onClick={obtenerNoticias}>Obtener</button>
          </form>
            <button onClick={generarNoticia}>Generar</button>
        </div>
        <div>
          {noticias.length > 1 && noticias.map((noticia, index) => {
            return (
              <div key={`not${index}`}>
                <img src={noticia.imagen} height='100px' width='150px' alt='' />
                <h3>{noticia.titulo}</h3>
                <text>{noticia.cuerpo}</text>
              </div>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
