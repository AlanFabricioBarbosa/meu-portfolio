import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import BackToTopBTN from "../Components/BackToTopBTN"
import SocialMedia from "../Components/SocialMedia"
export default function RootLayout() {
   return (
      <>
         <Header/>
         <main>
            <Outlet/>
            <BackToTopBTN/>
            <SocialMedia/>
         </main>
         <Footer/>
      </>
   )
}