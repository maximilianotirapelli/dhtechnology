import {
    MdControlCamera,
    MdCyclone,
    MdOutlineElectricBolt,
    MdOutlineMemory,
    MdOutlineWater,
  } from 'react-icons/md'

export const Characteristics = () => {
    return (
        <div className="mt-10">

            <h2 className="flex mb-4 mx-4 border-b-2 pb-2 text-2xl">
                Características
            </h2>

            <div className="mx-4 flex flex-col ml-12 gap-10">
                <div className="flex items-center gap-2">
                    <MdOutlineMemory className="text-xl" />
                    <span>Dos motores</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdCyclone className="text-xl" />
                    <span>Cuatro aspas</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdOutlineWater className="text-xl" />
                    <span>Resistente al agua</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdControlCamera className="text-xl" />
                    <span>Control remoto</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdOutlineElectricBolt className="text-xl" />
                    <span>Luces led</span>
                </div>
            </div>

            {/* <div className="mx-6 py-4 flex flex-col justify-between font-semibold list-disc">
          {product.characteristics?.map((c, i) => (
            <li key={i}>{c.characteristic}</li>
          ))}
        </div> */}
        </div>
    )
}
