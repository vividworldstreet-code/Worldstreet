"use client"
import Breadcrumb from "../../common/Breadcrumb"
import Footer from "@/layout/footer/Footer"
import Header from "@/layout/headers/Header"
import WebinarsArea from "./WebinarsArea"

const Webinars = () => {
   return (
      <>
         <Header />
         <main className="fix">
            <Breadcrumb title="Webinars" />
            <WebinarsArea />
         </main>
         <Footer />
      </>
   )
}

export default Webinars
