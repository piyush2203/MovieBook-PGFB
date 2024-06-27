import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import secondimage from "/noimage.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HorizontalCard = ({ data, func }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:6,
    slidesToScroll: 3
  };

  // console.log(data);
  return (
    


    <div className="w-full h-[40vh] overflow-auto p-5 ">
      
      
      <div className="w-[95%] h-[100%] overflow-auto overflow-y-auto m-auto ">

      <Slider {...settings}>
        {data.map((data, i) => (
          <Link to={`/${data.media_type}/details/${data.id }`} className="min-w-[15%] h-[30vh] mr-5  bg-zinc-800 rounded border-white overflow-hidden mr-5" key={i}>
            <div className="h-[40%]">
            <img
                className="w-full h-full object-cover rounded "
              src={ data.backdrop_path || data.profile_path || data.poster_path ? `https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.profile_path || data.poster_path
              }`: secondimage}
              alt=""
            />
            </div>
            <div className="h-[12.5%] pt-[2%]  overflow-y-hidden">
                <h1 className="text-[1.2vw] pl-2  w-[100%] font-black text-white">
                {data.original_title ||
                  data.title ||
                  data.name ||
                  data.original_name}
              </h1>
            </div>
            <div className="w-[100%] overflow-y-hidden h-[50%]">
            <p className="w-[90%] text-[0.8vw] text-white mt-3 pl-2 text-wrap">
              {data.overview.slice(0, 52)} ... <span className="text-zinc-400">more</span> 
              
            </p>
            </div>
            
            
          </Link>
        ))}
       </Slider>
      </div>
     
    </div>
  );
};

export default HorizontalCard;
