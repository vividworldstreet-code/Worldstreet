"use client"
import Header from "@/layout/headers/Header"
import Breadcrumb from "../common/Breadcrumb"
import HeroArea from "./HeroArea"
import PrizesArea from "./PrizesArea"
import HowToParticipate from "./HowToParticipate"
import LeaderboardArea from "./LeaderboardArea"

const Leaderboard = () => {
   return (
      <>
         <Header />
         <main className="fix">
            <Breadcrumb title="Trader of the Week" />
            <HeroArea />
            <PrizesArea />
            <HowToParticipate />
            <LeaderboardArea />
         </main>
      </>
   )
}

export default Leaderboard
