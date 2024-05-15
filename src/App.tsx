import './App.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube ,  FaArrowLeft, FaArrowRight   } from "react-icons/fa";
import  { useState } from 'react';
import { RxDotFilled } from "react-icons/rx";

function App() {

  const slides = [
   {url:"https://mdbcdn.b-cdn.net/img/new/slides/041.webp"},
    {url:"https://mdbcdn.b-cdn.net/img/new/slides/042.webp"},
    { url:"https://mdbcdn.b-cdn.net/img/new/slides/043.webp"}
  ];

  const [currentIndex, setCurrentindex] = useState(2);

  const prevSlide =()=>{
    const isFirstSlide = currentIndex ===0
    const newIndex = isFirstSlide ? slides.length -1: currentIndex -1
    setCurrentindex(newIndex)
  };
  const nextSlide =()=>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentindex(newIndex);
  };

  const goToSlide = (slideIndex:number)=>{
    setCurrentindex(slideIndex)
  }


  return (
    <header className=' bg-black'>
      {/*Navegation */}
      <section className='bg-red-700'>
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
      <nav className='wrapper h-20  flex items-center justify-between '>
        <a href="./" className='w-1/3 max-w-[150px]'>
          <img src="./logo.svg" alt=""  className='w-full'/>
        </a>
        <input type="checkbox" name="" id="menu" className='peer hidden'/>
        <label htmlFor="menu" className=' text-white bg-open-menu w-6 h-5 bg-cover bg-center cursor cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden'></label>
        <div className='fixed inset-0  bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none'>
          <ul className=' absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static md:text-white'>
            <li><a href="">Inicio</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Carreras</a></li>
            <li><a href="">Clacificacion</a></li>
            <li><a href="">Run</a></li>
          </ul>
        </div>
      </nav>
      {/*Image Slider */}
      <section className='z-30' >
        <div className='max-w-[180px] h-[780px] w-full m-auto py-16 px-4 static md:relative group  z-30'>
          <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} 
              className='w-full h-full   rounded-2xl bg-center bg-cover duration-500  z-10'>
           </div>     
              {/*Left Arrow */}  
            
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[200%] md:translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-30'>
              <FaArrowLeft size={30} onClick={prevSlide} className='text-white'/>
              </div>
         
              {/*Right Arrow */}  
              <div className=' z-30 hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[200%] md:translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <FaArrowRight size={30} onClick={nextSlide} className='text-white'/>
              </div>
              <div className=' flex top-4 justify-center py-2 z-30'>
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
    </header>     
  )
}

export default App
