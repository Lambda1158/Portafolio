'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState } from 'react';

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-3xl text-crema hover:text-magenta hover:scale-125 duration-300 transition"
  >
    ❮
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-3xl text-crema hover:text-magenta hover:scale-125 duration-300 transition"
  >
    ❯
  </button>
);

export default function Carousel({ data }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="mt-4 ">
      <Slider {...settings}>
        {data?.map((element, index) => (
          <img
            className="w-[150px] cursor-pointer hover:scale-105 duration-300 sm:px-4 px-1 h-[150px] object-cover"
            key={index}
            alt={element.blurDataURL}
            src={element.src}
            onClick={() => setSelectedImage(element.src)}
          />
        ))}
      </Slider>
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            className="max-w-[90%] max-h-[90%] rounded-lg"
            src={selectedImage}
            alt="Selected"
          />
        </div>
      )}
    </div>
  );
}
