import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import secondimage from "/noimage.jpg"


const HorizontalCard = ({ data, func }) => {

  console.log(data);
  return (
    


    <div className="w-full h-[40vh]  overflow-auto p-5 ">
      

      <div className="w-[100%] h-[100%] flex overflow-auto overflow-y-auto ">


        {data.map((data, i) => (
          <Link to={`/${data.media_type}/details/${data.id }`} className="min-w-[15%] h-[85%] mr-5  bg-zinc-800 rounded border-white overflow-hidden mr-5" key={i}>
            <img
                className="w-full h-[45%] object-cover rounded "
              src={ data.backdrop_path || data.profile_path || data.poster_path ? `https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.profile_path || data.poster_path
              }`: secondimage}
              alt=""
            />
            <div className="h-[12.5%] pt-[2%]  overflow-y-hidden">
            <h1 className="text-[1.2vw] pl-2  w-[100%] font-black text-white">
              {data.original_title ||
                data.title ||
                data.name ||
                data.original_name}
            </h1>
            </div>
            <div className="w-[100%] overflow-y-hidden">
            <p className="w-[90%] text-[0.8vw] text-white mt-3 pl-2 text-wrap">
              {data.overview.slice(0, 52)} ... <span className="text-zinc-400">more</span> 
              
            </p>
            </div>
            
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;
