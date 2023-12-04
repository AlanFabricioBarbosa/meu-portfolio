import * as S from "./styles.jsx"
import GithubIcon from "../../../public/assets/icones/github-logo-bold.svg"
import LinkedinIcon from "../../../public/assets/icones/github-logo-bold.svg"
import WhatsAppIcon from "../../../public/assets/icones/github-logo-bold.svg"

export default function SocialMedia() {
   return(
      <S.SideLinksContainer>
         <S.SideLink href="https://github.com/AlanFabricioBarbosa" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="GitHub" />
         </S.SideLink>
         <S.SideLink href="https://www.linkedin.com/in/alanfabr%C3%ADciodev/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" />
         </S.SideLink>
         <S.SideLink href="https://api.whatsapp.com/send?phone=+5582987377303" target="_blank" rel="noopener noreferrer">
            <img src={WhatsAppIcon} alt="WhatsApp" />
         </S.SideLink>
      </S.SideLinksContainer>
   )
}