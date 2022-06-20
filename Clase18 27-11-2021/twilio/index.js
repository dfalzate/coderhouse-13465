import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(process.env.SID, process.env.TOKEN);

async function sendSMS() {
  try {
    const message = {
      body: "Hola desde twilio",
      from: "+19895463269",
      to: "+573017429882",
    };
    const response = await client.messages.create(message);
    console.log("SMS=>", response);
  } catch (error) {
    console.log(error);
  }
}

// sendSMS();

async function sendWP() {
  try {
    const message = {
      body: "Holi mochi mochi",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+573017429882",
      mediaUrl: ["https://www.mundomotero.com/wp-content/uploads/2017/06/BMW-F-700-GS.jpg"],
    };
    const response = await client.messages.create(message);
    console.log("Whatsapp=>", response);
  } catch (error) {
    console.log(error);
  }
}

sendWP();
