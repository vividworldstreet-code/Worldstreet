"use client"
import Image from "next/image"
import Link from "next/link"

import bannerShape_1 from "@/assets/img/banner/banner_shape01.png";
import bannerShape_2 from "@/assets/img/banner/banner_shape02.png";

const Banner = () => {
   return (
      <section className="banner-area banner-bg" style={{ backgroundImage: `url(/assets/img/banner/banner_bg.png)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="banner-content text-center">
                     <h2 className="title">Trade Forex and Crypto Markets <br /> <span>With Confidence</span></h2>
                     <p>Join millions to securely trade crypto and fiat on a multi-sector digital ecosystem <br /> built to empower individuals and businesses worldwide.</p>
                     <div className="banner-btn-wrap">
                        <Link href="/register" className="btn banner-btn-primary">Start Trading</Link>
                        <Link href="#services" className="btn banner-btn-secondary">Explore Our Ecosystem <i className="fas fa-arrow-right"></i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="banner-scroll-down">
               <a href="#services" className="section-link">
                  <span></span>
                  <span></span>
                  <span></span>
               </a>
         </div>
         <div className="banner-shape-wrap">
            <Image src={bannerShape_1} alt="" className="leftToRight" />
            <Image src={bannerShape_2} alt="" className="alltuchtopdown" />
         </div>
      </section>
   )
}

export default Banner
