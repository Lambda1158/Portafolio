const Item = ({ title, content }) => {
  return (
    <>
      <h2 className=" py-5 font-semibold text-3xl sm:text-5xl">{title}</h2>
      <p className=" font-normal text-1xl sm:text-3xl">{content}</p>
    </>
  );
};

const Habilidades = () => {
  return (
    <section id="experience-section" className=" text-letra">
      <h1 className=" py-3 text-5xl sm:text-7xl font-semibold">Skills</h1>
      <Item title={"Languages"} content={"Javascript | Java | Python | C++"} />
      <Item title={"Languages"} content={"Javascript | Java | Python | C++"} />
      <Item title={"Languages"} content={"Javascript | Java | Python | C++"} />
      <Item title={"Languages"} content={"Javascript | Java | Python | C++"} />
    </section>
  );
};

export default Habilidades;
