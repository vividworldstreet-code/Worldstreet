"use client"
import Image, { StaticImageData } from "next/image"

import featuresImg_1 from "@/assets/img/images/features_two_img01.png";
import featuresImg_2 from "@/assets/img/images/features_two_img02.png";
import featuresImg_3 from "@/assets/img/images/features_two_img03.png";

import featuresTitleImg_1 from "@/assets/img/images/title_img01.jpg";
import featuresTitleImg_2 from "@/assets/img/images/title_img02.jpg";

import featuresShape_1 from "@/assets/img/images/features_shape01.png";
import featuresShape_2 from "@/assets/img/images/features_shape02.png";

interface DataType {
   id: number;
   title: string;
   img: StaticImageData;
}

const feature_data: DataType[] = [
   {
      id: 1,
      title: "Fast Deposits & Withdrawals",
      img: featuresImg_1
   },
   {
      id: 2,
      title: "Advanced Trading Tools",
      img: featuresImg_2
   },
   {
      id: 3,
      title: "Learn & Earn Programs",
      img: featuresImg_3
   }
]

const FeatureTwo = () => {
   return (
      <section className="features-area-two features-bg" style={{ backgroundImage: `url(/assets/img/bg/features_bg.png)` }}>
         <div className="container">
            <div className="features-inner-wrap">
               <div className="features-item-wrap">
                  <div className="row justify-content-center">
                     {feature_data.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                           <div className="features-item-two">
                              <div className="features-img-two">
                                 <Image src={item.img} alt="" />
                              </div>
                              <div className="features-content-two">
                                 <h2 className="title">{item.title}</h2>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title section-title-two text-center">
                        <h2 className="title">World&apos;s Leading Multi-Asset Trading Platform
                           <Image src={featuresTitleImg_1} alt="" />
                           designed to empower traders with professional tools,
                           <Image src={featuresTitleImg_2} alt="" />
                           education, and a thriving community</h2>
                     </div>
                  </div>
               </div>
               <div className="features-line-shape"></div>
            </div>
         </div>
         <div className="features-shape-wrap">
            <Image src={featuresShape_1} alt="" className="alltuchtopdown" />
            <Image src={featuresShape_2} alt="" className="leftToRight" />
         </div>
      </section>
   )
}

export default FeatureTwo
