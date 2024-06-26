import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import Loading from "./partials/Loading";
import { IoMdPlay } from "react-icons/io";
import HorizontalCards from "./partials/HorizontalCard";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaImdb } from "react-icons/fa6";
import Dropdown from "./partials/Dropdown";

const personDetail = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const Dispatch = useDispatch();
  // console.log(info);
  useEffect(() => {
    Dispatch(asyncloadperson(id));
    return () => {
      Dispatch(removeperson());
    };
  }, [id]);
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie")
  // console.log(info);

  return info ? (
    <div className="px-[15%] w-screen min-h-[200vh] bg-[#1F1E24] pb-[5%] ">
      {/* part 1 navigation */}

      <nav className="w-full h-[10vh] flex gap-10 text-2xl text-zinc-100 items-center">
        <Link onClick={() => navigate(-1)}>
          <FaArrowLeft className="hover:text-[#6556CD] text-[1.5vw]" />
        </Link>
        <a href={"/"}>
          <IoHomeSharp />
        </a>
      </nav>

      {/* left part 2 poster and details */}
      <div className="flex">
        <div className="w-[25%]">
          <img
            src={`https://image.tmdb.org/t/p/original/${info.details.profile_path}`}
            alt=""
            className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]  shadow-black mt-3 h-[35vh] object-center border-2 border-white object-fit"
          />
          <hr className="mt-[20%]" />
          {/* social media */}
          <div className="flex mt-[5%] justify-between px-[5%]">
            <a
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              target="_blank"
              className="text-[1.7vw] text-zinc-300"
            >
              <FaInstagram />
            </a>

            <a
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
              target="_blank"
              className="text-[1.7vw] text-zinc-300"
            >
              <FaXTwitter />
            </a>

            <a
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              target="_blank"
              className="text-[1.7vw] text-zinc-300"
            >
              <FaGlobeAfrica />
            </a>

            <a
              href={`https://www.imdb.com/name/${info.externalid.imdb_id}`}
              target="_blank"
              className="text-[1.7vw] text-zinc-300"
            >
              <FaImdb />
            </a>
          </div>

          {/* personal information */}
          <h1 className="text-[1.8vw] text-zinc-300 font-semibold mt-[8%] mb-[6%]">
            Personal Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400 font-[serif]">
            {info.details.known_for_department}
          </h1>

          <h1 className="text-lg mt-[5%] text-zinc-400 font-semibold">
            Gender
          </h1>
          <h1 className="text-zinc-400 font-[serif] ">
            {info.details.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg mt-[5%] text-zinc-400 font-semibold">
            Birthdate
          </h1>
          <h1 className="text-zinc-400 font-[serif]">
            {info.details.birthday}
          </h1>

          <h1 className="text-lg mt-[5%] text-zinc-400 font-semibold">
            Deathdate
          </h1>
          <h1 className="text-zinc-400 font-[serif]">
            {info.details.deathday === null
              ? "Still Alive"
              : `${info.details.deathday}`}
          </h1>

          <h1 className="text-lg mt-[5%] text-zinc-400 font-semibold">
            Place of Birth
          </h1>
          <h1 className="text-zinc-400 font-[serif]">
            {`${info.details.place_of_birth}`}
          </h1>

          <h1 className="text-lg mt-[5%] text-zinc-400 font-semibold">
            Also Known as
          </h1>
          <h1 className="text-zinc-400 font-[serif]">
            {`${info.details.also_known_as}`}
          </h1>
        </div>

        {/* part 3 right details and information*/}
        <div className="w-[75%] ml-[5%]">


          <h1 className="text-[5vw] text-zinc-100 font-black ">
            {`${info.details.name}`}
          </h1>

          <h1 className="text-lg text-zinc-300 font-semibold mt-[2%] mb-[1.2%]">Biography</h1>
          <h1 className="text-zinc-400 font-[serif]">
            {info.details.biography}
          </h1>


          <h1 className="text-xl text-zinc-200 mt-[3%] mb-[1.5%] font-semibold">Best Appearance</h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full h-[10vh] flex justify-between items-center ">
            <h1 className=" text-xl mr-[2vw] text-zinc-200 font-semibold ">
              Roles
            </h1>

            {/* <Dropdown title={"Category"} options={["tv", "movie"]} func={(e)=> setcategory(e.target.value)} /> */}
          </div>

          <div className="LIST DISC w-full h-[50vh] mt-[1.5%] overflow-x-hidden overflow-y-auto shadow-xl shadow-black border-2 border-zinc-400 p-5">
            {info["combined"+"Credits"].cast.map((c,i)=>(<li className="hover:text-white text-zinc-400 cursor-pointer p-5">
                <Link to={`/${category}/details/${c.id}`} className=" gap-2">
                  <p className="inline w-full font-[serif]">
                    <span className="text-white font-[Satoshi]"  >Movie- </span> {c.original_title || c.original_name}
                  </p>
                  <p className="ml-5 font-[serif]"><span className="text-white font-[Satoshi]"> Character Name- </span> {c.character}</p>
                </Link>
                </li>))}
              
          </div>


        </div>


      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default personDetail;
