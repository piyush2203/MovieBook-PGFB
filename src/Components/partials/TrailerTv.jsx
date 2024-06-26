import React from "react";
import { MdClose } from "react-icons/md";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "./Notfound";

const TrailerTv = () => {
    const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("tv") ? "tv" : "tv";
  const ytvideo = useSelector((state) => state.tv.info.videos);
  // console.log(pathname, ytvideo);

  return ytvideo ? (
    <div>

      <div className="absolute w-screen h-screen flex items-center justify-center top-0 left-0 z-100 bg-[rgba(0,0,0,0.7)]">
      <Link onClick={() => navigate(-1)}>
          <MdClose className="hover:text-[#6556CD]  text-white text-[1.5vw] absolute top-[5%] left-[5%] text-[3vw]" />
        </Link>

        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
          height={550}
          width={1000}
        />
      </div>
    </div>
  ) : <Notfound />
};

export default TrailerTv ;
