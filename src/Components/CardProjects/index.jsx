import Data from "../../data/projects.json"
import * as S from "./styles.jsx"

export default function CardProjects() {
   return (
      <S.CardSection>
         {Data.map((i) => (
            <S.ProjectCard key={i.id}>
               <S.CardFigure>
                  <S.CardImage src={i.img} alt={i.descriptionAlt} />
               </S.CardFigure>
               <S.CardText>
                  <S.CardTitle>{i.title}</S.CardTitle>
                  <S.CardDescription>{i.descriptionText}</S.CardDescription>
                  <S.CardNav>
                     <S.CardLink href={i.githubUrl} target="_blank" rel="noreferrer">
                        <S.CardImageLink src={i.deployImg} alt={i.githubImgAlt} />
                     </S.CardLink>
                     <S.CardLink href={i.deployUrl} target="_blank" rel="noreferrer">
                        <S.CardImageLink src={i.deployImg} alt={i.deployImgAlt} />
                     </S.CardLink>
                  </S.CardNav>
               </S.CardText>
            </S.ProjectCard>
         ))}
      </S.CardSection>
   )
}