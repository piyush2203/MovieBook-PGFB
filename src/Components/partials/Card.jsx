import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, title }) => {
  // console.log(data);
  return (
    <div>
      <div className="w-[100%] flex flex-wrap ml-[5%]  mt-10 ">
        {data.map((data, i) => (
          <Link key={i} to={`/${data.media_type || title}/details/${data.id}`} className="w-[25vh] relative mr-[5%] mb-[3%]">
            
            <img
              src={`https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.poster_path || data.profile_path
            }`}
              alt=""
              className="h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] object-cover shadow-black"
            />

            <h1 className="text-[1.5vw] text-zinc-400 mt-3 font-semibold">
              {data.original_title ||
              data.title ||
              data.name ||
              data.original_name}
            </h1>
            

            {data.vote_average  && 
            <div className="text-white text-xl w-[6vh] h-[6vh] flex justify-center absolute right-[-8%] bottom-[28%] items-center bg-yellow-600 rounded-full font-semibold ">{(data.vote_average*10).toFixed()}<sup>%</sup></div>
            }
            
            
          </Link>
        ))}

        
      </div>
      
    </div>
  );
};

export default Card;
