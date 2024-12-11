import creada from "../../public/recipes.photos/creada.png";
import recipe from "../../public/recipes.photos/create recipe.png";
import detailC from "../../public/recipes.photos/detail creada.png";
import detail from "../../public/recipes.photos/detail.png";
import general from "../../public/recipes.photos/general.png";
import landing from "../../public/recipes.photos/landing page.png";
import menu from "../../public/portafolio.photos/menu.png";
import about from "../../public/portafolio.photos/about.png";
import about1 from "../../public/portafolio.photos/about1.png";
import card from "../../public/portafolio.photos/card.png";
import contact from "../../public/portafolio.photos/contact.png";
import landing1 from "../../public/portafolio.photos/landing.png";
import mail from "../../public/portafolio.photos/mail.png";
import project from "../../public/portafolio.photos/project.png";
import cardcomerce from "../../public/ecomerce.photos/cardcomerce.png";
import carrito from "../../public/ecomerce.photos/carrito.png";
import homeecomerce from "../../public/ecomerce.photos/home.png";
import landingcomerce from "../../public/ecomerce.photos/landingcomerce.png";
import profilecomerce from "../../public/ecomerce.photos/profile.png";
import profilecomerce2 from "../../public/ecomerce.photos/profile 2.png";

const projectData = [
  {
    image: [landing, recipe, detailC, detail, general, creada],
    description:
      "SPA (single page app) hecha con React para el front end y express-sequelize-postgreSQL para el back end, se comunica con un endpoint a la api spoonacular y permite filtar buscar y crear recetas",
    title: "Gusto Gourmet",
    github: "https://github.com/Lambda1158/Recipes-App",
    live: "https://recipes-app-ten-alpha.vercel.app/",
  },
  {
    image: [
      landingcomerce,
      homeecomerce,
      carrito,
      profilecomerce,
      profilecomerce2,
      cardcomerce,
    ],
    description:
      "Este proyecto es un e-commerce desarrollado utilizando React con Redux Toolkit para el frontend y Node.js con Express y Sequelize para el backend. Permite a los usuarios comprar y vender clases personalizadas.",
    title: "Hi-talent e-comerce",
    github: "https://github.com/Lambda1158/Portafolio",
    live: "https://portafolio-gamma-sooty.vercel.app/",
  },
  {
    image: [landing1, menu, about, about1, card, contact, mail, project],
    description:
      "Aplicacion hecha en Next.13 y librerias como framer motion, react-hot-toast y nodemailer donde puede recibir mails personalizados.",
    title: "Portafolio",
    github: "https://github.com/Lambda1158/Portafolio",
    live: "https://portafolio-gamma-sooty.vercel.app/",
  },
  {
    image: [landing, recipe, detailC, detail, general, creada],
    description:
      "SPA (single page app) hecha con React para el front end y express-sequelize-postgreSQL para el back end, se comunica con un endpoint a la api spoonacular y permite filtar buscar y crear recetas",
    title: "Gusto Gourmet",
    github: "https://github.com/Lambda1158/Recipes-App",
    live: "https://recipes-app-ten-alpha.vercel.app/",
  },
];

export default projectData;
