"use client";
import Input from "./input";
import { useState } from "react";
import { SiGmail, SiGooglecalendar } from "react-icons/si";

const Form = () => {
  const [input1, setInput1] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
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
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    alert("click boton");
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
        <form>
          <div className=" mx-14  flex flex-col gap-5 gm:flex-row justify-between  py-5">
            <Input
              required
              type={"text"}
              id={"nombre"}
              name={"nombre"}
              placeholder={"Your Name*"}
              value={input1.name}
              onChange={handleChange}
            />
            <Input
              required
              type={"email"}
              id={"email"}
              name={"email"}
              placeholder={"Your Email*"}
              value={input1.mail}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-5 mx-14">
            <input
              className=" h-14 text-2xl bg-letra text-background  rounded-[4px] placeholder:text-background placeholder:font-bold placeholder:px-5"
              type={"text"}
              id={"asunto"}
              name={"asunto"}
              placeholder={"Subject*"}
              value={input1.subject}
              onChange={handleChange}
            />

            <textarea
              className=" h-14 rounded-[4px] placeholder:text-2xl placeholder:px-5  bg-letra text-background placeholder:text-background placeholder:font-bold"
              id="mensaje"
              name="mensaje"
              rows="3"
              required
              value={input1.message}
              placeholder="Your Message*"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-center py-4">
            <button
              type="submit"
              disabled={false}
              onClick={handleOnSubmit}
              className="  font-semibold tracking-[1px] text-[18px] x text-magenta hover:text-letra uppercase py-[10px] px-[32px] rounded-[5px]  bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] transition duration-100"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
