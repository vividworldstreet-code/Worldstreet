"use client"
import Link from "next/link"

const courses = [
   {
      id: 1,
      title: "Forex Trading Fundamentals",
      description: "Learn the basics of forex trading, currency pairs, and market analysis",
      level: "Beginner",
      duration: "4 weeks",
      lessons: 12,
      icon: "fas fa-chart-line"
   },
   {
      id: 2,
      title: "Technical Analysis Mastery",
      description: "Master chart patterns, indicators, and price action trading strategies",
      level: "Intermediate",
      duration: "6 weeks",
      lessons: 18,
      icon: "fas fa-chart-bar"
   },
   {
      id: 3,
      title: "Cryptocurrency Trading",
      description: "Understand crypto markets, blockchain technology, and trading strategies",
      level: "Beginner",
      duration: "3 weeks",
      lessons: 10,
      icon: "fab fa-bitcoin"
   },
   {
      id: 4,
      title: "Risk Management Strategies",
      description: "Protect your capital with proven risk management techniques",
      level: "All Levels",
      duration: "2 weeks",
      lessons: 8,
      icon: "fas fa-shield-alt"
   },
   {
      id: 5,
      title: "Advanced Trading Psychology",
      description: "Develop the mindset of a successful trader and control emotions",
      level: "Advanced",
      duration: "4 weeks",
      lessons: 14,
      icon: "fas fa-brain"
   },
   {
      id: 6,
      title: "Commodities & Indices",
      description: "Diversify your portfolio with gold, oil, and stock indices trading",
      level: "Intermediate",
      duration: "5 weeks",
      lessons: 15,
      icon: "fas fa-gem"
   },
]

const AcademyArea = () => {
   return (
      <section className="education-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="section-title text-center mb-60">
                     <span className="sub-title">WS Academy</span>
                     <h2 className="title">Master the Markets with Expert-Led Courses</h2>
                     <p>
                        Whether you&apos;re a beginner or experienced trader, our comprehensive courses 
                        will help you develop the skills needed to succeed in financial markets.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               {courses.map((course) => (
                  <div key={course.id} className="col-lg-4 col-md-6">
                     <div className="education-item mb-30">
                        <div className="education-icon">
                           <i className={course.icon}></i>
                        </div>
                        <h4>{course.title}</h4>
                        <p>{course.description}</p>
                        <div className="course-meta" style={{marginBottom: '15px', color: 'var(--tg-paragraph-color)', fontSize: '14px'}}>
                           <span style={{marginRight: '15px'}}><i className="fas fa-clock" style={{marginRight: '5px'}}></i> {course.duration}</span>
                           <span><i className="fas fa-book" style={{marginRight: '5px'}}></i> {course.lessons} lessons</span>
                        </div>
                        <Link href="/register" className="btn btn-two">
                           Enroll Now
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
            <div className="row mt-50">
               <div className="col-12 text-center">
                  <div className="academy-cta" style={{background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '40px'}}>
                     <h3 style={{color: 'var(--tg-heading-font-color)', marginBottom: '15px'}}>Ready to Start Your Trading Journey?</h3>
                     <p style={{color: 'var(--tg-paragraph-color)', marginBottom: '20px'}}>Join thousands of successful traders who started with WS Academy</p>
                     <Link href="/register" className="btn">
                        Create Free Account
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AcademyArea
