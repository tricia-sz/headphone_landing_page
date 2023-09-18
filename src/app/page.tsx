import { HeadphoneCard } from "@/components/HeadphoneCard";
import { Container } from "@/components/container";
import head3 from 'public/headphone3.jpeg'
import head4 from 'public/headphone4.jpg'
export default function Home() {
  return (
    <>
       <main className="items-center justify-center flex" >
        <Container>
          <div className="flex">
            <HeadphoneCard
            title="Trx-70 Basics" 
            text="O melhor para os melhores. Ouça música por 72h, se conseguir. Bateria 400Am, estofado blab bla" 
            />
            <HeadphoneCard
            title="Trx-80 Standard" 
            text="O melhor para os melhores. Ouça música por 72h, se conseguir. Bateria 400Am, estofado blab bla" 
            />
            <HeadphoneCard
            title="Trx-90 Premium" 
            text="O melhor para os melhores. Ouça música por 72h, se conseguir. Bateria 400Am, estofado blab bla" 
            />
          </div>
        </Container>
      </main>
      
    </>
  )
}
