"use client"
import Header from "@/layout/headers/Header"
import HeroArea from "./HeroArea"
import PrizesArea from "./PrizesArea"
import HowToParticipate from "./HowToParticipate"
import LeaderboardArea from "./LeaderboardArea"

const Leaderboard = () => {
   return (
      <>
         <Header />
         <main className="fix">
            <HeroArea />
            <PrizesArea />
            <LeaderboardArea />
            <HowToParticipate />
         </main>
      </>
   )
}

export default Leaderboard
