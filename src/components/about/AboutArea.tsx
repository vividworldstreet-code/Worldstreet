"use client"

const AboutArea = () => {
   return (
      <section className="about-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-10">
                  <div className="section-title text-center mb-50">
                     <span className="sub-title">About Worldstreet</span>
                     <h2 className="title">Empowering Your Financial Journey</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6">
                  <div className="about-content">
                     <h3>Our Mission</h3>
                     <p>
                        Worldstreet is a multi-sector digital ecosystem built to empower individuals 
                        and businesses across Africa and beyond. We combine financial markets trading, 
                        education, e-commerce, and community features into one unified platform.
                     </p>
                     <p>
                        Our mission is to democratize access to global financial markets, providing 
                        traders and entrepreneurs with the tools, knowledge, and community support 
                        they need to succeed in the digital economy.
                     </p>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about-content">
                     <h3>Our Values</h3>
                     <ul className="list-wrap">
                        <li><i className="fas fa-check-circle"></i> <strong>Trust:</strong> Building lasting relationships through transparency</li>
                        <li><i className="fas fa-check-circle"></i> <strong>Accessibility:</strong> Making financial markets available to everyone</li>
                        <li><i className="fas fa-check-circle"></i> <strong>Innovation:</strong> Continuously improving our tools and services</li>
                        <li><i className="fas fa-check-circle"></i> <strong>Community:</strong> Growing together with our global network</li>
                        <li><i className="fas fa-check-circle"></i> <strong>Education:</strong> Empowering through knowledge and resources</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="row mt-60">
               <div className="col-lg-4 col-md-6">
                  <div className="about-item text-center">
                     <div className="about-icon">
                        <i className="fas fa-globe"></i>
                     </div>
                     <h4>Global Reach</h4>
                     <p>Serving traders and entrepreneurs across Africa and worldwide</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="about-item text-center">
                     <div className="about-icon">
                        <i className="fas fa-shield-alt"></i>
                     </div>
                     <h4>Secure Platform</h4>
                     <p>Enterprise-grade security protecting your assets and data</p>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="about-item text-center">
                     <div className="about-icon">
                        <i className="fas fa-users"></i>
                     </div>
                     <h4>Community Driven</h4>
                     <p>Join millions of users in our growing ecosystem</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutArea
