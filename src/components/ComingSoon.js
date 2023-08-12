import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "DoubtQ";
  }, []);

  const navigate = useNavigate(); // Corrected variable name

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <div className='col-lg-12 pl--30 mt--60 mb--60 pl_sm--0 border-signup'>
        <div className=''>
          <div className='head-section'>
            <h1 className='title text-center mb--10 mt-4'>Coming Soon</h1>
          </div>
          <div className='text'>
            <h2 className='text-center'>
              We're currently working on creating something fantastic.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
