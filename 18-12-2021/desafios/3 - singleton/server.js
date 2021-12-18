import express from 'express'
import handlebars from 'express-handlebars'

import * as controlador from './controlador/personas.js'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/* ------------------------------------------------------------------------------ */
/*             Configuración del motor de plantillas handlebars                   */
/* ------------------------------------------------------------------------------ */
app.engine('hbs', handlebars({extname:'.hbs', defaultLayout: 'index.hbs'}) )
app.set('views', './views')
app.set('view engine', 'hbs')

/* -------------------------------------- */
/*             HTML ON WIRE               */
/* -------------------------------------- */
app.get('/html-onwire', controlador.getHtmlOnwire)
app.post('/html-onwire', controlador.postHtmlOnwire )

/* -------------------------------------- */
/*             DATA ON WIRE               */
/* -------------------------------------- */
app.get('/data-onwire', controlador.getDataOnwire)
app.post('/data-onwire', controlador.postDataOnwire)
app.get('/data-json', controlador.dataJSON)

/* -------------------------------------- */
/*                SINGLETON               */
/* -------------------------------------- */
app.get('/datos', controlador.obtenerHora)


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))


