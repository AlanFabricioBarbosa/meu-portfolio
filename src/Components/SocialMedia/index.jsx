import * as S from "./styles.jsx"
import GithubIcon from "../../../public/assets/icones/github-logo-bold.svg"
import LinkedinIcon from "../../../public/assets/icones/github-logo-bold.svg"
import WhatsAppIcon from "../../../public/assets/icones/github-logo-bold.svg"

export default function SocialMedia() {
   return(
      <S.SideLinksContainer>
         <S.SideLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="GitHub" />
         </S.SideLink>
         <S.SideLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" />
         </S.SideLink>
         <S.SideLink href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <img src={WhatsAppIcon} alt="WhatsApp" />
         </S.SideLink>
      </S.SideLinksContainer>
   )
}