import { Card } from "./Card";

import ast1 from '../../public/assets/astronauta 1.png'
import ast2 from '../../public/assets/astronauta-2.png'
import ast3 from '../../public/assets/astronauta-3.png'
import ast4 from '../../public/assets/astronauta-4.png'

export function SectionPopWeek() {
  return (
    <div>
      <div className="px-32 py-32">
        <h2 className="text-text-color text-5xl">
          <span className="text-color-logo">Populares</span>
          {''} da semana
        </h2>
      </div>
      <div className="flex items-center justify-around h-[680px] overflow-hidden">
        <div className="flex flex-col gap-20">
          <Card 
           name="Mayk Brito" 
           nft="Astronauta 1"
           price="1.50"
           image={ast1}
          />
          <Card 
           name="Jakeliny Gracielly" 
           nft="Astronauta 2"
           price="2.0"
           image={ast2}
          />
        </div>
        <div className="w-[1px] h-[1200px] bg-card-color"/>
        <div className="flex flex-col gap-20">
          <Card 
           name="João Inácio (Biro)" 
           nft="Astronauta 3"
           price="3.75"
           image={ast3}
          />
          <Card 
           name="Tamires Santos" 
           nft="Astronauta 4"
           price="4.30"
           image={ast4}
          />
        </div>
      </div>

    </div>
  )
}