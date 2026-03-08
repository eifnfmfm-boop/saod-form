// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "udusfifd68@gmail.com",
    pass: "jbnk qkdk dgua ckiv"
  }
});
