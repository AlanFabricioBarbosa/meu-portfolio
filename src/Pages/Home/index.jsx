import GifPortfolio from "../../assets/gifPortfolio.gif"
export default function Home() {
   return (
      <>
         <section>
            <h2>Boas-vindas ao meu portfolio</h2>
            <p>Olá sou o Alan Fabrício</p>
            <figure>
               <img src={GifPortfolio} alt="Imagem de teste" />
            </figure>
         </section>
      </>
   )
}