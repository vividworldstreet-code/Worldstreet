"use client"
import { useEffect, useRef, useState } from 'react';

interface MarketPair {
   symbol: string;
   name: string;
}

const marketPairs: MarketPair[] = [
   { symbol: "FX:EURUSD", name: "EUR/USD" },
   { symbol: "FX:GBPUSD", name: "GBP/USD" },
   { symbol: "BINANCE:BTCUSDT", name: "BTC/USDT" },
   { symbol: "BINANCE:ETHUSDT", name: "ETH/USDT" },
   { symbol: "FX:USDJPY", name: "USD/JPY" },
   { symbol: "OANDA:XAUUSD", name: "Gold/USD" },
];

const MarketChart = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const [selectedPair, setSelectedPair] = useState<MarketPair>(marketPairs[0]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      if (!containerRef.current) return;

      // Clear previous widget
      containerRef.current.innerHTML = '';
      setIsLoading(true);

      // Create widget container
      const widgetContainer = document.createElement('div');
      widgetContainer.className = 'tradingview-widget-container__widget';
      widgetContainer.style.height = '100%';
      widgetContainer.style.width = '100%';
      containerRef.current.appendChild(widgetContainer);

      // Create script element
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
         "autosize": true,
         "symbol": selectedPair.symbol,
         "interval": "60",
         "timezone": "Etc/UTC",
         "theme": "dark",
         "style": "1",
         "locale": "en",
         "enable_publishing": false,
         "backgroundColor": "rgba(14, 17, 23, 1)",
         "gridColor": "rgba(42, 46, 57, 0.3)",
         "hide_top_toolbar": false,
         "hide_legend": false,
         "save_image": false,
         "calendar": false,
         "hide_volume": false,
         "support_host": "https://www.tradingview.com"
      });

      script.onload = () => {
         setIsLoading(false);
      };

      containerRef.current.appendChild(script);

      return () => {
         if (containerRef.current) {
            containerRef.current.innerHTML = '';
         }
      };
   }, [selectedPair]);

   return (
      <section className="market-chart-area pt-130 pb-100">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10">
                  <div className="section-title text-center mb-50">
                     <span className="sub-title">Live Market Data</span>
                     <h2 className="title">Real-Time <span>Market Charts</span></h2>
                     <p>Track live prices and analyze market trends with our advanced charting tools. 
                        Trade Forex, Crypto, Commodities and more with Worldstreet.</p>
                  </div>
               </div>
            </div>

            <div className="market-chart-wrapper">
               {/* Pair Selection Tabs */}
               <div className="market-pair-tabs mb-30">
                  <ul className="nav nav-tabs justify-content-center" role="tablist">
                     {marketPairs.map((pair, index) => (
                        <li key={index} className="nav-item">
                           <button
                              onClick={() => setSelectedPair(pair)}
                              className={`nav-link ${selectedPair.symbol === pair.symbol ? 'active' : ''}`}
                           >
                              {pair.name}
                           </button>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* TradingView Chart Container */}
               <div className="chart-container-wrapper">
                  {isLoading && (
                     <div className="chart-loading">
                        <div className="spinner"></div>
                        <p>Loading {selectedPair.name} chart...</p>
                     </div>
                  )}
                  <div 
                     ref={containerRef} 
                     className="tradingview-widget-container"
                     style={{ height: '650px', width: '100%' }}
                  />
               </div>

               {/* Market Info Cards */}
               <div className="market-info-cards mt-50">
                  <div className="row">
                     <div className="col-lg-4 col-md-6">
                        <div className="market-info-card">
                           <div className="icon">
                              <i className="fas fa-chart-line"></i>
                           </div>
                           <h4>Advanced Analysis</h4>
                           <p>Professional-grade charting tools with 100+ technical indicators</p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                        <div className="market-info-card">
                           <div className="icon">
                              <i className="fas fa-bolt"></i>
                           </div>
                           <h4>Real-Time Data</h4>
                           <p>Live streaming prices with ultra-low latency execution</p>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6">
                        <div className="market-info-card">
                           <div className="icon">
                              <i className="fas fa-globe"></i>
                           </div>
                           <h4>Global Markets</h4>
                           <p>Access Forex, Crypto, Stocks, Commodities and Indices</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default MarketChart;
