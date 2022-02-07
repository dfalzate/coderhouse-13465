function conteo(){
  let sum=0
  for (let i = 0; i < 1e10; i++) {
    sum++
  }
  return sum
}

process.on('message', (message) => {
  console.log(message)
  const result = conteo()
  process.send(result)
})