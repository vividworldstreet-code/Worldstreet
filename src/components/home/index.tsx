"use client"
import Banner from "./Banner";
import Brand from "./Brand";
import DownloadArea from "./DownloadArea";
import FAQ from "./Faq";
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import ServicesArea from "./ServicesArea";
import MarketChart from "./MarketChart";

const Home = () => {
   return (
      <>
         <Banner />
         <ServicesArea />
         <MarketChart />
         <Brand />
         <FeatureOne />
         <FeatureTwo />
         <FAQ />
         <DownloadArea />
      </>
   )
}

export default Home;
