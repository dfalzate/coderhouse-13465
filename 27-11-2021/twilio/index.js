import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(process.env.SID, process.env.TOKEN);

async function sendSMS() {
  try {
    const message = {
      body: "Hola desde twilio",
      from: "+18507712325",
      to: process.argv[2],
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
      body: "Hola whatsapp desde twilio",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+573204881278",
      mediaUrl: [
        "https://media.gettyimages.com/photos/portrait-of-two-young-man-at-the-rooftop-picture-id1351219137?s=2048x2048",
      ],
    };
    const response = await client.messages.create(message);
    console.log("Whatsapp=>", response);
  } catch (error) {
    console.log(error);
  }
}

sendWP();
