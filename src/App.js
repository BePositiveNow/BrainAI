import Header from "./components/Header";
import Footer from "./components/Footer";
import AI from "./sections/AI";
import Collab from "./sections/Collab";
import Home from "./sections/Home";
import Payment from "./sections/Payment";
import Robot from "./sections/Robot";
import Services from "./sections/Services";
import Video from "./sections/Video";
import New from "./sections/New";







const App = () => {
   return (
       <>
   
<Header />
<Home />
<Robot />
<Services />
<Collab />
<AI />
<Video />
<Payment />
<New />
<Footer />
     
      </>
   )
}

export default App;