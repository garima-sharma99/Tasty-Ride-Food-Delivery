import './App.css';
import Timer from './HomePge/Timer';
import FrontLook from './HomePge/FrontLook';
import Home from './HomePge/Home';
import Navbar from './HomePge/Navbar';
import Silder from './HomePge/Silder';
import Footer from './HomePge/Footer';
import { foodMenu } from './Menu/MenuData';
import MenuCard from './Menu/MenuCard';
import Menu from './Menu/Menu'
import SignUp from './Login/SignUp';

function App() {
  return (
    <>
      <Home />

      {/* <FrontLook/> */}

      {/* <Silder/> */}




      {/* <div>
      <h1>React Countdown Timer</h1>
    <Timer initialSeconds={36000}/>
    </div> */}


      {/* <Menu/> */}

      <SignUp />

      <Footer />


    </>
  );
}

export default App;
