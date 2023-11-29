import ScrollToTop from "react-scroll-to-top";

export default function BackToTopBTN() {
   return (
      <>
         <ScrollToTop 
            smooth
            color="#3BFA8C"
            width="20"
            top={65}
            style={{
               borderRadius: "50%",
               backgroundColor: "transparent",
            }}
         />
      </>
   )
}