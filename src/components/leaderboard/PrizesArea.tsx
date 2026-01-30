"use client"
import { Trophy, Smartphone, Laptop, Headphones, LucideIcon } from "lucide-react"
import { prizes_data } from "@/data/LeaderboardData"

const iconMap: { [key: string]: LucideIcon } = {
   Trophy,
   Smartphone,
   Laptop,
   Headphones,
}

const PrizesArea = () => {
   return (
      <section className="totw-prizes-area pb-100">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="section-title text-center mb-60">
                     <span className="sub-title">Weekly Rewards</span>
                     <h2 className="title">Win Big Every Week</h2>
                     <p>Top 10 traders win incredible prizes. The more you trade, the higher you climb.</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {prizes_data.map((prize) => {
                  const IconComponent = iconMap[prize.icon]
                  return (
                     <div key={prize.id} className="col-lg-3 col-md-6 col-sm-6">
                        <div className={`totw-prize-card ${prize.highlight ? 'highlight' : ''}`}>
                           <div className="totw-prize-icon">
                              {IconComponent && <IconComponent size={40} className="totw-icon" />}
                           </div>
                           <div className="totw-prize-content">
                              <h4 className="totw-prize-title">{prize.title}</h4>
                              <p className="totw-prize-description">{prize.description}</p>
                           </div>
                           {prize.highlight && (
                              <div className="totw-prize-badge">Top Prize</div>
                           )}
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </section>
   )
}

export default PrizesArea
