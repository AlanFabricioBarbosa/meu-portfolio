import Data from "../../data/education.json"
import * as S from "./style.jsx"

export default function CardEducation() {
   return (
      <S.CardContainer>
         {Data.map((i) => (
         <S.Card key={i.id}>
            <figure>
               <img src={i.img} alt={i.imgAlt} />
               <figcaption>Status: {i.status}</figcaption>
               <figcaption>Nível: {i.nivel}</figcaption>
            </figure>
            <section>
               <S.CardTitle>{i.title}</S.CardTitle>
               <S.CardName 
                  href={i.linkOrg} target="_blank" rel="noreferrer">
                     {i.name}
               </S.CardName>
               <S.CardDescription>{i.description}</S.CardDescription>
            </section>
         </S.Card>
         ))}
      </S.CardContainer>
   )
}