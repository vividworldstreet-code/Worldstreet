"use client"
import Breadcrumb from "../../common/Breadcrumb"
import Footer from "@/layout/footer/Footer"
import Header from "@/layout/headers/Header"
import VideosArea from "./VideosArea"

const Videos = () => {
   return (
      <>
         <Header />
         <main className="fix">
            <Breadcrumb title="Video Tutorials" />
            <VideosArea />
         </main>
         <Footer />
      </>
   )
}

export default Videos
