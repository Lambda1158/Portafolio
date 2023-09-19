const Item = ({ title, content }) => {
  return (
    <>
      <h2 className=" py-5 font-bold text-3xl sm:text-5xl">{title}</h2>
      <p className=" py-2 font-bold text-1xl sm:text-3xl">{content}</p>
    </>
  );
};
const contenido = [
  {
    title: "Languages",
    content: " Typescript | Javascript | Java | Python | C++ | HTML | CSS.",
  },
  {
    title: "FrameWorks , Libraries, Others",
    content:
      "React.js | Next.js | Tailwind | Boostrap | Redux Toolkit | Node.js | Express | Mysql.",
  },
  { title: "Tools", content: "Figma | Git | Github | Postman." },
  { title: "Learning", content: " MongoDB | Angular | Nest.js." },
];

const Habilidades = () => {
  return (
    <section id="experience-section" className="mx-8 sm:mx-0 text-letra">
      <h1 className=" py-3 text-5xl sm:text-7xl font-semibold">Skills</h1>
      {contenido.map((e, index) => (
        <Item key={index} title={e.title} content={e.content} />
      ))}
    </section>
  );
};

export default Habilidades;
