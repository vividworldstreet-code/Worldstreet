"use client"
import Link from "next/link"

const podcasts = [
   {
      id: 1,
      episode: "EP 45",
      title: "The Future of African Fintech",
      description: "Exploring how technology is transforming financial services across the continent",
      duration: "45 min",
      date: "Jan 20, 2026",
      guests: "Industry Leaders Panel"
   },
   {
      id: 2,
      episode: "EP 44",
      title: "Navigating Market Volatility",
      description: "Strategies for trading during uncertain times and managing emotional decisions",
      duration: "38 min",
      date: "Jan 13, 2026",
      guests: "Senior Market Analyst"
   },
   {
      id: 3,
      episode: "EP 43",
      title: "From Beginner to Profitable Trader",
      description: "Success stories and lessons learned from traders who made it",
      duration: "52 min",
      date: "Jan 6, 2026",
      guests: "Successful Traders"
   },
   {
      id: 4,
      episode: "EP 42",
      title: "Crypto Regulations in 2026",
      description: "Understanding the regulatory landscape and what it means for traders",
      duration: "41 min",
      date: "Dec 30, 2025",
      guests: "Legal & Compliance Expert"
   },
   {
      id: 5,
      episode: "EP 41",
      title: "Building Multiple Income Streams",
      description: "How to diversify your trading portfolio and income sources",
      duration: "48 min",
      date: "Dec 23, 2025",
      guests: "Financial Advisor"
   },
   {
      id: 6,
      episode: "EP 40",
      title: "The Psychology of Winning Trades",
      description: "Mental frameworks used by consistently profitable traders",
      duration: "55 min",
      date: "Dec 16, 2025",
      guests: "Trading Psychologist"
   },
]

const PodcastsArea = () => {
   return (
      <section className="education-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="section-title text-center mb-60">
                     <span className="sub-title">Worldstreet Podcast</span>
                     <h2 className="title">Trading Insights On The Go</h2>
                     <p>
                        Listen to expert discussions, market analysis, and success stories 
                        from the world of trading and fintech.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center mb-40">
               <div className="col-lg-8">
                  <div style={{textAlign: 'center'}}>
                     <p style={{color: 'var(--tg-paragraph-color)', marginBottom: '20px'}}>Listen on your favorite platform:</p>
                     <div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap'}}>
                        <a href="#" style={{
                           display: 'inline-flex',
                           alignItems: 'center',
                           gap: '8px',
                           background: 'rgba(255,255,255,0.1)',
                           padding: '12px 24px',
                           borderRadius: '30px',
                           color: '#fff',
                           transition: 'all 0.3s'
                        }}>
                           <i className="fab fa-spotify"></i> Spotify
                        </a>
                        <a href="#" style={{
                           display: 'inline-flex',
                           alignItems: 'center',
                           gap: '8px',
                           background: 'rgba(255,255,255,0.1)',
                           padding: '12px 24px',
                           borderRadius: '30px',
                           color: '#fff',
                           transition: 'all 0.3s'
                        }}>
                           <i className="fab fa-apple"></i> Apple Podcasts
                        </a>
                        <a href="#" style={{
                           display: 'inline-flex',
                           alignItems: 'center',
                           gap: '8px',
                           background: 'rgba(255,255,255,0.1)',
                           padding: '12px 24px',
                           borderRadius: '30px',
                           color: '#fff',
                           transition: 'all 0.3s'
                        }}>
                           <i className="fab fa-google"></i> Google Podcasts
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               {podcasts.map((podcast) => (
                  <div key={podcast.id} className="col-lg-6">
                     <div className="education-item mb-30" style={{textAlign: 'left', display: 'flex', gap: '20px', padding: '25px'}}>
                        <div style={{
                           background: 'linear-gradient(135deg, var(--tg-primary-color), #3d8b7a)',
                           color: '#fff',
                           fontWeight: '700',
                           fontSize: '14px',
                           padding: '15px 12px',
                           borderRadius: '10px',
                           textAlign: 'center',
                           minWidth: '60px',
                           height: 'fit-content'
                        }}>{podcast.episode}</div>
                        <div style={{flex: 1}}>
                           <h4 style={{color: 'var(--tg-heading-font-color)', marginBottom: '10px', fontSize: '18px'}}>{podcast.title}</h4>
                           <p style={{marginBottom: '15px'}}>{podcast.description}</p>
                           <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '15px', color: 'var(--tg-paragraph-color)', fontSize: '13px'}}>
                              <span><i className="fas fa-calendar" style={{marginRight: '5px', color: 'var(--tg-primary-color)'}}></i> {podcast.date}</span>
                              <span><i className="fas fa-clock" style={{marginRight: '5px', color: 'var(--tg-primary-color)'}}></i> {podcast.duration}</span>
                              <span><i className="fas fa-microphone" style={{marginRight: '5px', color: 'var(--tg-primary-color)'}}></i> {podcast.guests}</span>
                           </div>
                           <a href="#" style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              color: 'var(--tg-primary-color)',
                              fontWeight: '600',
                              fontSize: '14px'
                           }}>
                              <i className="fas fa-play"></i> Play Episode
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="row mt-30">
               <div className="col-12 text-center">
                  <Link href="/register" className="btn">
                     Subscribe for New Episodes
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default PodcastsArea
