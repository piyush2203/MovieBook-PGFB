import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/Axios";
import Card from "./partials/Card";
import Loading from "./partials/Loading";
import LocomotiveScroll from "locomotive-scroll";

const People = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [duration, setduration] = useState("day");
  const [People, setPeople] = useState([]);
  const [page, setpage] = useState(1);

    document.title = "PGFB || People " + category.toUpperCase();
    const locomotiveScroll = new LocomotiveScroll();

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(
        `/person/popular`
      );
      // console.log(data);

      setPeople(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetPeople();
  }, [category, duration, page]);

  return People.length > 0 ? (
    <div className="w-screen h-screen p-[1.5%] overflow-y-auto overflow-hidden">
      <div className="w-full text-white flex items-center justify-between">
        <Link  onClick={() => navigate(-1)}>
          <FaArrowLeft className="hover:text-[#6556CD] text-[1.5vw]" />
        </Link>
        <h1 className="text-[2vw] font-seimbold pl-3">People</h1>

        <Topnav />
        
      </div>

      <Card data={People} title="person" />
    </div>
  ) : (
    <Loading />
  );
};

export default People;