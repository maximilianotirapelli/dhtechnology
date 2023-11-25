import { useState } from "react"
import { MdArrowBackIos, MdArrowForwardIos, MdBrightness1 } from "react-icons/md";


//TODO colocar las imágenes cuando tengamos la API
export const Carousel = ({ images }) => {

  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">

      <div
        className="w-full h-full transition-transform duration-300 whitespace-nowrap relative"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >

        {
          images.map((img) => <img
            key={img.image}
            src={img.image}
            alt="drone"
            className="w-full h-full inline-flex justify-center items-center duration-1000 whitespace-normal border-0 rounded-md"
          />)
        }

      </div>

      <div className="flex justify-between absolute bottom-6 w-4/6">

        <button
          className="text-black border-none"
          variant="outline"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <MdArrowBackIos className="text-3xl text-black" />
        </button>

        <div className="flex text-black border-none gap-4">
          {
            images.map((item, index) =>
              <button
                key={index}
                onClick={() => { updateIndex(index) }}
                variant="outline"
                size="icon"
              >
                <MdBrightness1 className={`${index === activeIndex && "text-amber-500"}`} />
              </button>
            )
          }
        </div>

        <button
          className="text-black border-none"
          variant="outline"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <MdArrowForwardIos className="text-3xl text-black" />
        </button>
      </div>

    </div>
  )
}