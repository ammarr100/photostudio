import React,{useEffect} from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import Footer from './Footer/Footer';
import Hands from './Hands/Hands';
import Header from './Header/Header';
import Icons from './Icons/Icons';
import Navbar from './Navbar/Navbar';
import Parallax from './Parallax/Parallax';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000, offset:200})
  },[])
  return (
      <>      
          <Navbar/>
          <Header/>
          <Parallax/>
          <About/>
          <Icons/>
          <Events/>
          <Hands/>
          <Contact/>
          <Footer/>
       
      
      </>
  )
};

export default Home;
