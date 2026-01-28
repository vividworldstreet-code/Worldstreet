"use client"
import Breadcrumb from "../common/Breadcrumb"
import Footer from "@/layout/footer/Footer"
import Header from "@/layout/headers/Header"
import AboutArea from "./AboutArea"

const About = () => {
   return (
      <>
         <Header />
         <main className="fix">
            <Breadcrumb title="About Us" />
            <AboutArea />
         </main>
         {/* <Footer /> */}
      </>
   )
}

export default About
