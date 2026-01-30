"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, HelpCircle, ChevronUp, ChevronDown } from "lucide-react"
import { participation_steps, faq_tooltips } from "@/data/LeaderboardData"

const HowToParticipate = () => {
   const [activeTooltip, setActiveTooltip] = useState<number | null>(null)

   return (
      <section className="totw-participate-area pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="section-title text-center mb-60">
                     <span className="sub-title">How It Works</span>
                     <h2 className="title">How to Participate</h2>
                     <p>Join the competition in 5 simple steps and start climbing the leaderboard.</p>
                  </div>
               </div>
            </div>

            {/* Steps */}
            <div className="row justify-content-center">
               <div className="col-xl-10">
                  <div className="totw-steps-wrapper">
                     {participation_steps.map((step, index) => (
                        <div key={step.id} className="totw-step-item">
                           <div className="totw-step-number">
                              <span>{step.step}</span>
                           </div>
                           <div className="totw-step-content">
                              <h4 className="totw-step-title">{step.title}</h4>
                              <p className="totw-step-description">{step.description}</p>
                           </div>
                           {index < participation_steps.length - 1 && (
                              <div className="totw-step-connector"></div>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* CTA */}
            <div className="row justify-content-center mt-50">
               <div className="col-xl-6 text-center">
                  <Link href="/register" className="btn">
                     Start Trading Now <ArrowRight size={16} />
                  </Link>
               </div>
            </div>

            {/* FAQ Tooltips */}
            <div className="row justify-content-center mt-70">
               <div className="col-xl-10">
                  <div className="totw-faq-section">
                     <h4 className="totw-faq-heading">
                        <HelpCircle size={20} /> Frequently Asked Questions
                     </h4>
                     <div className="totw-faq-grid">
                        {faq_tooltips.map((faq) => (
                           <div
                              key={faq.id}
                              className={`totw-faq-item ${activeTooltip === faq.id ? 'active' : ''}`}
                              onClick={() => setActiveTooltip(activeTooltip === faq.id ? null : faq.id)}
                           >
                              <div className="totw-faq-question">
                                 <span>{faq.question}</span>
                                 {activeTooltip === faq.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </div>
                              {activeTooltip === faq.id && (
                                 <div className="totw-faq-answer">
                                    {faq.answer}
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HowToParticipate
