import Image from "next/image";

const Carousel = (data) => {
  return (
    <div className=" overflow-hidden">
      <div className="flex justify-start items-center gap-[15px] overflow-x-scroll p-[30px] pb-[30px]">
        {data.data.image.map((Item, Index) => (
          <Image
            key={Index}
            src={Item.src}
            alt={"imagenNumber" + Index}
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
