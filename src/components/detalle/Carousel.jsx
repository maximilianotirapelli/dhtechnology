import { useState } from 'react';
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdBrightness1,
} from 'react-icons/md';

//TODO colocar las imágenes cuando tengamos la API
export const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div
        className="relative h-full w-full whitespace-nowrap transition-transform duration-300"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.image}
            alt="drone"
            className="inline-flex h-full w-full items-center justify-center whitespace-normal rounded-md border-0 duration-1000"
          />
        ))}
      </div>

      <div className="absolute bottom-6 flex w-4/6 justify-between bg-white bg-opacity-40 py-[2px] px-4 rounded-full">
        <button
          className="border-none text-black"
          variant="outline"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <MdArrowBackIos className="text-3xl text-black" />
        </button>

        <div className="flex gap-4 border-none text-black">
          {images.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                updateIndex(index);
              }}
              variant="outline"
              size="icon"
            >
              <MdBrightness1
                className={`${index === activeIndex && 'text-white'}`}
              />
            </button>
          ))}
        </div>

        <button
          className="border-none text-black"
          variant="outline"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <MdArrowForwardIos className="text-3xl text-black" />
        </button>
      </div>
    </div>
  );
};
