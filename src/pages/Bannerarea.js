import React from "react";
import { Link } from "react-router-dom";

const Bannerarea = () => {
  return (
    <>
      <main className='rbt-main-wrapper'>
        {/* Start Banner Area */}
        <div className='rbt-banner-area rbt-banner-2'>
          <div className='container'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-6 text-md-start pt_sm--30 pb_sm--30 text-center'>
                <h2 className='mb--0 bold'>Work Anytime/Anywhere.</h2>
                <h6 className='mt--10'>
                  Become an expert now! earn up to $2000/month
                </h6>
                <Link
                  to='/signup'
                  className='rbt-btn btn-gradient hover-icon-reverse btn-sm mt--20'>
                  <span className='icon-reverse-wrapper'>
                    <span className='btn-text'>Become an expert!</span>
                    <span className='btn-icon'>
                      <i className='feather-arrow-right' />
                    </span>
                    <span className='btn-icon'>
                      <i className='feather-arrow-right' />
                    </span>
                  </span>
                </Link>
              </div>
              <div className='col-lg-6 text-center'>
                <img
                  src='../assets/images/banner/tutor-banner-img.png'
                  alt='img'
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Banner Area */}
        {/* Start services Area */}
        <div className='rbt-course-area bg-color-extra2 rbt-section-gap'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center mb--30'>
                  <h3 className='title'>Why become an expert with us?</h3>
                </div>
              </div>
            </div>
            {/* Start Card Area */}
            <div className='row g-5'>
              {/* Start services box  */}
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='rbt-card variation-01 bg-primary-opacity'>
                  <div className='pt--30 pb--30'>
                    <div className='rbt-icon mb--20'>
                      <img
                        src='../assets/images/icons/schedules.svg'
                        alt='img'
                      />
                    </div>
                    <h5 className='rbt-card-title'>Flexible Schedules</h5>
                    <ul className='rbt-list-style-1 rbt-list-primary-opacity'>
                      <li>
                        <i className='feather-arrow-right-circle' /> No
                        travelling, work from home
                      </li>
                      <li>
                        <i className='feather-arrow-right-circle' /> No time
                        barrier
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End services box  */}
              {/* Start services box  */}
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='rbt-card variation-01 bg-pink-opacity'>
                  <div className='pt--30 pb--30'>
                    <div className='rbt-icon mb--20'>
                      <img src='../assets/images/icons/payment.svg' alt='img' />
                    </div>
                    <h5 className='rbt-card-title'>Payouts</h5>
                    <ul className='rbt-list-style-1 rbt-list-primary-opacity'>
                      <li>
                        <i className='feather-arrow-right-circle' /> Bonus on
                        every target achieved
                      </li>
                      <li>
                        <i className='feather-arrow-right-circle' /> Get
                        salaried up to $300/month
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End services box  */}
              {/* Start services box  */}
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='rbt-card variation-01 bg-primary-opacity'>
                  <div className='pt--30 pb--30'>
                    <div className='rbt-icon mb--20'>
                      <img
                        src='../assets/images/icons/subject-knowledge.svg'
                        alt='img'
                      />
                    </div>
                    <h5 className='rbt-card-title'>Subject knowledge</h5>
                    <ul className='rbt-list-style-1 rbt-list-primary-opacity'>
                      <li>
                        <i className='feather-arrow-right-circle' /> Explore
                        different subjects
                      </li>
                      <li>
                        <i className='feather-arrow-right-circle' /> Answer for
                        more than one subject
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bannerarea;
