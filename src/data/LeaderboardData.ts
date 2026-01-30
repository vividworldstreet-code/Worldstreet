// Trader of the Week Leaderboard Data

export interface Trader {
   id: number;
   rank: number;
   username: string;
   country: string;
   countryCode: string; // ISO 3166-1 alpha-2 for flagcdn
   asset: string;
   volume: number; // in lots
   status: 'active' | 'in-progress' | 'finalized';
   isCurrentUser?: boolean;
}

export interface Prize {
   id: number;
   icon: string;
   title: string;
   description: string;
   highlight?: boolean;
}

export interface ParticipationStep {
   id: number;
   step: number;
   title: string;
   description: string;
}

export interface FAQ {
   id: number;
   question: string;
   answer: string;
}

// Competition metadata
export const competitionInfo = {
   title: "Trader of the Week",
   description: "Trader of the Week rewards the most active and disciplined traders on WorldStreet. Every week, traders compete based on verified trading activity. The top-ranked traders win cash, gadgets, and tools built for the next generation of global traders.",
   weekStart: "Sunday 00:00 UTC",
   weekEnd: "Saturday 23:59 UTC",
};

// Weekly prizes
export const prizes_data: Prize[] = [
   {
      id: 1,
      icon: "Trophy",
      title: "Grand Prize",
      description: "$5,000 cash",
      highlight: true,
   },
   {
      id: 2,
      icon: "Smartphone",
      title: "Premium Gadgets",
      description: "iPhones",
   },
   {
      id: 3,
      icon: "Laptop",
      title: "Trading Tools",
      description: "Laptops & accessories",
   },
   {
      id: 4,
      icon: "Headphones",
      title: "Lifestyle Gear",
      description: "Headphones, smart tools, productivity gadgets",
   },
];

// How to participate steps
export const participation_steps: ParticipationStep[] = [
   {
      id: 1,
      step: 1,
      title: "Trade Any Market",
      description: "Trade any supported market on WorldStreet",
   },
   {
      id: 2,
      step: 2,
      title: "Minimum 0.1 Lot",
      description: "Minimum trade size: 0.1 lot",
   },
   {
      id: 3,
      step: 3,
      title: "Increase Your Score",
      description: "Every eligible trade increases your leaderboard score",
   },
   {
      id: 4,
      step: 4,
      title: "Track Rankings",
      description: "Rankings update in near real-time",
   },
   {
      id: 5,
      step: 5,
      title: "Win Weekly",
      description: "Winners are announced every week",
   },
];

// FAQ tooltips
export const faq_tooltips: FAQ[] = [
   {
      id: 1,
      question: "How is ranking calculated?",
      answer: "Rankings are based on total eligible trading volume (lots) completed during the competition week. Profit or loss does not affect your rank.",
   },
   {
      id: 2,
      question: "Who can participate?",
      answer: "Any verified WorldStreet trader who places trades of at least 0.1 lot during the active competition period.",
   },
   {
      id: 3,
      question: "What counts as volume?",
      answer: "Only completed and verified trades placed within this week are counted. Canceled or reversed trades are excluded.",
   },
   {
      id: 4,
      question: "What happens in a tie?",
      answer: "Ties are resolved by number of trades, then by who reached the volume first.",
   },
   {
      id: 5,
      question: "Why does time matter?",
      answer: "Rankings lock when the competition ends. Final positions determine the winners.",
   },
   {
      id: 6,
      question: "Fair play notice",
      answer: "Trades flagged for manipulation or policy violations may be removed from the leaderboard.",
   },
];

// Asset classes for filtering
export const assetClasses = [
   { id: 'all', label: 'All Assets' },
   { id: 'forex', label: 'Forex' },
   { id: 'crypto', label: 'Crypto' },
   { id: 'indices', label: 'Indices' },
   { id: 'commodities', label: 'Commodities' },
];

// Countries for filtering
export const countries = [
   { code: 'all', name: 'All Countries' },
   { code: 'NG', name: 'Nigeria' },
   { code: 'US', name: 'United States' },
   { code: 'GB', name: 'United Kingdom' },
   { code: 'DE', name: 'Germany' },
   { code: 'JP', name: 'Japan' },
   { code: 'AE', name: 'UAE' },
   { code: 'ZA', name: 'South Africa' },
   { code: 'KE', name: 'Kenya' },
   { code: 'GH', name: 'Ghana' },
   { code: 'SG', name: 'Singapore' },
];

// Mock leaderboard data
const leaderboard_data: Trader[] = [
   {
      id: 1,
      rank: 1,
      username: "TradeMaster_NG",
      country: "Nigeria",
      countryCode: "NG",
      asset: "XAUUSD",
      volume: 847.5,
      status: "active",
   },
   {
      id: 2,
      rank: 2,
      username: "CryptoKing_UK",
      country: "United Kingdom",
      countryCode: "GB",
      asset: "BTCUSD",
      volume: 723.2,
      status: "active",
   },
   {
      id: 3,
      rank: 3,
      username: "ForexPro_DE",
      country: "Germany",
      countryCode: "DE",
      asset: "EURUSD",
      volume: 698.8,
      status: "active",
   },
   {
      id: 4,
      rank: 4,
      username: "IndexTrader_US",
      country: "United States",
      countryCode: "US",
      asset: "NAS100",
      volume: 542.3,
      status: "active",
   },
   {
      id: 5,
      rank: 5,
      username: "GoldRush_AE",
      country: "UAE",
      countryCode: "AE",
      asset: "XAUUSD",
      volume: 498.1,
      status: "active",
   },
   {
      id: 6,
      rank: 6,
      username: "TechTrader_JP",
      country: "Japan",
      countryCode: "JP",
      asset: "NAS100",
      volume: 456.7,
      status: "active",
   },
   {
      id: 7,
      rank: 7,
      username: "SwingMaster_ZA",
      country: "South Africa",
      countryCode: "ZA",
      asset: "EURUSD",
      volume: 389.4,
      status: "active",
   },
   {
      id: 8,
      rank: 8,
      username: "CryptoWave_KE",
      country: "Kenya",
      countryCode: "KE",
      asset: "ETHUSD",
      volume: 345.2,
      status: "active",
   },
   {
      id: 9,
      rank: 9,
      username: "ScalpKing_GH",
      country: "Ghana",
      countryCode: "GH",
      asset: "GBPUSD",
      volume: 312.8,
      status: "active",
   },
   {
      id: 10,
      rank: 10,
      username: "OilBaron_SG",
      country: "Singapore",
      countryCode: "SG",
      asset: "USOIL",
      volume: 287.5,
      status: "active",
   },
   {
      id: 11,
      rank: 11,
      username: "MomentumX_NG",
      country: "Nigeria",
      countryCode: "NG",
      asset: "XAUUSD",
      volume: 256.3,
      status: "active",
   },
   {
      id: 12,
      rank: 12,
      username: "TrendRider_US",
      country: "United States",
      countryCode: "US",
      asset: "SPX500",
      volume: 234.1,
      status: "active",
   },
   {
      id: 13,
      rank: 13,
      username: "FXWizard_GB",
      country: "United Kingdom",
      countryCode: "GB",
      asset: "EURUSD",
      volume: 198.7,
      status: "active",
   },
   {
      id: 14,
      rank: 14,
      username: "DemoTrader_NG",
      country: "Nigeria",
      countryCode: "NG",
      asset: "BTCUSD",
      volume: 156.4,
      status: "active",
      isCurrentUser: true, // Demo user position
   },
   {
      id: 15,
      rank: 15,
      username: "AlphaSignals_DE",
      country: "Germany",
      countryCode: "DE",
      asset: "DAX40",
      volume: 143.2,
      status: "active",
   },
   {
      id: 16,
      rank: 16,
      username: "PipHunter_AE",
      country: "UAE",
      countryCode: "AE",
      asset: "XAUUSD",
      volume: 128.9,
      status: "active",
   },
   {
      id: 17,
      rank: 17,
      username: "MarketMind_JP",
      country: "Japan",
      countryCode: "JP",
      asset: "USDJPY",
      volume: 112.5,
      status: "active",
   },
   {
      id: 18,
      rank: 18,
      username: "ChartPro_ZA",
      country: "South Africa",
      countryCode: "ZA",
      asset: "XAUUSD",
      volume: 98.3,
      status: "active",
   },
   {
      id: 19,
      rank: 19,
      username: "SmartMoney_KE",
      country: "Kenya",
      countryCode: "KE",
      asset: "EURUSD",
      volume: 87.1,
      status: "active",
   },
   {
      id: 20,
      rank: 20,
      username: "VolumeKing_GH",
      country: "Ghana",
      countryCode: "GH",
      asset: "GBPJPY",
      volume: 76.8,
      status: "active",
   },
];

export default leaderboard_data;

// Helper function to get flag URL from flagcdn
export const getFlagUrl = (countryCode: string, size: number = 32): string => {
   return `https://flagcdn.com/w${size}/${countryCode.toLowerCase()}.png`;
};

// Helper to categorize assets
export const getAssetClass = (asset: string): string => {
   const forexPairs = ['EURUSD', 'GBPUSD', 'USDJPY', 'GBPJPY', 'AUDUSD', 'USDCAD', 'NZDUSD'];
   const cryptoPairs = ['BTCUSD', 'ETHUSD', 'XRPUSD', 'LTCUSD'];
   const indices = ['NAS100', 'SPX500', 'DAX40', 'UK100', 'JP225'];
   const commodities = ['XAUUSD', 'XAGUSD', 'USOIL', 'UKOIL'];

   if (forexPairs.includes(asset)) return 'forex';
   if (cryptoPairs.includes(asset)) return 'crypto';
   if (indices.includes(asset)) return 'indices';
   if (commodities.includes(asset)) return 'commodities';
   return 'other';
};
