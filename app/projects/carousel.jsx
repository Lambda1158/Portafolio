import Image from "next/image";
import { useState } from "react";
const ImageModal = ({ src, alt, onClose }) => (
  <div
    className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-magenta bg-opacity-20 z-50"
    onClick={onClose}
  >
    <div onClick={(e) => e.stopPropagation()}>
      <img
        src={src}
        alt={alt}
        className="w-[400px] sm:w-[600px] gm:w-[800px] lm:w-[1000px] xl:w-[1100px]"
        onClick={onClose}
      />
    </div>
  </div>
);
const Carousel = (data) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className=" overflow-hidden">
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Selected Image"
          onClose={handleCloseModal}
        />
      )}
      <div className="flex justify-start items-center gap-[15px] overflow-x-scroll p-[30px] pb-[30px]">
        {data.data.image.map((Item, Index) => (
          <Image
            key={Index}
            src={Item.src}
            alt={"imagenNumber" + Index}
            width={300}
            height={300}
            onClick={() => handleImageClick(Item.src)}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
