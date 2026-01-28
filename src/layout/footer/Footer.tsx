"use client"
import Image from "next/image";
import Link from "next/link";

import footerShape_1 from "@/assets/img/images/footer_shape01.png";
import footerShape_2 from "@/assets/img/images/footer_shape02.png";
import NewsletterForm from "@/components/forms/NewsletterForm";

interface DataType {
   id: number;
   class_name: string;
   title: string;
   footer_link: {
      link: string;
      link_title: string;
   }[]
}

const footer_data: DataType[] = [
   {
      id: 1,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-6",
      title: "Markets",
      footer_link: [{ link: "/register", link_title: "Forex Trading" }, { link: "/register", link_title: "Cryptocurrencies" }, { link: "/register", link_title: "Commodities" }, { link: "/register", link_title: "Stock Indices" }, { link: "/register", link_title: "CFDs" },]
   },
   {
      id: 2,
      class_name: "col-xl-3 col-lg-2 col-md-4 col-sm-6",
      title: "Trade Tools",
      footer_link: [{ link: "/register", link_title: "Copy Trading" }, { link: "/register", link_title: "PAMM Accounts" }, { link: "#", link_title: "Vivid AI" }, { link: "/register", link_title: "Trading Signals" }, { link: "/register", link_title: "Economic Calendar" },]
   },
   {
      id: 3,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-4",
      title: "Company",
      footer_link: [{ link: "/about", link_title: "About Us" }, { link: "/contact", link_title: "Contact" }, { link: "/academy", link_title: "WS Academy" }, { link: "/blog", link_title: "Blog" }, { link: "/contact", link_title: "Support" },]
   },
]

const Footer = () => {
   return (
      <footer>
         <div className="footer-area footer-bg" style={{ backgroundImage: `url(/assets/img/bg/footer_bg.png)` }}>
            <div className="container">
               <div className="footer-top">
                  <div className="row">
                     {footer_data.map((item) => (
                        <div key={item.id} className={item.class_name}>
                           <div className="footer-widget">
                              <h4 className="fw-title">{item.title}</h4>
                              <div className="footer-link">
                                 <ul className="list-wrap">
                                    {item.footer_link.map((li, i) => (
                                       <li key={i}><Link href={li.link}>{li.link_title}</Link></li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}

                     <div className="col-xl-3 col-lg-4 col-sm-8">
                        <div className="footer-widget">
                           <h4 className="fw-title">Subscribe Newsletter</h4>
                           <div className="footer-newsletter">
                              <p>Stay updated with market insights, trading tips, and exclusive offers.</p>
                              <NewsletterForm/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Regulatory Disclaimer */}
               <div className="footer-disclaimer">
                  <div className="row">
                     <div className="col-12">
                        <div className="disclaimer-content">
                           <p><strong>Regulatory Information:</strong> Worldstreet entities are regulated by the appropriate financial authorities in each jurisdiction. Worldstreet Markets Limited is authorised to carry out the following Regulated Activities: (i) Dealing in Investments as Principal; (ii) Dealing in Investments as Agent; (iii) Arranging Deals in Investments; (iv) Managing Assets; (v) Providing Money Services; and (vi) Arranging Custody. All trading services are provided through properly licensed entities.</p>
                           <p><strong>Risk Warning:</strong> Trading foreign exchange, cryptocurrencies, and CFDs carries a high level of risk and may not be suitable for all investors. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Worldstreet is not liable for any trading losses you may incur. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. You should not invest money that you cannot afford to lose.</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="footer-bottom">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="copyright-text">
                           <p>Copyright © 2026 Worldstreet. All rights reserved.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-shape-wrap">
               <Image src={footerShape_1} alt="" className="alltuchtopdown" />
               <Image src={footerShape_2} alt="" className="leftToRight" />
            </div>
         </div>
      </footer>
   )
}

export default Footer;
