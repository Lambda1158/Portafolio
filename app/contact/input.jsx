const Input = ({ type, id, name, placeholder }) => {
  return (
    <input
      className=" h-14  text-2xl bg-letra text-background  rounded-[4px] placeholder:text-background placeholder:font-bold placeholder:px-5"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required
    />
  );
};
export default Input;
