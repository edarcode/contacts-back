import { transporter } from "../../../services/transporter";

export const sendMailToVerifySignupService = async (
  to: string,
  link: string
) => {
  return await transporter.sendMail({
    from: process.env.NODEMAILER_GMAIL,
    to,
    subject: "Vericar email usado en Contacts💪",
    html: `<a href=${link} style="color: royalblue">Haz clic en mí para verificar el registro</a>`,
  });
};
