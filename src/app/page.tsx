import { Header } from '@/components/Header'
import { SectionNft } from '@/components/SectionNft'
import { SectionPopWeek } from '@/components/SectionPopWeek'
import { SectionPresentation } from '@/components/SectionPresentation'
import { SectionStatistics } from '@/components/SectionStatistics'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='mt-20'>
        <section>
          <SectionPresentation />
        </section>
        <section className='mt-20'>
          <SectionNft />
        </section>
        <section className='bg-body-background'>
          <SectionStatistics />
        </section>
        <section>
          <SectionPopWeek />
        </section>
      </main>
    </>
  )
}
