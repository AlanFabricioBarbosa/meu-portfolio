import Data from "../../data/education.json"
import * as S from "./style.jsx"

export default function CardEducation() {
   return (
      <S.CardContainer>
         {Data.map((i) => (
         <S.Card key={i.id}>
            <S.EducationCardFigure>
               <img src={i.img} alt={i.imgAlt} />
               <div>
                  <figcaption>Status: {i.status}</figcaption>
                  <figcaption>Nível: {i.nivel}</figcaption>
               </div>
            </S.EducationCardFigure>
            <S.EducationCardText>
               <S.CardTitle>{i.title}</S.CardTitle>
               <S.CardName 
                  href={i.linkOrg} target="_blank" rel="noreferrer">
                     {i.name}
               </S.CardName>
               <S.CardDescription>{i.description}</S.CardDescription>
            </S.EducationCardText>
         </S.Card>
         ))}
      </S.CardContainer>
   )
}