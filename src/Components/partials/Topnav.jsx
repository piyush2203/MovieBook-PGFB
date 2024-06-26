import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import axios from "../../utils/Axios";
import secondimage from "/noimage.jpg"
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

const Topnav = () => {

  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async()=>{
    try{
        const { data }= await axios.get(`/search/multi?query=${query}`);
        // console.log(query);
        setsearches(data.results);
    }catch(error){
        console.log("Error: ", error);
    }
  };

  useEffect(()=>{
    GetSearches();
  },[query])


  return (
    <div className='w-[80%] h-[10vh] flex items-center relative justify-start ml-[20%]'>
      <FaSearch className='text-3xl mr-[2%] text-zinc-400 ' />
      <input 
      onChange={(e)=> setquery(e.target.value)}
      value={query}
      type="text" className=' w-[40%] p-5 text-xl ml-2 h-[60%] outline-none border-none  bg-zinc-800 rounded-lg text-white' placeholder='Search Anything'/>
      {query.length>0 && <RxCross2  className='text-3xl  text-zinc-400'
      onClick={()=>setquery("")}
      /> }

      

      <div className='w-[45%] z-40  max-h-[50vh] bg-zinc-200 absolute top-[100%] overflow-auto'>
        {searches.map((s,i) => ( 
        <Link key={i} to={`/${s.media_type}/details/${s.id}`} className='font-semibold hover:bg-zinc-600 hover:text-black  duration-300 text-zinc-700 w-[100%] py-10 pl-14 inline-block border-b-2 border-zinc-100 flex items-center justify-start'>
            <img src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: secondimage} alt={""}  className='w-[10vh] h-[10vh] object-cover rounded ]'/> 
            <span className='ml-10'>{s.original_title || s.title || s.name || s.original_name }</span>
        </Link> 
      ))}
      </div>

    </div>
  )
}

export default Topnav
