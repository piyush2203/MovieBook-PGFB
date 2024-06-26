import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Topnav from "./Topnav";
import Dropdown from "./Dropdown";
import axios from "../../utils/Axios";
import Card from "./Card";
import Loading from "./Loading";
import LocomotiveScroll from "locomotive-scroll";

const TvShows = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [duration, setduration] = useState("day");
  const [Tvshows, setTvshows] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

    document.title = "PGFB || Tv Shows " + category.toUpperCase();
    const locomotiveScroll = new LocomotiveScroll();

  const GetTvshows = async () => {
    try {
      const { data } = await axios.get(
        `/tv/${category}?page=${page}`
      );

      setTvshows(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetTvshows();
  }, [category, duration, page]);

  return Tvshows.length > 0 ? (
    <div className="w-screen h-screen p-[1.5%] overflow-y-auto overflow-hidden">
      <div className="w-full text-white flex items-center justify-between">
        <Link onClick={() => navigate(-1)}>
          <FaArrowLeft className="hover:text-[#6556CD] text-[1.5vw]" />
        </Link>
        <h1 className="text-[2vw]  font-seimbold pl-3">TvShows</h1>

        <Topnav />
        <Dropdown
            title={`Page ${page}`}
            options={["1", "2", "3", "4", "5", "6", "7", "8"]}
            func={(e) => setpage(e.target.value)}
          />
        <div className="w-[1%] "></div>
        
        <Dropdown
          title={"Category"}
          options={["airing_today", "on_the_air", "popular", "top_rated"]}
          func={(e) => setcategory(e.target.value)}
        />

        

        
      </div>

      <Card data={Tvshows} title="tv" />
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;

