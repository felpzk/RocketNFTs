import Image from "next/image";

import nft1 from '../../public/assets/galeria-1.png'
import nft2 from '../../public/assets/galeria-2.png'
import nft3 from '../../public/assets/galeria-3.png'
import nft4 from '../../public/assets/galeria-4.png'
import nft5 from '../../public/assets/galeria-5.png'
import nft6 from '../../public/assets/galeria-6.png'
import nft7 from '../../public/assets/galeria-7.png'
import nft8 from '../../public/assets/galeria-8.png'


export function SectionNft() {
  return (
    <div className="flex flex-col gap-10 px-64">
      <div className="grid grid-cols-4 gap-16">
        <Image className='border' src={nft1} width={307} height={198} alt=""/>
        <Image className='border' src={nft2} width={307} height={198} alt=""/>
        <Image className='border' src={nft3} width={307} height={198} alt=""/>
        <Image className='border' src={nft4} width={307} height={198} alt=""/>
      </div>
      <div className="grid grid-cols-4 gap-16">
        <Image className='border' src={nft5} width={307} height={198} alt=""/>
        <Image className='border' src={nft6} width={307} height={198} alt=""/>
        <Image className='border' src={nft7} width={307} height={198} alt=""/>
        <Image className='border' src={nft8} width={307} height={198} alt=""/>
      </div>
    </div>
  )
}