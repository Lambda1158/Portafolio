import Image from "next/image";
import { useState } from "react";
const ImageModal = ({ src, alt, onClose }) => (
  <div className=" absolute mt-0 ml-0" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={src} alt={alt} className="modal-image" onClick={onClose} />
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
