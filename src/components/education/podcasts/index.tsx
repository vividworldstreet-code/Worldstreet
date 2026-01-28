"use client"
import Breadcrumb from "../../common/Breadcrumb"
import Footer from "@/layout/footer/Footer"
import Header from "@/layout/headers/Header"
import PodcastsArea from "./PodcastsArea"

const Podcasts = () => {
   return (
      <>
         <Header />
         <main className="fix">
            <Breadcrumb title="Podcasts" />
            <PodcastsArea />
         </main>
         <Footer />
      </>
   )
}

export default Podcasts
