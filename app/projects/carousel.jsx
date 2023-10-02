import Example from "../../public/imagen-muestra.webp";
import Image from "next/image";
var items = [
  { src: Example, alt: "img1", w: 300 },
  { src: Example, alt: "img2", w: 300 },
  { src: Example, alt: "img3", w: 300 },
  { src: Example, alt: "img4", w: 300 },
  { src: Example, alt: "img5", w: 300 },
  { src: Example, alt: "img6", w: 300 },
  { src: Example, alt: "img7", w: 300 },
];
const Carousel = () => {
  return (
    <div className=" overflow-hidden">
      <div className="flex justify-start items-center gap-[15px] overflow-x-scroll pb-[10px]">
        {items.map((Item, Index) => (
          <Image key={Index} src={Item.src} alt={Item.alt} width={Item.w} />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
