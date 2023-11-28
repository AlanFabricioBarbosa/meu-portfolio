import * as S from "./styles.jsx"
import Title from "../Title";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
   const [active, setActive] = useState(false)
   const links = [
      {
         page: "Inicio", href: "/"
      },{
         page: "Sobre Mim", href: "/about"
      },{
         page: "Projetos", href: "/projects"
      },{
         page: "Formações", href: "/education"
      },{
         page: "Contato", href: "/contact"
      },
   ]

   return (
      <S.NavBarWrapp>
         <Title/>
         <S.StyledFontAwesomeIcon 
            icon={faBars} 
            onClick={() => setActive(!active)}
         />
         <S.NavLinkWrapper active={active}>
            {links.map((link) => (
               <S.StyledNavLink key={link.page} to={link.href} activeClassname="active">
                  {link.page}
               </S.StyledNavLink>
            ))}
         </S.NavLinkWrapper>
      </S.NavBarWrapp>
   )
}