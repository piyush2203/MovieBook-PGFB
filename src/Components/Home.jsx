import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import Header from "./partials/Header";
import HorizontalCard from "./partials/HorizontalCard";
import Dropdown from "./partials/Dropdown";
import Loading from "./partials/Loading"
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  document.title = "PGFB | Homepage";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const locomotiveScroll = new LocomotiveScroll();
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];

      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  console.log(trending);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      settrending(data.results);
      console.log("data", data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  console.log(trending);

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    GetTrending();
  }, [category]);

  // console.log("trend: ", trending);
  // console.log("paper: " ,wallpaper );

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto bg-[#1F1E24] ">
        <Topnav />
        <Header data={wallpaper} />

        <div className=" p-5 flex justify-between">
          <h1 className="text-[2vw] text-zinc-300 font-bold   "> Trending</h1>
          <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>{ setcategory(e.target.value); console.log(e);}} />
        </div>
        <HorizontalCard data={trending} func={setcategory} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
