import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import TvShows from "./Components/partials/TvShows";
import People from "./Components/People";
import MovieDetail from "./Components/movieDetail";
import TvDetails from "./Components/tvDetails";
import PersonDetails from "./Components/personDetails";
import Trailer from "./Components/partials/Trailer";
import Notfound from "./Components/partials/Notfound";
import About from "./Components/About";
import Contact from "./Components/Contact";
import TrailerTv from "./Components/partials/TrailerTv";



const App = () => {
  return (
    <div className='w-full h-screen bg-[#1F1E24] flex font-["Satoshi"] '>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>

        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetail />} >
            <Route path="/movie/details/:id/trailer" element={<Trailer />} ></Route>
            
        
        </Route>

        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
            <Route path="/tv/details/:id/trailer" element={<TrailerTv />} ></Route>
        
         </Route>

        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />}/>
       
          
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
