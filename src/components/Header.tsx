import Image from 'next/image'

import logo from '../../public/assets/logo.svg'
import dog from '../../public/assets/logo_MetaMask.svg'

export function Header() {
  return (
    <div className='flex items-center justify-between pt-10 px-64'>
      <Image src={logo} width={265} height={43} alt='Logo da rocket NFTs'/>

      <ul className='flex gap-12'>
        <li>
          <a className='text-white' href="#">Comprar NFT</a>
        </li>
        <li>
          <a className='text-white' href="#">Sobre</a>
        </li>
        <li>
          <a className='text-white' href="#">FAQ</a>
        </li>
      </ul>

      <button className={`flex justify-center items-center h-12 w-60 p-4 
       bg-white gap-4 font-bold rounded-sm`}>
        <Image src={dog} width={30} height={30} alt=''/>
        Conectar carteira
      </button>
      
    </div>
  )
}