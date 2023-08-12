import React from "react";
import { Link, useLocation } from "react-router-dom";

const Copyfooter = () => {
  const location = useLocation().pathname;

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div
        className={
          "copyright-area copyright-style-1 ptb--20 " +
          (location === "/signin" ||
          location === "/signup" ||
          location === "/signupmodel" ||
          location === "/forgotpassword"
            ? "d-none"
            : "")
        }>
        <div className='container-fluid'>
          <hr className='rbt-separator m-0 footer-border' />
          <div className='row align-items-center pt--30'>
            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12'>
              <p className='rbt-link-hover text-center text-lg-center'>
                ©{currentYear} DoubtQ. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyfooter;
