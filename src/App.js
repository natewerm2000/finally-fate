//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />3
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './pages/page_components/VerticalNav';
import Time from './pages/page_components/Time';

function App() {
  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/shop":
      Component = Shop
      break
    case "/contact":
        Component = Contact
        break
    default:
      Component = Home
      break
  }
  return (
    <>
      <Navbar li={[
        ["Home","/img/restaurant.svg","/" ],
        ["Shop", "/img/manage user.svg","/shop"],
        ["Contact", "/img/manage coupon.svg","/contact"],
      ]}
    />
    <Time />
      <Component />
  </>
  )
}

export default App;
