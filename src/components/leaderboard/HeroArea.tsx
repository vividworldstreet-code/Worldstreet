"use client"
import Link from "next/link"
import { Trophy, ArrowRight, LineChart } from "lucide-react"
import { competitionInfo } from "@/data/LeaderboardData"

const HeroArea = () => {
   return (
      <section className="totw-hero-area pt-130 pb-100">
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
                     <div className="totw-hero-actions">
                        <Link href="/register" className="btn">
                           Start Trading <ArrowRight size={16} />
                        </Link>
                        <a href="#leaderboard" className="btn btn-two">
                           View Leaderboard <LineChart size={16} />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HeroArea
