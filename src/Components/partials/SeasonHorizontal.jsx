import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import secondimage from "/noimage.jpg"

const SeasonHorizontal = ({ data, func }) => {

  console.log(data);
  return data.length >0 ? (
    


    <div className="w-full h-[40vh]  overflow-auto p-5 ">
      

      <div className="w-[100%] h-[100%] flex overflow-auto overflow-y-auto ">


        {data.map((data, i) => (
          <div  className="min-w-[15%] h-[80%] mr-5   rounded border-white overflow-hidden mr-5" key={i}>
            <img
                className="w-full h-[90%] object-cover rounded "
              src={data.poster_path ? `https://image.tmdb.org/t/p/original/${
                 data.poster_path 
              }`: secondimage}
              alt=""
            />
            <div className="h-[15%] pt-[2%]  overflow-y-hidden">
            <h1 className="text-[1.2vw] pl-2  w-[100%] font-black text-white">
              {data.original_title ||
                data.title ||
                data.name ||
                data.original_name}
            </h1>
            </div>
            
            
            
          </div>
        ))}
      </div>
    </div>
  ): (<h1>No Seasons Available</h1>)
};

export default SeasonHorizontal;
