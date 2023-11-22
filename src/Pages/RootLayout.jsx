import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
export default function RootLayout() {
   return (
      <>
         <Header/>
         <main>
            <p>Esse é o layout principal. abaixo tem os conteudos da rotas</p>
            <Outlet/>
         </main>
      </>
   )
}