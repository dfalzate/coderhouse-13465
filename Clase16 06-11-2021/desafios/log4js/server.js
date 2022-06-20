const express = require('express');
const logger = require('./logger.js')

const app = express()



app.get("/sumar", (req, res, next) => {
  const { n1, n2 } = req.query;
  if (isNaN(n1) || isNaN(n2)) {
    logger.debug("Valores erróneos");
    logger.error(`n1=${n1} o n2=${n2} no son numeros`);
    res.send(`n1=${n1} o n2=${n2} no son numeros`);
  } else {
    logger.info(`Suma=${Number(n1) + Number(n2)}`);
    res.send(`Suma=${Number(n1) + Number(n2)}`);
  }
});

app.use(function (req, res, next) {
  logger.warn("Ruta no definida");
  res.send("Ruta no definida");
});

const server = app.listen(3000, () => {
  logger.info(`Server on port 3000`)
})

server.on('error',error=>logger.error(error))