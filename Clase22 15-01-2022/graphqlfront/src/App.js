import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [personas, setPersonas] = React.useState([]);
  const [nombre, setNombre] = React.useState("");
  const [edad, setEdad] = React.useState(0);

  React.useEffect(async () => {
    await getPersonas();
  }, []);

  async function getPersonas() {
    try {
      const response = await axios({
        url: "http://localhost:4000/graphql",
        method: "post",
        data: {
          query: `
            query getPersonas{
              getPersonas{
                id
                nombre
                edad
              }
            }
          `,
        },
      });
      setPersonas(response.data.data.getPersonas);
    } catch (error) {
      console.log(error);
    }
  }

  function onChangeNombre(e) {
    e.preventDefault();
    setNombre(e.target.value);
  }

  function onChangeEdad(e) {
    e.preventDefault();
    setEdad(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios({
        url: "http://localhost:4000/graphql",
        method: "post",
        data: {
          query: `
            mutation{
              addPersona( data:{
                nombre:"${nombre}",
                edad:${edad},
              }){
                id
                nombre
                edad
              }
            }
          `,
        },
      });
      await getPersonas();
      alert("Persona agregada");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Lista de personas</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor='nombre'>Nombre: </label>
          <input name='nombre' type='text' onChange={onChangeNombre} />
          <label htmlFor='edad'>Edad: </label>
          <input name='edad' type='number' min='1' onChange={onChangeEdad} />
          <button type='submit'>Enviar</button>
        </form>
        {personas.length > 0 &&
          personas.map((persona, index) => {
            return (
              <div key={`persona${index}`}>
                <h3>Persona {index + 1}</h3>
                <br />
                {persona.id}
                <br />
                {persona.nombre}
                <br />
                {persona.edad}
                <br />
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;
