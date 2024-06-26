import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from '/Frame3.png'

const About = () => {
    const navigate = useNavigate();
  return (
    <div className="w-screen h-[320%] bg-[#1F1E24] ">
        <Link onClick={() => navigate(-1)} className='absolute top-[5%] left-[4%] text-white'>
          <FaArrowLeft className="hover:text-[#6556CD] text-[2.5vw] text-[1.5vw]" />
        </Link>
        <div className="w-full h-[100vh] flex justify-center items-center">
            <img src={logo} alt="" />
        </div>
      <div className="about w-full">
        <h1 className="text-[4vw] text-white mt-[2%] ml-[4%]">About PGFB</h1>
        <hr />
        <p className="text-[1.3vw] mt-[3%] text-zinc-400 w-[80%] ml-[10%] mb-[3%]">
          Welcome to PGFB (Piyush Gupta Filmy Book), your ultimate destination
          for all things movies! Our mission is to bring the world of cinema to
          your fingertips, providing comprehensive and up-to-date information on
          films from around the globe.
        </p>
        {/* <hr /> */}
      </div>

      <div className="offer w-full ">
        <h1 className="text-[4vw] text-white mt-[5%] ml-[4%]">
          What We Offer ?
        </h1>
        <hr />
        <div className="ml-[10%] ">
          <h3 className="text-[1.8vw]  mt-[1.6%] text-white ">
            Extensive Database:{" "}
          </h3>
          <p className="ml-[5%] mt-[1.1%] text-zinc-400 w-[61%] mb-[3%]">
            Dive into our vast collection of movies spanning various genres,
            languages, and eras. Whether you're a fan of Hollywood blockbusters,
            indie gems, or international cinema, we've got you covered.
          </p>

          <h3 className="text-[1.8vw]  mt-[1.6%] text-white ">
            Release Information:
          </h3>
          <p className="ml-[5%] mt-[1.1%] text-zinc-400 w-[85%] mb-[3%]">
            Stay informed with accurate release dates for upcoming films and
            newly released titles.
          </p>

          <h3 className="text-[1.8vw]  mt-[1.6%] text-white ">Ratings:</h3>
          <p className="ml-[5%] mt-[1.1%] text-zinc-400 w-[85%] mb-[3%]">
            Get insights into what critics and audiences think about a movie
            with our integrated ratings.
          </p>

          <h3 className="text-[1.8vw]  w-[100%] mt-[1.6%] text-white ">
            Taglines:
          </h3>
          <p className="ml-[5%] mb-[3%] mt-[1.1%] text-zinc-400 w-[85%]">
            Explore in-depth descriptions that give you a clear picture of the
            storyline and key details about the films.
          </p>

          <h3 className="text-[1.8vw]  w-[100%] mt-[1.6%] text-white ">
            YouTube Trailers:
          </h3>
          <p className="ml-[5%] mb-[3%] mt-[1.1%] text-zinc-400 w-[85%]">
            Explore in-depth descriptions that give you a clear picture of the
            storyline and key details about the films.
          </p>

          <h3 className="text-[1.8vw]  w-[100%] mt-[1.6%] text-white ">
            Best Recommendations:
          </h3>
          <p className="ml-[5%] mb-[3%] mt-[1.1%] text-zinc-400 w-[85%]">
            Explore in-depth descriptions that give you a clear picture of the
            storyline and key details about the films.
          </p>

          <h3 className="text-[1.8vw]  w-[100%] mt-[1.6%] text-white ">
            Detailed Descriptions:
          </h3>
          <p className="ml-[5%] mb-[2%] mt-[1.1%] text-zinc-400 w-[85%]">
            Explore in-depth descriptions that give you a clear picture of the
            storyline and key details about the films.
          </p>
          <h3 className="text-[1.8vw]  w-[100%] mt-[1.2%] text-white ">
          Genres:
          </h3>
          <p className="ml-[5%] mb-[3%] mt-[1.1%] text-zinc-400 w-[61%]">
          Explore movies across a wide range of genres. Whether you love action, drama, comedy, horror, romance, sci-fi, fantasy, thriller, or documentaries, we have something for every taste and mood.
          </p>
          
        </div>

        <div className="about w-full">
          <h1 className="text-[4vw] text-white mt-[5%] ml-[4%]">Our Vision</h1>
          <hr />
          <p className="text-[1.3vw] mt-[3%] text-zinc-400 w-[80%] ml-[10%] mb-[3%]">
          At PGFB, we believe that movies are more than just entertainment; they are a window to diverse cultures, stories, and experiences. Our goal is to create a space where movie enthusiasts can discover new films, revisit classics, and share their passion for cinema.
            <br/>
            <br />
        Thank you for choosing PGFB. Happy viewing!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
