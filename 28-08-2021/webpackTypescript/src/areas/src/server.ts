import express from 'express'

import per from './lib/perimetros'
import ar from './lib/areas'

const perimetros: per = new per();
const areas: ar = new ar();

const routePerimetros = express.Router();
const routerAreas = express.Router();

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routePerimetros.get('/cuadrado', (req, res) => {
  const { lado } = req.query
  const newLado = Number(lado)
  res.status(200).json({
    response: perimetros.perimetroCuadrado(newLado),
  })
})

app.use('/areas', routerAreas)
app.use('/perimetros', routePerimetros)

app.listen(8080, () => console.log('Server 8080'))