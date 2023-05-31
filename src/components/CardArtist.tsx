'use client'

import Image from "next/image";
import { useState } from "react";

interface CardArtistProps {
  name: string
  fotos: string
  image: any
}

export function CardArtist( {fotos,image,name} : CardArtistProps) {
  const [selected, setSelectd] = useState<boolean>(false)

  const handleSelectd = () => {
    setSelectd(!selected)  
  }

  return (
    <div className={`flex items-center p-4 justify-around w-[350px]
      ${selected ? 'bg-color-logo' : 'bg-card-color'} rounded-md cursor-pointer
    `}
      onClick={handleSelectd}
    >
      <Image src={image} width={100} height={100} alt={`foto do ${name}`}/>
      <div className="flex flex-col gap-3">
        <h2 className="text-text-color">{name}</h2>
        <span className={`${selected ? 'text-text-color' : 'text-color-logo'}
        `}>{fotos} Fotografias</span>
      </div>
    </div>
  )
}