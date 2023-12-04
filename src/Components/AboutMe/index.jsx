import ImgPerfil from "../../../public/assets/aboutImg/minha_foto.png"
import * as S from "./styles.jsx"

export default function AboutMe() {
   return (
      <S.AboutMeContainer>
         <S.AboutMeContentSocial>
            <S.AboutMeFigure>
               <img src={ImgPerfil} alt="Minha imagem de perfil" />
            </S.AboutMeFigure>
            </S.AboutMeContentSocial>
         <S.AboutMeText>
            <h2>
               Olá, sou <span>Alan Fabrício</span>
            </h2>
            <p>
            Um entusiasta de tecnologia atualmente cursando Sistemas para Internet na Faculdade Anhanguera. Minha jornada acadêmica não é apenas uma busca por conhecimento, mas sim a construção de um caminho que me conduza a me tornar um profissional na área de tecnologia da informação.
            </p>
            <p>
            Antes de ingressar na programação, estudei radiologia, uma experiência muito enriquecedora, especialmente durante visitas técnicas e meu período de estágio. Ao longo do meu percurso, desenvolvi habilidades e competências que me impulsionam na direção dos meus objetivos profissionais. Tenho um carinho especial pelo curso que realizei com o pessoal da escola Vai Na Web, uma experiência que não apenas aprimorou minhas habilidades, mas também contribuiu para a minha paixão em aprender e crescer constantemente.
            </p>
            <p>
               Fora do universo acadêmico e profissional, encontro equilíbrio e diversão em meus hobbies. Sou apaixonado por board games, games, filmes e séries, o que adiciona uma dimensão única à minha personalidade. Acredito que a variedade de interesses enriquece minha visão de mundo.
            </p>
            <p>
               Estou animado com as oportunidades que o futuro reserva e comprometido em transformar minha paixão por tecnologia em uma carreira gratificante. Seja explorando o mundo dos códigos ou participando de projetos desafiadores, estou pronto para enfrentar os desafios e alcançar novas alturas.
            </p>
         </S.AboutMeText>
      </S.AboutMeContainer>
   )
}