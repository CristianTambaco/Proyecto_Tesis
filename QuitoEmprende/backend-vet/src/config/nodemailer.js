import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

let transporter = nodemailer.createTransport({
  service: 'gmail', // o outlook, según lo que uses
  host: process.env.HOST_MAILTRAP,
  port: process.env.PORT_MAILTRAP,
  auth: {
    user: process.env.USER_MAILTRAP,
    pass: process.env.PASS_MAILTRAP,
  }
});

const sendMailToRegister = (userMail, token) => {
  const urlConfirmacion = `${process.env.URL_BACKEND}confirmar/${token}`;
  let mailOptions = {
    from: 'admin@emprende.com',
    to: userMail,
    subject: "Emprende - Confirmación de cuenta",
    html: `<p>Hola, haz clic <a href="${urlConfirmacion}">aquí</a> para confirmar tu cuenta.</p>
           <hr>
           <footer>El equipo de Emprende te da la bienvenida.</footer>`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("Error enviando email:", error);
    } else {
      console.log("Email enviado:", info.messageId);
    }
  });
}

export default sendMailToRegister;
