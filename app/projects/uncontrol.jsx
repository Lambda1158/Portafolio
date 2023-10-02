"use client";
import { useState } from "react";
import { UncontrolledCarousel, Button } from "reactstrap";
import img from "../../public/imagen-muestra.webp";
const CarouselWithButtons = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Definir los items del carousel
  const items = [
    {
      src: img,
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: img,
      altText: "Slide 2",
      caption: "Slide 2",
    },
    // Agrega más slides según tus necesidades
  ];

  return (
    <div>
      <UncontrolledCarousel
        items={items}
        activeIndex={activeIndex}
        // Otros props del carousel según tus necesidades
      />
      <Button onClick={previous}>Anterior</Button>
      <Button onClick={next}>Siguiente</Button>
    </div>
  );
};

export default CarouselWithButtons;
