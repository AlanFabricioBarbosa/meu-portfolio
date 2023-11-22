import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
export default function RootLayout() {
   return (
      <>
         <Header/>
         <main>
            <Outlet/>
         </main>
         <hr />
         <Footer/>
      </>
   )
}