"use client"
import Link from "next/link"

const videoCategories = [
   {
      id: 1,
      category: "Getting Started",
      videos: [
         { title: "Welcome to Worldstreet", duration: "5:30" },
         { title: "Platform Walkthrough", duration: "12:45" },
         { title: "Making Your First Trade", duration: "8:20" },
         { title: "Understanding Order Types", duration: "10:15" },
      ]
   },
   {
      id: 2,
      category: "Technical Analysis",
      videos: [
         { title: "Candlestick Patterns Explained", duration: "18:30" },
         { title: "Support and Resistance Levels", duration: "15:20" },
         { title: "Moving Averages Strategy", duration: "14:45" },
         { title: "RSI and MACD Indicators", duration: "20:10" },
      ]
   },
   {
      id: 3,
      category: "Fundamental Analysis",
      videos: [
         { title: "Reading Economic Calendar", duration: "11:30" },
         { title: "Impact of News on Markets", duration: "13:15" },
         { title: "Central Bank Decisions", duration: "16:40" },
         { title: "Inflation and Interest Rates", duration: "14:50" },
      ]
   },
   {
      id: 4,
      category: "Crypto Trading",
      videos: [
         { title: "Bitcoin Trading Basics", duration: "12:20" },
         { title: "Altcoin Analysis", duration: "15:30" },
         { title: "DeFi and Trading", duration: "18:45" },
         { title: "Crypto Market Cycles", duration: "20:15" },
      ]
   },
]

const VideosArea = () => {
   return (
      <section className="education-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="section-title text-center mb-60">
                     <span className="sub-title">Video Library</span>
                     <h2 className="title">Learn at Your Own Pace</h2>
                     <p>
                        Access our comprehensive library of video tutorials covering everything 
                        from beginner basics to advanced trading strategies.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               {videoCategories.map((category) => (
                  <div key={category.id} className="col-lg-6">
                     <div className="education-item mb-40" style={{textAlign: 'left', padding: '30px'}}>
                        <h4 style={{color: 'var(--tg-heading-font-color)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                           <i className="fas fa-play-circle" style={{color: 'var(--tg-primary-color)'}}></i> {category.category}
                        </h4>
                        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                           {category.videos.map((video, index) => (
                              <li key={index} style={{
                                 padding: '12px 0',
                                 borderBottom: '1px solid rgba(255,255,255,0.1)',
                              }}>
                                 <Link href="/register" style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    color: 'var(--tg-paragraph-color)',
                                    transition: 'color 0.3s'
                                 }}>
                                    <span>{video.title}</span>
                                    <span style={{fontSize: '13px', color: 'var(--tg-primary-color)'}}>
                                       <i className="fas fa-clock" style={{marginRight: '5px'}}></i> {video.duration}
                                    </span>
                                 </Link>
                              </li>
                           ))}
                        </ul>
                        <div style={{marginTop: '15px', color: 'var(--tg-primary-color)', fontSize: '14px', fontWeight: '600'}}>
                           {category.videos.length} videos
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="row mt-30">
               <div className="col-12 text-center">
                  <Link href="/register" className="btn">
                     Access Full Video Library
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default VideosArea
