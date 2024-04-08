import creada from "../../public/recipes.photos/creada.png";
import recipe from "../../public/recipes.photos/create recipe.png";
import detailC from "../../public/recipes.photos/detail creada.png";
import detail from "../../public/recipes.photos/detail.png";
import general from "../../public/recipes.photos/general.png";
import landing from "../../public/recipes.photos/landing page.png";
import responsive1 from "../../public/recipes.photos/responsive 1.png";
import responsive2 from "../../public/recipes.photos/responsive 2.png";
import menu from "../../public/portafolio.photos/menu.png";
import about from "../../public/portafolio.photos/about.png";
import about1 from "../../public/portafolio.photos/about1.png";
import card from "../../public/portafolio.photos/card.png";
import contact from "../../public/portafolio.photos/contact.png";
import landing1 from "../../public/portafolio.photos/landing.png";
import mail from "../../public/portafolio.photos/mail.png";
import project from "../../public/portafolio.photos/project.png";

const projectData = [
  {
    image: [landing, recipe, detailC, detail, general, creada],
    description:
      "SPA (single page app) hecha con React para el front end y express-sequelize-postgreSQL para el back end, se comunica con un endpoint a la api spoonacular y permite filtar buscar y crear recetas",
    title: "Gusto Gourmet",
    github: "https://github.com/Lambda1158/Recipes-App",
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
  },
];

export default projectData;
