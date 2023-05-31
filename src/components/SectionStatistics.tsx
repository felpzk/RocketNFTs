import Image from "next/image";

import banner from '../../public/assets/banner.png'

export function SectionStatistics() {
  return (
    <div className="flex border-b border-card-color w-full">
      <div className="border-r border-b py-24 border-card-color w-96 flex flex-col gap-16 items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-text-color font-bold text-5xl leading-9 text-center">10K+</h2>
          <span className="text-subtitle-color text-center text-2xl">Artes</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-text-color font-bold text-5xl leading-9 text-center">200+</h2>
          <span className="text-subtitle-color text-center text-2xl">Vendas</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-text-color font-bold text-5xl leading-9 text-center">20</h2>
          <span className="text-subtitle-color text-center text-2xl">Artista</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-around">
            <div className="w-[500px] flex flex-col gap-12 p-12">
              <p className="text-text-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Congue malesuada amet pretium lacus. 
                Id <span className="text-color-logo">potenti diam</span> et cras odio viverra. 
                Amet, velit ut hac sit. 
                Enim ultricies mauris mattis nunc semper.
              </p>

              <span className="text-text-color underline">Lorem ipsum</span>
            </div>
            <div className="w-[500px] flex flex-col gap-12 p-12">
              <p className="text-text-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Congue malesuada amet pretium lacus. 
                Id <span className="text-color-logo">potenti diam</span> et cras odio viverra. 
                Amet, velit ut hac sit. 
                Enim ultricies mauris mattis nunc semper.
              </p>

              <span className="text-text-color underline">Lorem ipsum</span>
            </div>
          </div> 
          <div >
            <Image src={banner} 
              width={1800} 
              height={300}
              alt="Homem com oculos escuro" 
              className="h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}