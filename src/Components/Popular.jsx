import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/Axios";
import Card from "./partials/Card";
import Loading from "./partials/Loading";

import LocomotiveScroll from 'locomotive-scroll';


const Popular = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [duration, setduration] = useState("day");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

    document.title = "PGFB || Popular " + category.toUpperCase();
    
const locomotiveScroll = new LocomotiveScroll();

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );

      setpopular(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetPopular();
  }, [category, duration, page]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen p-[1.5%] overflow-y-auto overflow-hidden">
      <div className="w-full text-white flex items-center justify-between">
        <Link onClick={() => navigate(-1)}>
          <FaArrowLeft className="hover:text-[#6556CD] text-[1.5vw]" />
        </Link>
        <h1 className="text-[2vw] font-seimbold pl-3">POPULAR</h1>

        <Topnav />
        <Dropdown
            title={`Page ${page}`}
            options={["1", "2", "3", "4", "5", "6", "7", "8"]}
            func={(e) => setpage(e.target.value)}
          />
        <div className="w-[1%] "></div>
        
        <Dropdown
          title={"Category"}
          options={["movie", "tv"]}
          func={(e) => setcategory(e.target.value)}
        />

        

        
      </div>

      <Card data={popular} title={category} />
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;

