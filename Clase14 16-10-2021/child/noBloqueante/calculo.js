function calculo() {
  let sum=0
  for (let i = 0; i < 2e5; i++) {
    sum++,
    console.log(sum)
  }
  return sum
}

process.on('message', (msg) => {
  console.log(msg)
  const resultado = calculo()
  process.send(resultado)
})