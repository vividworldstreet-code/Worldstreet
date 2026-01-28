"use client"
import Link from "next/link"
import Slider from "react-slick"

const services = [
   {
      id: 1,
      title: "Forex Markets",
      description: "TRADE MAJOR AND MINOR CURRENCY PAIRS WITH TIGHT SPREADS, NAIRA DEPOSITS, AND $50 MINIMUM TO START",
      image: "/assets/img/services/forex.jpeg",
      link: "/register",
   },
   {
      id: 2,
      title: "Cryptocurrencies",
      description: "TRADE CFDS ON POPULAR CRYPTOCURRENCIES INCLUDING BITCOIN, ETHEREUM, RIPPLE AND LITECOIN AGAINST THE WORLD'S DOMINANT CURRENCIES AND BUILD YOUR CRYPTO PORTFOLIO",
      image: "/assets/img/services/crypto.jpeg",
      link: "/register",
   },
   {
      id: 3,
      title: "Vivid AI",
      description: "AI-POWERED TRADING DECISIONS AND MARKET ANALYSIS. LET ARTIFICIAL INTELLIGENCE GUIDE YOUR TRADING STRATEGY",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      link: "#",
      badge: "Coming Soon"
   },
   {
      id: 4,
      title: "e-Commerce",
      description: "ACCESS OUR PRODUCT MARKETPLACE. BUY AND SELL DIGITAL AND PHYSICAL GOODS IN OUR GROWING ECOSYSTEM",
      image: "/assets/img/services/ecommerce.jpeg",
      link: "#",
   },
   {
      id: 5,
      title: "Xtreme",
      description: "ENTERTAINMENT AND STREAMING PLATFORM. ACCESS EXCLUSIVE CONTENT AND CONNECT WITH THE COMMUNITY",
      image: "/assets/img/services/streaming.jpeg",
      link: "#",
   },
]

const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 4000,
   arrows: true,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
         }
      }
   ]
}

const ServicesArea = () => {
   return (
      <section id="services" className="services-area services-slider-area pt-130 pb-100">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <div className="section-title text-center mb-60">
                     <span className="sub-title">Our Ecosystem</span>
                     <h2 className="title">One Platform, Multiple Opportunities</h2>
                     <p>Access a comprehensive suite of financial services and tools designed to help you succeed in the digital economy.</p>
                  </div>
               </div>
            </div>
            <div className="services-slider-wrap">
               <Slider {...settings} className="services-slider">
                  {services.map((service) => (
                     <div key={service.id} className="services-slide-item">
                        <div 
                           className="services-fullbg-card"
                           style={{ backgroundImage: `url(${service.image})` }}
                        >
                           <div className="services-fullbg-overlay"></div>
                           {service.badge && (
                              <span className="services-badge">{service.badge}</span>
                           )}
                           <div className="services-fullbg-content">
                              <h3 className="title">{service.title}</h3>
                              <p>{service.description}</p>
                              <Link href={service.link} className="services-enter-btn">
                                 <i className="fas fa-arrow-right"></i> Enter
                              </Link>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </section>
   )
}

export default ServicesArea
