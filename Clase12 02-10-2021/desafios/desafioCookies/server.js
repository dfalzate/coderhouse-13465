import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser(process.env.COOKIE_FIRMA));
app.post("/guardar",(req,res)=>{
  const {nombre,valor,duracion} = req.body;
  if(!nombre || !valor){
    res.status(400).json({
      error:"Falta nombre o valor"
    });
  }
  if(!duracion){
    res.cookie(nombre,valor,{signed:true});
    return res.json({proceso:'ok'});
  }
  res.cookie(nombre,valor,{maxAge:Number(duracion)*1000,signed:true});
  res.json({
    proceso:'ok'
  });
});
app.get("/cookies",(req,res)=>{
  const cookies = {
    firmadas:req.signedCookies,
    noFirmadas:req.cookies
  };
  res.json(cookies);
});
app.delete("/eliminar",(req,res)=>{
  const {nombre} = req.query;
  if(!nombre){
    res.status(400).json({
      error:"Falta nombre"
    });
  }
  res.clearCookie(nombre);
  res.send("Cookie borrada");
});
app.listen(8080, () => {
  console.log("Server running");
});
