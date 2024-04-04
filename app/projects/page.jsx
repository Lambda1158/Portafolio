"use client";
import Card from "./card";
import Header from "../components/header/header";
import Modal1 from "./modal1";
import Footer from "../about/footer";
import Example from "../../public/imagen-muestra.webp";
import { useState } from "react";
import Wrapper from "../components/wrapper";
import creada from "../../public/recipes.photos/creada.png";
import recipe from "../../public/recipes.photos/create recipe.png";
import detailC from "../../public/recipes.photos/detail creada.png";
import detail from "../../public/recipes.photos/detail.png";
import general from "../../public/recipes.photos/general.png";
import landing from "../../public/recipes.photos/landing page.png";
import responsive1 from "../../public/recipes.photos/responsive 1.png";
import responsive2 from "../../public/recipes.photos/responsive 2.png";

const template = {
  gusto: {
    image: [landing, recipe, detailC, detail, general, creada],
    description:
      "Single page aplication hecha con react para el front end y express para el back end, se comunica con un endpoint a la api spoonacular y permite filtar buscar y crear recetas",
    title: "Gusto Gourmet",
    github: "https://github.com/Lambda1158/Recipes-App",
  },
};

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState({ state: false, project: {} });
  const openModal = (e) => setIsModalOpen({ state: true, project: e });
  const closeModal = () => setIsModalOpen({ state: false, project: {} });
  return (
    <>
      <Wrapper>
        <section className=" bg-background ">
          <div className=" mx-auto max-w-[1285px] px-5 pb-24  gm:w-auto ">
            <Header />
            <h1 className=" py-7 text-5xl sm:text-7xl text-left text-letra font-normal hover:scale-95 transform transition-transform duration-300 ease-in-out">
              Learning Projects
            </h1>
            <div className="grid gap-x-[20px] gap-y-[20px] grid-cols-1 gm:grid-cols-2">
              <Card openModal={openModal} data={template.gusto} />
              <Card openModal={openModal} data={template.gusto} />
              <Card openModal={openModal} data={template.gusto} />
              <Card openModal={openModal} data={template.gusto} />
            </div>
          </div>
          <Footer />
        </section>
      </Wrapper>
      <Modal1
        isOpen={isModalOpen.state}
        data={isModalOpen.project}
        onClose={closeModal}
      />
    </>
  );
}
