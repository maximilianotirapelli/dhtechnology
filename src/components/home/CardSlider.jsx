import PropTypes from "prop-types";
import { useState } from "react";

CardSlider.propTypes = {
  category: PropTypes.object,
  handleClickFilterProducts: PropTypes.func,
};

export default function CardSlider({ category, handleClickFilterProducts }) {
  const [selectedCategory, setSelectedCategory] = useState(false);

  return (
    <div
      className={`bg-white w-[250px] cursor-pointer inline-block mx-4 p-4 md:p-6 rounded-md border border-gray-300 hover:border-gray-500 shadow-md transition-all duration-300 ease-in-out ${
        selectedCategory && "border-primary hover:border-primary"
      }`}
      onClick={() => {
        handleClickFilterProducts(category.name);
        setSelectedCategory(!selectedCategory);
      }}
    >
      <div className="flex justify-center items-center mb-4">
        <img
          src={category.image}
          className="w-full h-[140px] object-cover rounded-t-md"
          alt={category.name}
        />
      </div>

      <div className="border"></div>

      <h2 className="pt-4 text-base text-primary opacity-80 sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-semibold">
        {category.name}
      </h2>

      {/* <button className="mt-2 md:mt-4 lg:mt-8 xl:mt-4 2xl:mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 cursor-pointer transition-all duration-300 ease-in-out text-base sm:text-lg md:text-lg xl:text-base 2xl:text-lg w-full md:w-auto">
          Ver detalles
        </button> */}
    </div>
  );
}
