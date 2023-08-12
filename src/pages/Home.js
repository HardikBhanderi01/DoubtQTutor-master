import React, { useEffect } from "react";
import Bannerarea from "./Bannerarea";
import Testimonialarea from "./Testimonialarea";
import Aboutarea from "./Aboutarea";
import { useDispatch } from "react-redux";
import { SIGNUP_REQUEST } from "../redux/reducers/AuthReducer";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Bannerarea />
      <Testimonialarea />
      <Aboutarea />
    </>
  );
};

export default Home;
