import React from 'react'
import { MdOutlineStar } from 'react-icons/md'
import ShareButton from '@/components/custom-ui/WebShare';

export const ProductDetail = ({product}) => {
    return (
        <div className="flex w-1/4 flex-col p-2 ">
            <h1 className="text-xl font-bold">{product.name}</h1>

            <div
                className="flex w-14 items-center justify-center rounded-md 
                bg-blue-600 font-semibold text-white "
            >
                <MdOutlineStar className="mr-[3px] text-xl text-yellow-400" />
                <span>{product.rating}</span>
            </div>

            <div className="flex justify-between flex-wrap pt-4 text-gray-600 ">
                <div className="flex gap-1">
                    <img className='w-6' src="/img/shop.webp" alt="Stock" />
                    <span>En Stock</span>
                </div>
                <div className="flex gap-1">
                    <img className="w-6" src="/img/verify.webp" alt="Guarantee" />
                    <span>Garantía</span>
                </div>
                <div className="flex gap-1">
                    <img className="w-6" src="/img/truck.webp" alt="Free shipping" />
                    <span>Envío gratis</span>
                </div>
            </div>

            <h2 className="mt-6">{product.description}</h2>

            <div className="mt-8 flex items-center text-3xl font-semibold">
                ${product.price}
                <span className="ml-2 text-xl font-normal">/ Día.</span>
            </div>

            <div className=" flex justify-end py-4 ">
                <ShareButton />
            </div>
        </div>
    )
}
