import CardEducation from "../../Components/CardEducation";
import * as S from "./style.jsx"

export default function Education() {
   return (
      <S.EducationContainer>
         <S.EducationText>
            <h2>Formação</h2>
            <p>Confira minhas formações como programador! Cursos e certificações que moldaram minha jornada e mantêm minhas habilidades afiadas.</p>
         </S.EducationText>
         <CardEducation/>
      </S.EducationContainer>
   )
}