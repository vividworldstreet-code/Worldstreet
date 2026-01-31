"use client"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"

// Solid/Filled Trophy Icon
const TrophySolid = ({ size = 48 }: { size?: number }) => (
   <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15c-1.95 0-3.6-1.2-4.29-2.91L5.77 13.03C5.4 13.39 5 13.98 5 14.71c0 .47.16.91.45 1.27l.43.53c.28.35.7.56 1.15.56H17c.45 0 .87-.21 1.15-.56l.43-.53c.29-.36.45-.8.45-1.27 0-.73-.4-1.32-.77-1.68l-1.94-.94c-.69 1.71-2.34 2.91-4.29 2.91z"/>
      <path d="M19 3h-2V2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a2 2 0 0 0-2 2v2c0 1.54.87 2.87 2.14 3.54.35 1.51 1.26 2.79 2.49 3.63l.02.01c.25.16.52.3.79.43-.01.18-.03.36-.03.54 0 .55.45 1 1 1h7c.55 0 1-.45 1-1 0-.18-.02-.36-.03-.54.27-.13.54-.27.79-.43l.02-.01c1.23-.84 2.14-2.12 2.49-3.63A3.994 3.994 0 0 0 21 7V5a2 2 0 0 0-2-2zM5 7V5h2v4c0 .06.01.12.01.18C5.84 8.67 5 7.91 5 7zm14 0c0 .91-.84 1.67-2.01 2.18.01-.06.01-.12.01-.18V5h2v2z"/>
      <path d="M14 19h-4v-2h4v2z"/>
      <path d="M15 22H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"/>
   </svg>
)

// Solid/Filled Smartphone Icon
const SmartphoneSolid = ({ size = 48 }: { size?: number }) => (
   <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="2" width="14" height="20" rx="3" ry="3"/>
      <circle cx="12" cy="18" r="1" fill="var(--tg-black, #010314)"/>
   </svg>
)

// Solid/Filled Gift Icon
const GiftSolid = ({ size = 48 }: { size?: number }) => (
   <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 7h-1.26A3.99 3.99 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.76 0-2.92 1.24-3.5 2.04C11.42 3.24 10.26 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .59.13 1.14.36 1.64.06.14.13.27.2.4H4c-1.1 0-2 .9-2 2v2c0 .55.22 1.05.59 1.41V21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8.05c.37-.36.59-.86.59-1.41V9.5c0-1.1-.9-2.5-2-2.5h-.18zM15.5 4c.83 0 1.5.67 1.5 1.5S16.33 7 15.5 7c-.59 0-1.35-.59-1.85-1.24.46-.8 1.16-1.76 1.85-1.76zM8.5 4c.69 0 1.39.96 1.85 1.76C9.85 6.41 9.09 7 8.5 7 7.67 7 7 6.33 7 5.5S7.67 4 8.5 4zM4 9.5h7V11H4V9.5zm0 11.5v-7h7v7H4zm16 0h-7v-7h7v7zm0-9H13V9.5h7V12z"/>
   </svg>
)

interface CarouselPrize {
   id: number
   icon: React.ReactNode
   title: string
   value: string
   color: string
}

const carouselPrizes: CarouselPrize[] = [
   {
      id: 1,
      icon: <TrophySolid size={48} />,
      title: "Grand Prize",
      value: "$5,000",
      color: "#FFD700"
   },
   {
      id: 2,
      icon: <SmartphoneSolid size={48} />,
      title: "iPhone 16 Pro",
      value: "$1,199",
      color: "#44A08D"
   },
   {
      id: 3,
      icon: <GiftSolid size={48} />,
      title: "Trading Bundle",
      value: "$500",
      color: "#A855F7"
   }
]

const PrizesArea = () => {
   const [activeIndex, setActiveIndex] = useState(0)
   const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
   const [isRevealing, setIsRevealing] = useState(false)
   
   // Reveal countdown states
   const [revealCount, setRevealCount] = useState<number | null>(null)
   const [isRevealed, setIsRevealed] = useState(false)
   const [hasTriggered, setHasTriggered] = useState(false)
   const showcaseRef = useRef<HTMLDivElement>(null)

   // Intersection Observer for reveal countdown
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting && !hasTriggered) {
                  setHasTriggered(true)
                  // Start the 3, 2, 1 countdown
                  setRevealCount(3)
               }
            })
         },
         { threshold: 0.5 }
      )

      if (showcaseRef.current) {
         observer.observe(showcaseRef.current)
      }

      return () => observer.disconnect()
   }, [hasTriggered])

   // Handle the 3, 2, 1 countdown
   useEffect(() => {
      if (revealCount === null) return

      if (revealCount > 0) {
         const timer = setTimeout(() => {
            setRevealCount(revealCount - 1)
         }, 800)
         return () => clearTimeout(timer)
      } else if (revealCount === 0) {
         // Countdown finished, reveal prizes
         setTimeout(() => {
            setRevealCount(null)
            setIsRevealed(true)
         }, 500)
      }
   }, [revealCount])

   // Auto-rotate carousel (only after revealed)
   useEffect(() => {
      if (!isRevealed) return
      
      const interval = setInterval(() => {
         setIsRevealing(true)
         setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % carouselPrizes.length)
            setIsRevealing(false)
         }, 500)
      }, 4000)
      return () => clearInterval(interval)
   }, [isRevealed])

   // Countdown timer - next Saturday 23:59 UTC
   useEffect(() => {
      const calculateTimeLeft = () => {
         const now = new Date()
         const currentDay = now.getUTCDay()
         const daysUntilSaturday = (6 - currentDay + 7) % 7 || 7
         const nextSaturday = new Date(now)
         nextSaturday.setUTCDate(now.getUTCDate() + daysUntilSaturday)
         nextSaturday.setUTCHours(23, 59, 59, 999)
         
         const difference = nextSaturday.getTime() - now.getTime()
         
         if (difference > 0) {
            setCountdown({
               days: Math.floor(difference / (1000 * 60 * 60 * 24)),
               hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
               minutes: Math.floor((difference / 1000 / 60) % 60),
               seconds: Math.floor((difference / 1000) % 60)
            })
         }
      }

      calculateTimeLeft()
      const timer = setInterval(calculateTimeLeft, 1000)
      return () => clearInterval(timer)
   }, [])

   const currentPrize = carouselPrizes[activeIndex]

   return (
      <section className="totw-prizes-area-v2 pb-100 pt-100">
         <div className="container">
            <div className="row align-items-center">
               {/* Left Side - Content */}
               <div className="col-lg-6">
                  <div className="prizes-content-left section-title">
                     <span className="sub-title">Weekly Rewards</span>
                     <h2 className="title">Win Big Every Week</h2>
                     <p>
                        Top 10 traders win incredible prizes. The more you trade, the higher you climb. 
                        Join thousands of traders competing for glory and rewards every week.
                     </p>
                     <div className="prizes-cta-wrapper">
                        <Link href="/register" className="btn">
                           Start Trading
                        </Link>
                        <a href="#leaderboard" className="btn btn-two">
                           View Leaderboard
                        </a>
                     </div>
                  </div>
               </div>

               {/* Right Side - 3D Prize Carousel */}
               <div className="col-lg-6">
                  <div className="prizes-showcase-wrapper" ref={showcaseRef}>
                     {/* Floating particles */}
                     <div className="prizes-particles">
                        {[...Array(12)].map((_, i) => (
                           <span key={i} className="particle" style={{ animationDelay: `${i * 0.3}s` }}></span>
                        ))}
                     </div>

                     {/* Glow ring */}
                     <div className={`prizes-glow-ring ${isRevealed ? 'revealed' : ''}`}></div>
                     <div className={`prizes-glow-ring ring-2 ${isRevealed ? 'revealed' : ''}`}></div>

                     {/* Reveal Countdown Overlay */}
                     {revealCount !== null && (
                        <div className="reveal-countdown-overlay">
                           <div className={`reveal-number ${revealCount === 0 ? 'go' : ''}`}>
                              {revealCount === 0 ? '🎉' : revealCount}
                           </div>
                        </div>
                     )}

                     {/* Main prize display */}
                     <div className={`prizes-main-display ${isRevealing ? 'revealing' : ''} ${isRevealed ? 'revealed' : 'hidden'}`}>
                        <div className="prize-spotlight" style={{ '--prize-color': currentPrize.color } as React.CSSProperties}>
                           <div className="prize-icon-wrapper">
                              {currentPrize.icon}
                           </div>
                           <div className="prize-info">
                              <span className="prize-label">This Week&apos;s Prize</span>
                              <h3 className="prize-name">{currentPrize.title}</h3>
                              <div className="prize-value">{currentPrize.value}</div>
                           </div>
                        </div>
                     </div>

                     {/* Countdown timer */}
                     <div className={`prizes-countdown ${isRevealed ? 'revealed' : 'hidden'}`}>
                        <span className="countdown-label">Competition Ends In</span>
                        <div className="countdown-grid">
                           <div className="countdown-item">
                              <span className="countdown-value">{String(countdown.days).padStart(2, '0')}</span>
                              <span className="countdown-unit">Days</span>
                           </div>
                           <div className="countdown-separator">:</div>
                           <div className="countdown-item">
                              <span className="countdown-value">{String(countdown.hours).padStart(2, '0')}</span>
                              <span className="countdown-unit">Hours</span>
                           </div>
                           <div className="countdown-separator">:</div>
                           <div className="countdown-item">
                              <span className="countdown-value">{String(countdown.minutes).padStart(2, '0')}</span>
                              <span className="countdown-unit">Mins</span>
                           </div>
                           <div className="countdown-separator">:</div>
                           <div className="countdown-item">
                              <span className="countdown-value">{String(countdown.seconds).padStart(2, '0')}</span>
                              <span className="countdown-unit">Secs</span>
                           </div>
                        </div>
                     </div>

                     {/* Carousel indicators */}
                     <div className={`prizes-carousel-indicators ${isRevealed ? 'revealed' : 'hidden'}`}>
                        {carouselPrizes.map((prize, index) => (
                           <button
                              key={prize.id}
                              className={`indicator ${index === activeIndex ? 'active' : ''}`}
                              style={{ '--indicator-color': prize.color } as React.CSSProperties}
                              aria-label={`View ${prize.title}`}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default PrizesArea
