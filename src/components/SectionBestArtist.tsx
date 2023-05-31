import Image from 'next/image'

import arrowOrange from '../../public/assets/arrow-orange.svg'
import artista1 from '../../public/assets/artista-1.png'
import artista2 from '../../public/assets/artista-2.png'
import artista3 from '../../public/assets/artista-3.png'

import { CardArtist } from './CardArtist'

export function SectionBestArtist() {
  return (
    <div className='flex items-center flex-col p-24'>
      <h2 className='text-text-color text-5xl font-bold'>Melhores 
       {''} <span className='text-color-logo'>Artistas</span>
      </h2>
      <div className='flex flex-col gap-12 my-20'>
        <div className='grid grid-cols-3 gap-24'>
          <CardArtist fotos='80' name='Mayk Brito' image={artista1}/>
          <CardArtist fotos='80' name='Mayk Brito' image={artista2}/>
          <CardArtist fotos='80' name='Mayk Brito' image={artista3}/>
        </div>
        <div className='grid grid-cols-3 gap-24'>
          <CardArtist fotos='80' name='Mayk Brito' image={artista1}/>
          <CardArtist fotos='80' name='Mayk Brito' image={artista1}/>
          <CardArtist fotos='80' name='Mayk Brito' image={artista1}/>
        </div>
      </div>
      <button className='flex gap-5 text-text-color items-center'>
        Ver todos artistas
        <Image src={arrowOrange} width={12} height={20} alt=''/>
      </button>
    </div>
  )
}