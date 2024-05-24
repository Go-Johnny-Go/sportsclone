import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
<nav className='wrapper h-20 py-8  flex items-center justify-between  z-50  relative md:static lg:static '>
        <a href="./" className='w-1/3 max-w-[250px]'>
          <img src="./logo.svg" alt=""  className='w-full'/>
        </a>
        <input type="checkbox" name="" id="menu" className='peer hidden'/>
        <label htmlFor="menu" className=' text-white bg-open-menu w-6 h-5 bg-cover bg-center cursor cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden'></label>
        <div className='fixed inset-0  bg-black  translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none  '>
          <ul className=' absolute inset-x-0 top-24 p-12  w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static md:text-white italic text-xl md:text-sm lg:text-2xl text-white'>
            <li className=' lg:hover:bg-slate-800/80 lg:py-20 lg:px-2 hover:text-red-600' ><Link to="/">Inicio</Link></li>
            <li className=' lg:hover:bg-slate-800/80 lg:py-20 lg:px-2 hover:text-red-600' ><Link to="nosotros">Nosotros</Link></li>
            <li className=' lg:hover:bg-slate-800/80 lg:py-20 lg:px-2 hover:text-red-600' ><Link to="carreras">Carreras</Link></li>
            <li className=' lg:hover:bg-slate-800/80 lg:py-20 lg:px-2 hover:text-red-600'><Link to="clasificacion">Clasificacion</Link></li>
            <li className='lg:hover:bg-slate-800/80 lg:py-20 lg:px-2 hover:text-red-600'><Link to="run">Run +</Link></li>
          </ul>
        </div>
      </nav>
  );
}

export default NavBar;