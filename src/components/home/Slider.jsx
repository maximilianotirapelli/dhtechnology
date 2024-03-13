import PropTypes from 'prop-types';
import CardSlider from '@/components/home/CardSlider';
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';
import { Button } from '@/components/ui/button';

Slider.propTypes = {
  categories: PropTypes.array,
  handleClickFilterProducts: PropTypes.func,
};

export default function Slider({ categories, handleClickFilterProducts }) {
  const slider = document.getElementById('slider');

  const slideLeft = () => {
    slider.scrollLeft -= 300;
  };

  const slideRight = () => {
    slider.scrollLeft += 300;
  };

  return (
    <div className="mt-10 flex flex-col">
      <div className="mb-6 ml-4 text-2xl sm:ml-24 sm:text-3xl">Categorías</div>
      <div className="h-full w-full overflow-hidden">
        <div className="relative mx-2 flex items-center justify-center">
          <Button
            variant="icon"
            size="icon"
            onClick={slideLeft}
            className="cursor-pointer opacity-50 hover:opacity-100"
          >
            <MdArrowCircleLeft className="text-3xl sm:text-4xl" />
          </Button>

          <div
            id="slider"
            className="h-full w-full max-w-[1410px] overflow-hidden scroll-smooth whitespace-nowrap"
          >
            {categories.map((category) => (
              <CardSlider
                handleClickFilterProducts={handleClickFilterProducts}
                key={category.id}
                category={category}
              />
            ))}
          </div>

          <Button
            variant="icon"
            size="icon"
            onClick={slideRight}
            className="cursor-pointer opacity-50 hover:opacity-100"
          >
            <MdArrowCircleRight className="text-3xl sm:text-4xl" />
          </Button>
        </div>
      </div>
    </div>
  );
}
