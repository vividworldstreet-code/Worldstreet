"use client"
import Link from "next/link"

const upcomingWebinars = [
   {
      id: 1,
      title: "Weekly Market Outlook",
      description: "Join our analysts for a comprehensive look at the week ahead in forex and crypto markets",
      date: "Every Monday",
      time: "7:00 PM WAT",
      host: "Worldstreet Analysts",
      status: "recurring"
   },
   {
      id: 2,
      title: "Live Trading Session",
      description: "Watch professional traders execute trades in real-time with live commentary",
      date: "Every Wednesday",
      time: "4:00 PM WAT",
      host: "Senior Trading Team",
      status: "recurring"
   },
   {
      id: 3,
      title: "Crypto Deep Dive: Bitcoin Analysis",
      description: "Technical and fundamental analysis of Bitcoin and major altcoins",
      date: "February 1, 2026",
      time: "6:00 PM WAT",
      host: "Crypto Research Team",
      status: "upcoming"
   },
   {
      id: 4,
      title: "Risk Management Masterclass",
      description: "Learn advanced position sizing and risk control strategies from the pros",
      date: "February 8, 2026",
      time: "5:00 PM WAT",
      host: "Risk Management Expert",
      status: "upcoming"
   },
]

const WebinarsArea = () => {
   return (
      <section className="education-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="section-title text-center mb-60">
                     <span className="sub-title">Live Webinars</span>
                     <h2 className="title">Learn from Expert Traders in Real-Time</h2>
                     <p>
                        Join our live webinars to get market insights, trading strategies, 
                        and interact directly with experienced traders.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               {upcomingWebinars.map((webinar) => (
                  <div key={webinar.id} className="col-lg-6">
                     <div className="education-item mb-30" style={{textAlign: 'left', minHeight: 'auto'}}>
                        <div style={{marginBottom: '15px'}}>
                           <span style={{
                              background: webinar.status === 'recurring' ? 'var(--tg-primary-color)' : '#f7931a',
                              color: '#fff',
                              padding: '5px 12px',
                              borderRadius: '20px',
                              fontSize: '12px',
                              fontWeight: '600'
                           }}>
                              {webinar.status === 'recurring' ? 'Weekly' : 'Upcoming'}
                           </span>
                        </div>
                        <h4 style={{color: 'var(--tg-heading-font-color)', marginBottom: '15px'}}>{webinar.title}</h4>
                        <p>{webinar.description}</p>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px', color: 'var(--tg-paragraph-color)', fontSize: '14px'}}>
                           <span><i className="fas fa-calendar" style={{marginRight: '5px', color: 'var(--tg-primary-color)'}}></i>{webinar.date}</span>
                           <span><i className="fas fa-clock" style={{marginRight: '5px', color: 'var(--tg-primary-color)'}}></i>{webinar.time}</span>
                           <span><i className="fas fa-user" style={{marginRight: '5px', color: 'var(--tg-primary-color)'}}></i>{webinar.host}</span>
                        </div>
                        <Link href="/register" className="btn btn-two">
                           Register Now
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
            <div className="row mt-50">
               <div className="col-12 text-center">
                  <p style={{color: 'var(--tg-paragraph-color)'}}>
                     <i className="fas fa-info-circle" style={{marginRight: '8px', color: 'var(--tg-primary-color)'}}></i> 
                     All webinars are recorded and available in your dashboard after the live session
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default WebinarsArea
