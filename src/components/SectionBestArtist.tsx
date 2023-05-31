import Image from 'next/image'

import arrowOrange from '../../public/assets/arrow-orange.svg'

export function SectionBestArtist() {
  return (
    <div>
      <h2>Melhores <span>Artistas</span></h2>
      <div>
        <div></div>
        <div></div>
      </div>
      <button>
        Ver todos artistas
        <Image src={arrowOrange} width={20} height={20} alt=''/>
      </button>
    </div>
  )
}