import Error from "@/components/error/Index";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Page Not Found - Worldstreet",
};
const index = () => {
   return (
      <Wrapper>
         <Error />
      </Wrapper>
   )
}

export default index
