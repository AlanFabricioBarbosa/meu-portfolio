import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Education from "./Pages/Education"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import RootLayout from "./Pages/RootLayout"

const router = createBrowserRouter([
   {path: "/",
   element: <RootLayout/>,
   children: [{
      index: true,
      element: <Home/>,
      }, {
      path: "about",
      element: <About/>
      },{
      path: "education",
      element: <Education/> ,
      }, {
      path: "projects",
      element: <Projects/>,
      }, {
      path: "contact",
      element: <Contact/>,
      }
   ]}
])

export default router