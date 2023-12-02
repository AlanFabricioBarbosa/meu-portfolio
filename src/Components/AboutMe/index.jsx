import ImgPerfil from "../../../public/assets/aboutImg/minha_foto.png"
import * as S from "./styles.jsx"
import ImgTest from "../../../public/assets/icones/envelope-simple-thin.svg"

export default function AboutMe() {
   return (
      <S.AboutMeContainer>
         <S.AboutMeContentSocial>
            <S.AboutMeFigure>
               <img src={ImgPerfil} alt="Minha imagem de perfil" />
            </S.AboutMeFigure>
               <S.AboutMeSocialInformation>
                  <nav>
                     <a
                        href="https://github.com/AlanFabricioBarbosa" 
                        target="_blanck" 
                        rel="noreferrer"
                     >
                        <img src={ImgTest} alt="" />
                        <p>@alanFabricio</p>
                     </a>
                     <a
                        href="https://github.com/AlanFabricioBarbosa" 
                        target="_blanck" 
                        rel="noreferrer"
                     >
                        <img src={ImgTest} alt="" />
                        <p>@alanFabricio</p>
                     </a>
                     <a
                        href="https://github.com/AlanFabricioBarbosa" 
                        target="_blanck" 
                        rel="noreferrer"
                     >
                        <img src={ImgTest} alt="" />
                        <p>@alanFabricio</p>
                     </a>
                  </nav>
               </S.AboutMeSocialInformation>
            </S.AboutMeContentSocial>
         <S.AboutMeText>
            <h2>
               Olá, 
               sou Alan Fabrício
            </h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic praesentium sint totam voluptate. Voluptatum pariatur, autem reprehenderit sequi ad modi quis dolor ea, repellendus maxime magnam laboriosam aperiam perferendis?
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit a optio deserunt laudantium iste ullam. Nam minima inventore beatae facilis culpa atque tempore nostrum quibusdam, sequi quia, magni nesciunt.
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit a optio deserunt laudantium iste ullam. Nam minima inventore beatae facilis culpa atque tempore nostrum quibusdam, sequi quia, magni nesciunt.
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit a optio deserunt laudantium iste ullam. Nam minima inventore beatae facilis culpa atque tempore nostrum quibusdam, sequi quia, magni nesciunt.
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odit a optio deserunt laudantium iste ullam. Nam minima inventore beatae facilis culpa atque tempore nostrum quibusdam, sequi quia, magni nesciunt.
            </p>
         </S.AboutMeText>
      </S.AboutMeContainer>
   )
}