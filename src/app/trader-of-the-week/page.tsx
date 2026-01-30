import Leaderboard from "@/components/leaderboard";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Trader of the Week | WorldStreet",
   description: "Compete in WorldStreet's weekly trading competition. Top traders win cash prizes, premium gadgets, and trading tools.",
};

const TraderOfTheWeek = () => {
   return (
      <Wrapper>
         <Leaderboard />
      </Wrapper>
   )
}

export default TraderOfTheWeek
