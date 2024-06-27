import React from "react";
import { Link } from "react-router-dom";
import { IoMdMegaphone } from "react-icons/io";
import { IoMdAlbums } from "react-icons/io";

const Header = ({ data }) => {
  
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top 10%",
        objectPosition: "center down"
      }}
      className="w-full h-[50vh] relative border-y-2 border-white flex flex-col  p-[3%] "
    >
      {/* <div className="h-[70%] overflow-y-auto w-full"></div>
      <h1 className="text-[300%] w-[70%] h-[10vh] font-black text-white">
        {data.original_title || data.title || data.name || data.original_name}
      </h1>
      
      <p className="w-[85%] text-white mt-[1%]">{data.overview.slice(0,200)}...<Link className="text-zinc-500" to={`/${data.media_type}/details/${data.id}`} >more</ Link >
      </p>
      <p className="text-white mt-[1.5%] h-[5vh] flex gap-3 items-center">
        <IoMdMegaphone  className="text-yellow-400"/>{data.release_date || "No Info"}
        
      </p>
      <p className="text-white mt-[1.5%] flex gap-3 items-center w-[30%]" ><IoMdAlbums className="text-yellow-400"/> {data.media_type.toUpperCase()}</p>

      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="bg-[#6556CD] p-[1vh] w-[8vw]  mt-4 rounded">Watch Trailer</Link> */}
      <div className="w-full h-[20%] "></div>
      <div className="h-[20%] mb-[1%] ">
        <h1 className="text-[300%] w-[70vw]  font-black text-white">
          {data.original_title || data.title || data.name || data.original_name}
        </h1>
      </div>
      <div className="h-[18%] overflow-y-auto">
        <p className="w-[85%] text-white ">{data.overview.slice(0,160)}...<Link className="text-zinc-500" to={`/${data.media_type}/details/${data.id}`} >more</ Link >
        </p>
      </div>
      <div className="h-[5%] ">
        <p className="text-white  h-[5vh] flex gap-3 items-center">
          <IoMdMegaphone  className="text-yellow-400"/>{data.release_date || "No Info"}
          
        </p>
      </div>
      <div className="h-[10%] mt-[1.7%]">
        <p className="text-white  flex gap-3  items-center w-[30%]" ><IoMdAlbums className="text-yellow-400"/> {data.media_type.toUpperCase()}</p>
      </div>

      <div className="mt-[2%] bottom-[10%]">
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="bg-[#6556CD] p-[1vh] w-[8vw]   rounded">Watch Trailer</Link> 
      </div>



      {/* <div className="h-[70%] overflow-y-auto w-full">
        
      </div> */}

    </div>
  );
};

export default Header;
