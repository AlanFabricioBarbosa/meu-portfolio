import Data from '../../data/skills.json'
import * as S from './styles.jsx'
import 'animate.css'

export default function CardSkilss() {
   return(
      <>
         <S.SkillsText>
            <h2>Minhas Habilidades</h2>
         </S.SkillsText>
         <S.SkillsContainer>
            {Data.map(i =>(
               <S.SkillContent key={i.id}>
                  <img 
                     src={i.img} 
                     alt={i.description} 
                  />
                  <figcaption>{i.title}</figcaption>
            </S.SkillContent>
         ))}
      </S.SkillsContainer>
      </>
   )
}