"use client";
import { useState } from "react";
import { SiGmail, SiGooglecalendar } from "react-icons/si";
import { sendContactForm } from "@/lib/api";

const Form = () => {
  const [stateButton, setStateButton] = useState({
    loading: false,
    send: false,
  });
  const [input1, setInput1] = useState({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setInput1({
      ...input1,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStateButton({ ...stateButton, loading: true });
    if (!input1.name || !input1.subject || !input1.mail || !input1.message) {
      setStateButton({ ...stateButton, loading: false });
      return alert("debe llenar el formulario primero");
    }
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(input1),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      setInput1({ ...input1, name: "", mail: "", subject: "", message: "" });
      setStateButton({ ...stateButton, send: true, loading: false });
      if (!res.ok) throw new Error("Failed to send the mail");
      return res.json();
    });
  };
  return (
    <div className=" rounded-[50px] text-letra shadow-2xl  ">
      <div className=" mx-10 flex gm:flex-row flex-col justify-around gap-12  py-5 ">
        <div className="  rounded-[15px]  h-[150px] p-[24px] shadow-2xl ">
          <SiGmail className="  hover:scale-150 transform transition-transform duration-300 ease-in-out mx-auto text-4xl"></SiGmail>
          <p className="text-letra  text-center  font-light py-2 ">
            brunoherrera118@gmail.com
          </p>
          <p className=" text-center opacity-80">Email me</p>
        </div>
        <div className="  rounded-[15px]  h-[150px] p-[24px] shadow-2xl ">
          <SiGooglecalendar className="  hover:scale-150 transform transition-transform duration-300 ease-in-out mx-auto text-5xl"></SiGooglecalendar>
          <p className="text-letra text-xl text-center  font-light py-2 w-auto  gm:w-[250px] ">
            Calendly
          </p>
          <p className=" text-center opacity-80 w-auto  gm:w-[250px] ">
            Schedule a Meeting
          </p>
        </div>
      </div>
      <div>
        <h1 className=" text-3xl mx-14 underline underline-offset-8 py-6 font-light ">
          Contact Form
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div className=" mx-14  flex flex-col gap-5 gm:flex-row justify-between  py-5">
            <input
              className=" h-14 text-2xl pl-4 bg-letra text-background  rounded-[4px] placeholder:text-background placeholder:font-medium placeholder:px-5"
              required
              type={"text"}
              id={"nombre"}
              name={"name"}
              placeholder={"Your Name*"}
              value={input1.name}
              onChange={handleChange}
            />
            <input
              className=" h-14 text-2xl pl-4 bg-letra text-background  rounded-[4px] placeholder:text-background placeholder:font-medium placeholder:px-5"
              required
              type={"email"}
              id={"email"}
              name={"mail"}
              placeholder={"Your Email*"}
              value={input1.mail}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-5 mx-14">
            <input
              className=" h-14 text-2xl pl-4 bg-letra text-background  rounded-[4px] placeholder:text-background placeholder:font-medium placeholder:px-5"
              type={"text"}
              id={"asunto"}
              name={"subject"}
              placeholder={"Subject*"}
              value={input1.subject}
              onChange={handleChange}
            />

            <textarea
              className=" h-14 pl-4 rounded-[4px] placeholder:text-2xl text-2xl placeholder:px-5 py-2 bg-letra text-background placeholder:text-background placeholder:font-medium"
              id="mensaje"
              name="message"
              rows="3"
              required
              value={input1.message}
              placeholder="Your Message*"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-center py-4">
            {stateButton.loading && <p>algo q muestra que carga</p>}

            {!stateButton.send ? (
              <button
                type="submit"
                onClick={handleOnSubmit}
                className=" font-semibold  tracking-[1px] text-2xl 	 text-magenta hover:text-letra py-[10px] px-[32px] rounded-[5px]  bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] hover:scale-105 transition duration-100"
              >
                Send
              </button>
            ) : (
              <p className=" font-light text-2xl p-2">E-mail sent</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
