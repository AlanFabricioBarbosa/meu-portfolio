import { GlobalStyled } from "./Globals"
import router from "./router"
import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <>
      <GlobalStyled/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
