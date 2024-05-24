import './App.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube ,  FaArrowLeft, FaArrowRight   } from "react-icons/fa";
import  { useState, useEffect, useCallback } from 'react';
import { RxDotFilled } from "react-icons/rx";
import Cards from './components/cards';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Carreras from './pages/Carreras';
import Clasificacion from './pages/Clasificacion';
import Run from './pages/Run';
import NavBar from './navigation/NavBar';
function App() {

  const slides = [
  {url:"https://mdbcdn.b-cdn.net/img/new/slides/041.webp"},
  {url:"https://mdbcdn.b-cdn.net/img/new/slides/042.webp"},
  {url:"https://mdbcdn.b-cdn.net/img/new/slides/043.webp"}
  ];

  const [currentIndex, setCurrentindex] = useState(2);

  const prevSlide =()=>{
    const isFirstSlide = currentIndex ===0
    const newIndex = isFirstSlide ? slides.length -1: currentIndex -1
    setCurrentindex(newIndex)
  };
  const nextSlide = useCallback(()=>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentindex(newIndex);
  },[currentIndex, slides.length]);

  const goToSlide = (slideIndex:number)=>{
    setCurrentindex(slideIndex)
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Cambia la imagen cada 4 segundos
  
    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);


  return (
    
   <Router>

    <header className=' bg-black'>
      {/*Social media */}
      <section className='bg-red-700 '>
        <div className=' wrapper text-sm text-white flex  items-center justify-between p-2'>
          <a href="" className='hidden md:block' >info@sportfacilities.com.ar</a>
          <ul className='flex grip gap-6  '>
            <li><a href=""><FaFacebookF /></a></li>
            <li><a href=""><FaTwitter /></a></li>
            <li><a href=""><FaInstagram /></a></li>
            <li><a href=""><FaYoutube /></a></li>
          </ul>
        </div>
      </section>
      {/*Navegation */}
      
        <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/carreras" element={<Carreras />} />
          <Route path="/clasificacion" element={<Clasificacion />} />
          <Route path="/run" element={<Run />} />
        </Routes>
    
      
      {/*Image Slider */}
      <section className='wrapper  mb-4' >
        <div className='max-w-[1700px] h-[80%] w-full m-auto lg:h-[580px] py-2  lg:px-0 static md:relative group '>
            <LazyLoadImage
              src={slides[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              effect="blur"
              className='w-full h-full bg-center  bg-cover duration-500  '
            />
              {/*Left Arrow */}  
            
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-620%] lg:translate-y-[-50%] md:translate-y-[-100%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-30'>
              <FaArrowLeft size={30} onClick={prevSlide} className='text-white '/>
              </div>
         
              {/*Right Arrow */}  
              <div className=' z-30 hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-620%] lg:translate-y-[-50%] md:translate-y-[-100%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <FaArrowRight size={30} onClick={nextSlide} className='text-white'/>
              </div>
              <div className=' flex top-4 justify-center py-2  z-30'>
                    {slides.map((_, slideIndex) =>(
                      <div 
                      key={slideIndex} 
                      onClick={() => goToSlide(slideIndex) } 
                      className='text-white text-2xl cursor-pointer'
                      >
                        <RxDotFilled />
                      </div>
                    ) )}
              </div>
        </div>
      </section>
      {/*Cards of Events */}
      <section>
        <Cards/>
      </section>
    </header>
  </Router>
  )
}

export default App
