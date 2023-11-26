// import DataCard from '.././../data/skills'
import DataCard from '../../data/skills.json'
import { SkillContent, SkillsContainer, SkillsText } from './styles'

export default function CardSkilss() {
   //Bug nas imagens
   return(
      <>
         <SkillsText>
            <h2>Minhas Habilidades</h2>
         </SkillsText>
         <SkillsContainer>
            {DataCard.map(i =>(
               <SkillContent key={i.id}>
                  <img 
                     src={i.img} 
                     alt={i.description} 
                  />
                  <figcaption>{i.title}</figcaption>
            </SkillContent>
         ))}
      </SkillsContainer>
      </>
   )
}