import React from "react";
import { Link } from "react-router-dom";

const Aboutarea = () => {
  return (
    <>
      <div className='home_become_an_expert pt--0 pb--90'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-4 col-md-4'>
              <img
                src='../assets/images/banner/become_an_expert.png'
                alt='img'
              />
            </div>
            <div className='col-lg-4 col-md-5 offset-md-1 mt_sm--20 text-center text-lg-start'>
              <div className='section-title'>
                <h3 className='title'>Become an expert</h3>
                <h6 className='normal-text mb--20'>
                  Work anywhere, anytime and <br /> Earn upto <b>$1000</b> per
                  month
                </h6>
              </div>
              <Link
                to='/signup'
                className='rbt-btn btn-gradient hover-icon-reverse btn-sm'>
                <span className='icon-reverse-wrapper'>
                  <span className='btn-text'>Start Earning</span>
                  <span className='btn-icon'>
                    <i className='feather-arrow-right' />
                  </span>
                  <span className='btn-icon'>
                    <i className='feather-arrow-right' />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='rbt-banner-4 pt--80 pb--80'>
        <div className='container'>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-5'>
              <div className='inner pl--50 pl_sm--0 pl_md--0 text-md-start text-center'>
                <div className='section-title'>
                  <h3 className='title'> How it works?</h3>
                  <h6 className='description mt--10'>
                    Help in just 4 Steps It’s THAT simple.
                  </h6>
                </div>
                <div className='about-btn mt--30'>
                  <Link
                    to='/signup'
                    className='rbt-btn btn-gradient hover-icon-reverse btn-sm'>
                    <span className='icon-reverse-wrapper'>
                      <span className='btn-text'>Register Now</span>
                      <span className='btn-icon'>
                        <i className='feather-arrow-right' />
                      </span>
                      <span className='btn-icon'>
                        <i className='feather-arrow-right' />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='row row--10'>
                {/* Start Single Counter  */}
                <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                  <div className='rbt-counterup'>
                    <div className='inner'>
                      <h5 className='how-work'>01</h5>
                      <h5>Sign up</h5>
                      <p>
                        Fill in your details at DoubtQ register to complete the
                        sign-up process.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Single Counter  */}
                {/* Start Single Counter  */}
                <div className='col-lg-6 col-md-6 col-sm-6 col-12 mt--40 mt_mobile--20'>
                  <div className='rbt-counterup'>
                    <div className='inner'>
                      <h5 className='how-work'>02</h5>
                      <h5>Enter Details</h5>
                      <p>Personal, professional, and bank details</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--20'>
                  <div className='rbt-counterup'>
                    <div className='inner'>
                      <h5 className='how-work'>03</h5>
                      <h5>Choose Subjects</h5>
                      <p>Wide range of subjects choose more than one</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 col-12 mt--20 mt_mobile--20'>
                  <div className='rbt-counterup'>
                    <div className='inner'>
                      <h5 className='how-work'>04</h5>
                      <h5>Online Test</h5>
                      <p>Qualify a short MCQ test and you are ready To go</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutarea;
