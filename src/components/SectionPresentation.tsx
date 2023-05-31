import Image from 'next/image'

import groupAvatars from '../../public/assets/group-avarts.png'
import logoNFT from '../../public/assets/badge.svg'

export function SectionPresentation() {
  return (
    <div className={`flex items-center gap-10 justify-between px-64`}>
      <div className={`flex flex-col gap-12 w-[400px]`}>
        <p className='w-96 text-text-color'>
          Mercado digital para colecionáveis em criptos
          e tokens não fungível (NFT).
          Compre, venda e descubra ativos digitais exclusivos para você.
        </p>
        <div className='flex items-end gap-3'>
          <Image src={groupAvatars} width={169} height={87} alt='Grupo de pessoas' />
          <p className='w-96 text-text-color'>
            <b>+10</b> <br />
            Artistas selecionados
          </p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-text-color text-5xl leading-10}'>
          Descubra a verdadeira <br/>
          arte digital e <br/> colecione diversas <br/>
          <span className='text-color-logo'>NFTs</span>
        </h1>
      </div>
      <Image src={logoNFT} width={200} height={200} alt='logo NFT' />
    </div>
  )
}