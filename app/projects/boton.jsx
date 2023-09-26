const Boton = ({ Icon, prop }) => {
  return (
    <button
      className={
        prop
          ? "relative overflow-hidden p-3 bg-letra rounded-full  hover:scale-130 transform transition-transform duration-300 ease-in-out " +
            prop
          : "relative overflow-hidden p-3 bg-letra rounded-full  hover:scale-130 transform transition-transform duration-300 ease-in-out"
      }
    >
      <Icon className="text-3xl" />
    </button>
  );
};
export default Boton;
