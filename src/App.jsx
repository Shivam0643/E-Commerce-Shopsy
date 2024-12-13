import React, {useEffect} from 'react';
import Navbar from './compoents/Navbar';
import Hero from './compoents/Hero/Hero';
import Products from './compoents/Products/Products';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProducts from './compoents/TopProducts/TopProducts';
import Banner from './compoents/Banner/Banner';
import Subscribe from './compoents/Subscribe/Subscribe';
import Testimonials from './compoents/Testimonials/Testimonials';
import Footer from './compoents/Footer/Footer';
import Popup from './compoents/Popup/Popup';


const App = () => {

  const [orderPopup,setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      dalay: 100,
    })
    AOS.refresh();
  }, [])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/>
    <Products />
    <TopProducts handleOrderPopup={handleOrderPopup}/>
    <Banner/>
    <Subscribe/>
    <Products />
    <Testimonials/>
    <Footer/>
    <Popup orderPopup = {orderPopup} setOrderPopup = {setOrderPopup} />
    </div>

  )
}

export default App

