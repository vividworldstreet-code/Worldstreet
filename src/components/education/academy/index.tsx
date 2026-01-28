"use client"
import Breadcrumb from "../../common/Breadcrumb"
import Footer from "@/layout/footer/Footer"
import Header from "@/layout/headers/Header"
import AcademyArea from "./AcademyArea"

const Academy = () => {
   return (
      <>
         <Header />
         <main className="fix">
            <Breadcrumb title="WS Academy" />
            <AcademyArea />
         </main>
        
      </>
   )
}

export default Academy
