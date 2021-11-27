import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

const mailOptions = {
  from: "diegoff@gmail.com",
  to: ["jrhhvultuu7rfmov@ethereal.email", "diegoff@gmail.com"],
  subject: "Ensayo ethereal",
  html: "<h1>Este es un correo con nodemailer</h1>",
  attachments: [
    {
      path: "Resources.docx",
    },
  ],
};

async function sendMailEthereal() {
  try {
    const response = await transporter.sendMail(mailOptions);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

sendMailEthereal();

/* ---------------------------------- GMAIL --------------------------------- */

const transporterGmail = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "diegoff@gmail.com",
    pass: "oukzwglwrkovrnki",
  },
});

async function sendMailGmail() {
  try {
    const response = await transporterGmail.sendMail(mailOptions);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

sendMailGmail();
