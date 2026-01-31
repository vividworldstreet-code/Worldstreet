"use client"
import Image from "next/image"
import { Trophy } from "lucide-react"
import { competitionInfo } from "@/data/LeaderboardData"

import breadcrumbShape_1 from "@/assets/img/images/breadcrumb_shape01.png"
import breadcrumbShape_2 from "@/assets/img/images/breadcrumb_shape02.png"

const HeroArea = () => {
   return (
      <section className="breadcrumb-area breadcrumb-bg totw-hero-area pt-130 pb-100" style={{ backgroundImage: `url(/assets/img/bg/breadcrumb_bg.png)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-10">
                  <div className="totw-hero-content text-center">
                     <span className="totw-badge">
                        <Trophy size={18} /> Weekly Competition
                     </span>
                     <h1 className="totw-hero-title">{competitionInfo.title}</h1>
                     <p className="totw-hero-description">
                        {competitionInfo.description}
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="breadcrumb-shape-wrap">
            <Image src={breadcrumbShape_1} alt="" className="alltuchtopdown" />
            <Image src={breadcrumbShape_2} alt="" className="rotateme" />
         </div>
      </section>
   )
}

export default HeroArea
