import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
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
        <div>
          <div className='head-section'>
            <h1 className='title text-center mb--10 mt-4'>404</h1>
          </div>
          <div className='text'>
            <h2 className='text-center'>
              <span className='text-danger'>Opps!</span> Page not found.
            </h2>
          </div>
          <div className='text-center'>
            <h3>The page you're looking for doesn't exist.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
