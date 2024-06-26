import React, { useEffect } from 'react';
import { PiFilmSlateFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";import { RiMovie2Fill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiTelevisionFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";


const Sidenav = () => {


  
  return (
    
      <div className='h-full w-[20%] bg-[#1F1E24] border-r-2 border-zinc-400 p-3 '>
        <h1 className='text-[2vw] gap-3 mt-2 pt-4 pl-2 text-white flex items-center select-none '>
          <PiFilmSlateFill  className='text-3xl'/>
          <span className=''>PG-FilmyBook</span>
        </h1>

        <nav className='flex flex-col text-zinc-400 text-[130%] '>
          <h1 className='text-white font-semibold text-[100%] ml-3 mt-16 mb-5'> New Feeds
          </h1>
          <Link className='hover:bg-[#6556CD] hover:text-white flex items-center duration-100 mb-1 rounded-lg p-5' to={"/trending"} ><FaFire className='mr-3'/> Trending</Link>
          <Link  to={"/popular"} className='hover:bg-[#6556CD] hover:text-white  flex items-center duration-100  rounded-lg p-5' ><GiFallingStar className='mr-3' /> Popular</Link>
          <Link to={"/movie"} className='hover:bg-[#6556CD] hover:text-white flex items-center  duration-100  rounded-lg p-5' ><RiMovie2Fill className='mr-3'/> Movies</Link>
          <Link to={"/tvshows"} className='hover:bg-[#6556CD] hover:text-white flex items-center  duration-100  rounded-lg p-5' ><PiTelevisionFill  className='mr-3'/> TV Shows</Link>
          <Link to={"/person"} className='hover:bg-[#6556CD] hover:text-white flex items-center duration-100   rounded-lg p-5' ><FaPeopleGroup className='mr-3'/> People</Link>
        </nav>

        <hr className='mt-2 border-none bg-zinc-400 h-[1px]'/>

        <nav className='flex flex-col text-zinc-400 text-[130%]'>
          <h1 className='text-white font-semibold  ml-[5%] mt-[10%] mb-[3%]'> Website Info
          </h1>
          <Link to={"/about"} className='hover:bg-[#6556CD] hover:text-white flex items-center duration-100  rounded-lg p-[7%]'><IoIosInformationCircle   className='mr-[6%] '/> About </Link>
          <Link to={"/contact"} className='hover:bg-[#6556CD] hover:text-white  flex items-center duration-100  rounded-lg p-[7%]' ><FaPhone className='mr-[6%]'/> Contact Us</Link>
          

        </nav>

    </div>
    
  )
}

export default Sidenav;
