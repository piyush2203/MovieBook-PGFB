import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import Loading from "./partials/Loading";
import { IoMdPlay } from "react-icons/io";
import HorizontalCards from "./partials/HorizontalCard"
import SeasonHorizontal from "./partials/SeasonHorizontal";

const tvDetail = () => {
  const {pathname} = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const Dispatch = useDispatch();
  // console.log(info);
  useEffect(() => {
    Dispatch(asyncloadtv(id));
    return () => {
      Dispatch(removetv());
    };
  }, [id]);
  const navigate = useNavigate();

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        objectPosition: "center down",
      }}
      className="h-[140vh] relative overflow-x-hidden w-screen  px-[10%]"
    >
      {/* part1 navigation */}
      <nav className="w-full h-[10vh] flex gap-10 text-2xl text-zinc-100 items-center">
        <Link onClick={() => navigate(-1)}>
          <FaArrowLeft className="hover:text-[#6556CD] text-[1.5vw]" />
        </Link>
        <a  href={"/"}>
          <IoHomeSharp/>
        </a>


        <a target="_blank" href={info.details.homepage}>
          <MdOutlineSwitchAccessShortcutAdd />
        </a>

        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <FaGlobe className="" />
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/ `}
        >
          .imdb
        </a>

        
        
      </nav>

      {/* poster and details */}
      <div className=" w-full  border-white flex">
        <img
          src={`https://image.tmdb.org/t/p/original/${info.details.backdrop_path}`}
          alt=""
          className=" shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]  shadow-black w-[25vh] mt-3 h-[35vh] object-center border-2 border-white object-fit"
        />

        <div className="content ">
          <h1 className="text-[3vw] text-white  ml-[5%] font-semibold w-[150%] items-center flex">
              {info.details.original_title ||
              info.details.title ||
              info.details.name ||
              info.details.original_name}

              <small className="text-[2vw] ml-[2%] font-bold text-white">({info.details.
              first_air_date.split("-")[0]})</small>
          </h1>
          <h1 className="text-[1.2vw] ml-[5%] w-[150%] font-semibold italic text-zinc-300 mb-[2%] ">"{info.details.tagline}"</h1>

          <div className="text-zinc-300 ml-[5%] mb-[1%] flex items-center gap-x-[3%] w-[150%]">
              <span className="text-white text-xl w-[6vh] h-[6vh] flex justify-center items-center bg-yellow-600 rounded-full font-semibold ">{(info.details.vote_average*10).toFixed()}<sup>%</sup></span>

              <h1>Users Score</h1>
              <h1>{info.details.first_air_date}</h1>
              <h1>{info.details.genres.map((s)=> s.name ).join(", ")}</h1>
              <h1>{info.details.number_of_seasons 
              }-Seasons</h1>
          </div>

          

          <h1  className="text-[1vw] text-zinc-500 font-bold ml-[5%] mb-[1%]">Overview</h1>

          <p className="text-[1vw] max-h-[15vh ]  overflow -y-auto  text-zinc-200 mb-[3%] ml-[5%]  "> {info.details.overview}</p>


          <h1  className="text-[1vw] text-zinc-500 font-bold ml-[5%] mb-[1%]">Translations</h1>

          <p className="text-[1vw]  overflow -y-auto  text-zinc-200 mb-7 ml-[5%]"> {info.translations.join(", ")}</p>

          <Link className=" p-[0.8vw] ml-[5%] rounded-lg bg-[#6556CD] flex w-[14%] items-center gap-[2%] text-white" to={`${pathname}/trailer`}><IoMdPlay /> Play Trailer</Link>

            
            
            
        </div>

      </div>

      {/* buyers and renters */}
      <div className="flex mb-[5%] ml-[2%] mt-[3%] ">
          <div className="mt-[2vw]  text-white">
            
              {info.watchproviders &&
              info.watchproviders.flatrate &&
               <div className="flex w-[150%] gap-x-[12%] items-center">
                <h1  >Available on Platform</h1>
                
                {
                  info.watchproviders.flatrate.map((w, i) => (
                    
                    <img
                    title={w.provider_name}
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                      key={i}
                      alt="abcd"
                      className="w-[5vh] rounded-md "
                    />
                  ))
                }
              
              </div>}


              {info.watchproviders &&
              info.watchproviders.rent &&
               <div className="flex w-[200%] gap-x-[8%] mt-[4%] items-center">
                <h1  >Available on Rent</h1>
                
                {
                  info.watchproviders.rent.map((w, i) => (
                    
                    <img
                      title={w.provider_name}
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                      key={i}
                      alt="abcd"
                      className="w-[5vh] rounded-md "
                    />
                  ))
                }
              
              </div>}

              {info.watchproviders &&
              info.watchproviders.buy &&
               <div className="flex mt-[4%]  w-[200%] gap-x-[8%] items-center">
                <h1>Available to Buy</h1>
                {
                  info.watchproviders.buy.map((w, i) => (
                    <img
                    title={w.provider_name}
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                      key={i}
                      alt="abcd"
                      className="w-[5vh] rounded-md "
                    />
                  ))
                }
              
              </div>}

              
            
          </div>
      </div>
      {/* seasons */}


      <h1 className="text-[2vw] ml-[2%] text-zinc-400  font-bold">Seasons</h1>
      <hr />
      <SeasonHorizontal data={info.details.seasons} /> 
      

      {/* recommendations and Similar stuff */}
      

      <h1 className="text-[2vw] ml-[2%] text-zinc-400  font-bold">Recommendations</h1>
      <hr />
      <HorizontalCards data={info.recommendations || info.similars} /> 
      
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default tvDetail;

