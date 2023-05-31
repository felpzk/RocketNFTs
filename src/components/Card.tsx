import Image from "next/image";

import arrow from '../../public/assets/arrow-white.svg'

interface CardProps {
  image: any
  name: string
  nft: string
  price: string
}

export function Card({image,name,nft,price} : CardProps) {
  return (
    <div className="w-[380px] flex flex-col justify-items-center gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-text-color text-3xl">{nft}</h2>
        <Image width={25} height={25} src={arrow} alt=""/>
      </div>  
      <div className="flex items-center justify-between">
        <p className="text-subtitle-color text-sm">{name}</p>
        <p className="text-sm text-color-logo">{price} {''} RKT</p>
      </div>
      <Image src={image} width={380} height={200} alt="nft"/>
    </div>
  )
}