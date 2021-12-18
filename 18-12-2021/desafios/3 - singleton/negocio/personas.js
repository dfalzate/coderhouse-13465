import model from '../model/personas.js'
import PrimeraConexion from './singleton.js'

/* -------------------------------------- */
/*           HTML/DATA ON WIRE            */
/* -------------------------------------- */
export const obtenerPersonas = async () => {
    return await model.obtenerPersonas()
}

export const agregarPersona = async persona => {
    await model.agregarPersona(persona)
}

/* -------------------------------------- */
/*                SINGLETON               */
/* -------------------------------------- */
export const obtenerHora = () => {
    return new PrimeraConexion().obtenerHora()
}
