var express = require('express');
var router = express.Router();
var debug = require('debug')('productosApp:productos')
var { uuid } = require('uuidv4');

const productos = []


function getIndex(id) {
  let index = -1
  productos.map((prod, _index) => {
    if(prod.id===id) index=_index
  })
  return index
}

/* GET all */
router.get('/', function(req, res) {
  res.status(200).json(productos);
});

/* GET one */
router.get('/:id', function (req, res) {
  const {id} = req.params
  let index = getIndex(id)
  if (index !== -1) res.status(200).json(productos[index])
  debug('Producto no encontrado')
  res.status(400).send('Producto no encontrado')
});

/* POST one */
router.post('/', (req, res) => {
  const producto = req.body
  producto.id=uuid()
  productos.push(producto)
  res.status(200).json(producto)
})

/* UPDATE one */
router.patch('/:id', (req, res) => {
  let { id } = req.params
  let producto = req.body
  let index = getIndex(id)
  if (index !== -1) {
    productos[index] = Object.assign(productos[index], producto)
    res.status(200).json(productos[index])
  }
  debug('Producto no encontrado')
  res.status(400).send('Producto no encontrado')
  
})

/* DELETE one */
router.delete('/:id', (req, res) => {
  let {id} = req.params
  let index = getIndex(id)
  if (index !== -1) {
    productos.slice(index, 1)
    res.status(200).send('Producto borrado correctamente.')
  }
  debug('Producto no encontrado')
  res.status(400).send('Producto no encontrado')
})

module.exports = router;
