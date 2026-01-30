"use client"
import { useState, useEffect, useMemo } from "react"
import { Clock, User, Crown, Medal, Award, BarChart3 } from "lucide-react"
import leaderboard_data, {
   Trader,
   getFlagUrl,
   getAssetClass,
   assetClasses,
   countries,
} from "@/data/LeaderboardData"

// Countdown timer hook
const useCountdown = () => {
   const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   })

   useEffect(() => {
      const calculateTimeLeft = () => {
         const now = new Date()
         // Get next Sunday at midnight UTC
         const daysUntilSunday = (7 - now.getUTCDay()) % 7 || 7
         const nextSunday = new Date(Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate() + daysUntilSunday,
            0, 0, 0, 0
         ))

         const diff = nextSunday.getTime() - now.getTime()

         if (diff > 0) {
            setTimeLeft({
               days: Math.floor(diff / (1000 * 60 * 60 * 24)),
               hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
               minutes: Math.floor((diff / (1000 * 60)) % 60),
               seconds: Math.floor((diff / 1000) % 60),
            })
         }
      }

      calculateTimeLeft()
      const timer = setInterval(calculateTimeLeft, 1000)

      return () => clearInterval(timer)
   }, [])

   return timeLeft
}

const LeaderboardArea = () => {
   const [filter, setFilter] = useState('all')
   const [countryFilter, setCountryFilter] = useState('all')
   const [sortBy, setSortBy] = useState<'volume' | 'username'>('volume')
   const [isRefreshing, setIsRefreshing] = useState(false)
   const [lastUpdated, setLastUpdated] = useState(new Date())

   const timeLeft = useCountdown()

   // Simulated auto-refresh indicator
   useEffect(() => {
      const interval = setInterval(() => {
         setIsRefreshing(true)
         setTimeout(() => {
            setIsRefreshing(false)
            setLastUpdated(new Date())
         }, 500)
      }, 30000) // Every 30 seconds

      return () => clearInterval(interval)
   }, [])

   // Filter and sort data
   const filteredData = useMemo(() => {
      let data = [...leaderboard_data]

      // Filter by asset class
      if (filter !== 'all') {
         data = data.filter(trader => getAssetClass(trader.asset) === filter)
      }

      // Filter by country
      if (countryFilter !== 'all') {
         data = data.filter(trader => trader.countryCode === countryFilter)
      }

      // Sort
      if (sortBy === 'volume') {
         data.sort((a, b) => b.volume - a.volume)
      } else {
         data.sort((a, b) => a.username.localeCompare(b.username))
      }

      // Re-assign ranks after filtering
      return data.map((trader, index) => ({
         ...trader,
         rank: index + 1,
      }))
   }, [filter, countryFilter, sortBy])

   // Get top 3 for podium
   const top3 = filteredData.slice(0, 3)
   const restOfLeaderboard = filteredData.slice(3)

   // Find current user position
   const currentUser = filteredData.find(t => t.isCurrentUser)

   const getRankClass = (rank: number) => {
      if (rank === 1) return 'gold'
      if (rank === 2) return 'silver'
      if (rank === 3) return 'bronze'
      return ''
   }

   const getRankIcon = (rank: number) => {
      if (rank === 1) return <Medal size={20} className="totw-medal gold-medal" />
      if (rank === 2) return <Medal size={20} className="totw-medal silver-medal" />
      if (rank === 3) return <Medal size={20} className="totw-medal bronze-medal" />
      return rank.toString()
   }

   return (
      <section id="leaderboard" className="totw-leaderboard-area pt-100 pb-130">
         <div className="container">
            {/* Section Header */}
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="section-title text-center mb-50">
                     <span className="sub-title">Live Rankings</span>
                     <h2 className="title">Weekly Leaderboard</h2>
                  </div>
               </div>
            </div>

            {/* Controls Row */}
            <div className="totw-controls-wrapper mb-50">
               {/* Countdown Timer */}
               <div className="totw-countdown">
                  <div className="totw-countdown-label">
                     <Clock size={16} /> Time Left This Week
                  </div>
                  <div className="totw-countdown-timer">
                     <div className="totw-countdown-item">
                        <span className="totw-countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
                        <span className="totw-countdown-unit">Days</span>
                     </div>
                     <span className="totw-countdown-separator">:</span>
                     <div className="totw-countdown-item">
                        <span className="totw-countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="totw-countdown-unit">Hours</span>
                     </div>
                     <span className="totw-countdown-separator">:</span>
                     <div className="totw-countdown-item">
                        <span className="totw-countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="totw-countdown-unit">Mins</span>
                     </div>
                     <span className="totw-countdown-separator">:</span>
                     <div className="totw-countdown-item">
                        <span className="totw-countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="totw-countdown-unit">Secs</span>
                     </div>
                  </div>
               </div>

               {/* Filters and Sort */}
               <div className="totw-filters">
                  <div className="totw-filter-group">
                     <label>Asset Class</label>
                     <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="totw-select"
                     >
                        {assetClasses.map((asset) => (
                           <option key={asset.id} value={asset.id}>{asset.label}</option>
                        ))}
                     </select>
                  </div>
                  <div className="totw-filter-group">
                     <label>Country</label>
                     <select
                        value={countryFilter}
                        onChange={(e) => setCountryFilter(e.target.value)}
                        className="totw-select"
                     >
                        {countries.map((country) => (
                           <option key={country.code} value={country.code}>{country.name}</option>
                        ))}
                     </select>
                  </div>
                  <div className="totw-filter-group">
                     <label>Sort By</label>
                     <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as 'volume' | 'username')}
                        className="totw-select"
                     >
                        <option value="volume">Volume (High to Low)</option>
                        <option value="username">Username (A-Z)</option>
                     </select>
                  </div>
               </div>

               {/* Live Indicator */}
               <div className="totw-live-indicator">
                  <span className={`totw-live-dot ${isRefreshing ? 'refreshing' : ''}`}></span>
                  <span className="totw-live-text">
                     {isRefreshing ? 'Updating...' : 'Live'}
                  </span>
                  <span className="totw-last-updated">
                     Last updated: {lastUpdated.toLocaleTimeString()}
                  </span>
               </div>
            </div>

            {/* Top 3 Podium */}
            {top3.length >= 3 && (
               <div className="totw-podium-wrapper mb-60">
                  <div className="row justify-content-center align-items-end">
                     {/* 2nd Place */}
                     <div className="col-lg-4 col-md-4">
                        <div className="totw-podium-card silver">
                           <div className="totw-podium-rank">
                              <span>{getRankIcon(2)}</span>
                           </div>
                           <div className="totw-podium-avatar">
                              <img
                                 src={getFlagUrl(top3[1].countryCode, 80)}
                                 alt={top3[1].country}
                                 width={60}
                                 height={40}
                                 className="totw-flag-large"
                              />
                           </div>
                           <h4 className="totw-podium-username">{top3[1].username}</h4>
                           <p className="totw-podium-country">{top3[1].country}</p>
                           <div className="totw-podium-stats">
                              <div className="totw-podium-asset">{top3[1].asset}</div>
                              <div className="totw-podium-volume">{top3[1].volume.toFixed(1)} lots</div>
                           </div>
                        </div>
                     </div>

                     {/* 1st Place */}
                     <div className="col-lg-4 col-md-4">
                        <div className="totw-podium-card gold">
                           <div className="totw-podium-crown"><Crown size={40} className="crown-icon" /></div>
                           <div className="totw-podium-rank">
                              <span>{getRankIcon(1)}</span>
                           </div>
                           <div className="totw-podium-avatar">
                              <img
                                 src={getFlagUrl(top3[0].countryCode, 80)}
                                 alt={top3[0].country}
                                 width={70}
                                 height={47}
                                 className="totw-flag-large"
                              />
                           </div>
                           <h4 className="totw-podium-username">{top3[0].username}</h4>
                           <p className="totw-podium-country">{top3[0].country}</p>
                           <div className="totw-podium-stats">
                              <div className="totw-podium-asset">{top3[0].asset}</div>
                              <div className="totw-podium-volume">{top3[0].volume.toFixed(1)} lots</div>
                           </div>
                        </div>
                     </div>

                     {/* 3rd Place */}
                     <div className="col-lg-4 col-md-4">
                        <div className="totw-podium-card bronze">
                           <div className="totw-podium-rank">
                              <span>{getRankIcon(3)}</span>
                           </div>
                           <div className="totw-podium-avatar">
                              <img
                                 src={getFlagUrl(top3[2].countryCode, 80)}
                                 alt={top3[2].country}
                                 width={60}
                                 height={40}
                                 className="totw-flag-large"
                              />
                           </div>
                           <h4 className="totw-podium-username">{top3[2].username}</h4>
                           <p className="totw-podium-country">{top3[2].country}</p>
                           <div className="totw-podium-stats">
                              <div className="totw-podium-asset">{top3[2].asset}</div>
                              <div className="totw-podium-volume">{top3[2].volume.toFixed(1)} lots</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {/* Leaderboard Table */}
            <div className="totw-table-wrapper">
               {/* Your Position Sticky Row */}
               {currentUser && (
                  <div className="totw-your-position">
                     <div className="totw-your-position-label">
                        <User size={14} /> Your Position
                     </div>
                     <div className="totw-your-position-row">
                        <div className="totw-cell rank">#{currentUser.rank}</div>
                        <div className="totw-cell username">
                           <span className="totw-you-badge">You</span>
                           {currentUser.username}
                        </div>
                        <div className="totw-cell country">
                           <img
                              src={getFlagUrl(currentUser.countryCode, 32)}
                              alt={currentUser.country}
                              width={24}
                              height={16}
                              className="totw-flag"
                           />
                           {currentUser.country}
                        </div>
                        <div className="totw-cell asset">{currentUser.asset}</div>
                        <div className="totw-cell volume">{currentUser.volume.toFixed(1)} lots</div>
                        <div className="totw-cell status">
                           <span className={`totw-status-badge ${currentUser.status}`}>
                              {currentUser.status}
                           </span>
                        </div>
                     </div>
                  </div>
               )}

               {/* Table Header */}
               <div className="totw-table-header">
                  <div className="totw-cell rank">Rank</div>
                  <div className="totw-cell username">Trader</div>
                  <div className="totw-cell country">Country</div>
                  <div className="totw-cell asset">Asset</div>
                  <div className="totw-cell volume">Volume</div>
                  <div className="totw-cell status">Status</div>
               </div>

               {/* Table Body */}
               <div className="totw-table-body">
                  {filteredData.length === 0 ? (
                     <div className="totw-empty-state">
                        <div className="totw-empty-icon"><BarChart3 size={48} /></div>
                        <h4>No traders found</h4>
                        <p>Try adjusting your filters or check back later.</p>
                     </div>
                  ) : (
                     filteredData.map((trader) => (
                        <div
                           key={trader.id}
                           className={`totw-table-row ${getRankClass(trader.rank)} ${trader.isCurrentUser ? 'current-user' : ''}`}
                        >
                           <div className="totw-cell rank">
                              <span className={`totw-rank-badge ${getRankClass(trader.rank)}`}>
                                 {getRankIcon(trader.rank)}
                              </span>
                           </div>
                           <div className="totw-cell username">
                              {trader.isCurrentUser && <span className="totw-you-badge">You</span>}
                              {trader.username}
                           </div>
                           <div className="totw-cell country">
                              <img
                                 src={getFlagUrl(trader.countryCode, 32)}
                                 alt={trader.country}
                                 width={24}
                                 height={16}
                                 className="totw-flag"
                              />
                              <span className="totw-country-name">{trader.country}</span>
                           </div>
                           <div className="totw-cell asset">
                              <span className="totw-asset-badge">{trader.asset}</span>
                           </div>
                           <div className="totw-cell volume">
                              <strong>{trader.volume.toFixed(1)}</strong> lots
                           </div>
                           <div className="totw-cell status">
                              <span className={`totw-status-badge ${trader.status}`}>
                                 {trader.status}
                              </span>
                           </div>
                        </div>
                     ))
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}

export default LeaderboardArea
