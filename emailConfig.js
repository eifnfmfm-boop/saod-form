// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "xnncxnxn618@gmail.com",
    pass: "plyq qeti yvxl xciq"
  }
});
