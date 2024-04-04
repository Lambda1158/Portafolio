import { mailOptions, transporter } from "@/config/nodemailer";

const htmlContenido = (data) => {
  const text = Object.entries(data).reduce(
    (str, [key, value]) => (str += `	${key}: \n ${value} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce(
    (str, [key, value]) => (str += `<p>${key}: ${value}</p>`),
    ""
  );
  return {
    text,
    html: `<html><head><style>div{width:600px;background-color:#ffe6e6;border-radius:10px;padding:5px;text-align:center}p{color:#ad88c6;line-height:1.6}h1,h2{color:#7469b6;text-decoration:underline}</style></head><body><h1>Hola!<h2>Este mail fue enviado desde el Portafolio</h2>${htmlData}</body></html>`,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const body = req.body;
    Object.values(body).some((e) => {
      if (typeof e === "undefined") {
        return res.status(400).json({ message: "campos mal llenados" });
      }
    });
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: body.subject,
        ...htmlContenido(body),
      });
      return res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
