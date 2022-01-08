// // ! GET http

// const http = require("http")
// const options1 ={
//   hostname: "localhost",
//   port:4000,
//   path:"/noticias",
//   method:"GET"
// }

// const req1 = http.request(options1,(res)=>{
//   console.log(res.statusCode)
//   res.on("data",(data)=>{
//     process.stdout.write(data)
//   })
// })

// req1.on("error",(error)=>console.log(error))

// req1.end()

// // ! POST http
// const data = new TextEncoder().encode(
//   JSON.stringify({
//     titulo:"titulo1",
//     cuerpo:"cuerpo1",
//     autor:"autor1",
//     imagen:"https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
//     vista:false
//   })
// )


// const options2 ={
//   hostname: "localhost",
//   port:4000,
//   path:"/noticias",
//   method:"POST",
//   headers:{
//     "Content-Type":"application/json",
//     "Content-Length":data.length
//   }
// }

// const req2 = http.request(options2,(res)=>{
//   console.log(res.statusCode)
//   res.on("data",(data)=>{
//     process.stdout.write(data)
//   })
// })

// req2.on("error",(error)=>console.log(error))
// req2.write(data)
// req2.end()

// // Update http

// const data1 = new TextEncoder().encode(
//   JSON.stringify({
//     titulo:"titulo1",
//     cuerpo:"cuerpo1",
//     autor:"autor1",
//     imagen:"https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
//     vista:false
//   })
// )


// const options2 ={
//   hostname: "localhost",
//   port:4000,
//   path:"/noticias/1",
//   method:"PATCH",
//   headers:{
//     "Content-Type":"application/json",
//     "Content-Length":data.length
//   }
// }

// const req2 = http.request(options2,(res)=>{
//   console.log(res.statusCode)
//   res.on("data",(data)=>{
//     process.stdout.write(data)
//   })
// })

// req2.on("error",(error)=>console.log(error))
// req2.write(data1)
// req2.end()


// AXIOS

// const axios = require("axios")

// async function get(){
//   const response = await axios.get("http://localhost:4000/noticias")
//   console.log(response.data)
// }

// const data = {
//     titulo:"titulo1",
//     cuerpo:"cuerpo1",
//     autor:"autor1",
//     imagen:"https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
//     vista:false
//   }

// async function post(){
//   const response = await axios.post("http://localhost:4000/noticias",data)
//   console.log(response)
//   get()
// }


// post()

// GOT

import got from "got"

async function get(){
  try {
  const response = await got("http://localhost:4000/noticias", { responseType:"json"  })
  console.log(response.body)
  } catch (error) {
    console.log(error)
  }
}

const data = {
    titulo:"titulo1",
    cuerpo:"cuerpo1",
    autor:"autor1",
    imagen:"https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
    vista:false
  }

async function post(){
  const response = await got.post("http://localhost:4000/noticias",{
    json:{data},
    responseType:"json"
    })
  console.log(response)
  get()
}


post()