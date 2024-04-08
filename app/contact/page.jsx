"use client";
import Header from "../components/header/header";
import Form from "./form";
import Wrapper from "../components/wrapper";
import Footer from "../about/footer";

export default function Contacto() {
  return (
    <Wrapper>
      <section
        className="bg-background  min-h-screen  max-h-[100%] "
        key="/contacto"
      >
        <div className=" mx-auto max-w-[1285px]  px-4 text-letra mb-6 ">
          <Header />
          <div className=" px-5 h-auto">
            <h1 className=" indent-6 decoration-8 text-left border-b-4 border-b-letra text-4xl font-light inline-block">
              👋🏼 Say Hello
            </h1>
            <p className=" py-5 text-2xl font-light decoration-wavy indent-2">
              Si quieres saber mas de mi no dudes en enviarme un mensaje 😇
            </p>
            <Form />
          </div>
        </div>
        <Footer />
      </section>
    </Wrapper>
  );
}
