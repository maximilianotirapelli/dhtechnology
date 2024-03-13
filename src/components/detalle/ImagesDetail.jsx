import React from 'react'

export const ImagesDetail = ({ images, setIsOpen }) => {
    
    return (
        <div className="flex flex-col rounded-md border-none bg-white ">
            <img
                src={!!images ? images[0].image : '/img/drone2.webp'}
                alt="product-img"
                className="w-[450px] h-full max-h-[450px] rounded-lg border-0"
            />

            <div className="flex gap-2 mx-2 mt-2">
                {
                    !!images && images.map((img, index) => <img
                        key={index}
                        src={
                            !!img ? img.image : '/img/drone2.webp'
                        }
                        alt="product-img"
                        className="w-6 h-6 rounded-lg border-0"
                    />)
                }

                <span
                    className=" text-blue-600 hover:cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    Ver galería...
                </span>
            </div>

        </div>
    )
}
