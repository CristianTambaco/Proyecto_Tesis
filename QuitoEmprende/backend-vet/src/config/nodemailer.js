import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.HOST_MAILTRAP,
    port: process.env.PORT_MAILTRAP,
    auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.PASS_MAILTRAP,
    }
});

const sendMailToRegister = (userMail, token) => {

    let mailOptions = {
        from: '"QuitoEmprende" <no-reply@quitoemprende.com>', // Remitente más formal
        to: userMail,
        subject: "QuitoEmprende - Confirmación de Cuenta",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>Bienvenido a QuitoEmprende</h2>
                <p>Hola,</p>
                <p>Gracias por registrarte en nuestra plataforma. Para completar tu registro, por favor haz clic en el siguiente enlace para confirmar tu cuenta:</p>
                <p><a href="${process.env.URL_BACKEND}administradores/confirmar/${token}" style="background-color: #007bff; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">Confirmar Cuenta</a></p>
                <p>Si no realizaste este registro, puedes ignorar este correo.</p>
                <hr>
                <footer style="font-size: 0.9em; color: #777;">
                    El equipo de <strong>QuitoEmprende</strong> te da la más cordial bienvenida.
                </footer>
            </div>
        `
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("Error al enviar correo: ", error);
        } else {
            console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
        }
    })
}

const sendMailToRecoveryPassword = async (userMail, token) => {
    let mailOptions = {
        from: '"QuitoEmprende" <no-reply@quitoemprende.com>',
        to: userMail,
        subject: "QuitoEmprende - Reestablece tu Contraseña",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>Recuperación de Contraseña - QuitoEmprende</h2>
                <p>Hola,</p>
                <p>Hemos recibido una solicitud para restablecer tu contraseña. Para continuar con el proceso, por favor haz clic en el siguiente enlace:</p>
                <p><a href="${process.env.URL_BACKEND}administradores/recuperarpassword/${token}" style="background-color: #007bff; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">Reestablecer Contraseña</a></p>
                <p>Si no realizaste esta solicitud, puedes ignorar este correo. Tu contraseña permanecerá segura.</p>
                <hr>
                <footer style="font-size: 0.9em; color: #777;">
                    El equipo de <strong>QuitoEmprende</strong> te da la más cordial bienvenida.
                </footer>
            </div>
        `
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log("Error al enviar correo: ", error);
        } else {
            console.log("Mensaje enviado satisfactoriamente: ", info.messageId);
        }
    });
};


export {
    sendMailToRegister,
    sendMailToRecoveryPassword
}