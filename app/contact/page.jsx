"use client";
import Header from "../components/header/header";
import Form from "./form";
import Wrapper from "../components/wrapper";

export default function Contacto() {
  return (
    <Wrapper>
      <section className="bg-background " key="/contacto">
        <div className=" mx-auto max-w-[1285px]  px-5 py-3 overflow-auto text-letra h-screen">
          <Header />
          <div className=" px-5 h-auto">
            <h1 className=" indent-6 decoration-8 text-left border-b-4 border-b-letra text-4xl font-light inline-block">
              👋🏼 Say Hello
            </h1>
            <p className=" py-5 text-2xl font-light decoration-wavy indent-2">
              If you want to know more about me or my work, send me a message.
              I&apos;d love to hear from you.
            </p>
            <Form></Form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
