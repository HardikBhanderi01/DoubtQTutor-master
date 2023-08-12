import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getAuthToken } from "../utils/helper";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const Refertofriend = () => {
  const [data, setData] =useState([])

  useEffect(() => {
    document.title = 'DoubtQ - Refer a Friend and Get Rewarded';
  }, []);

    const fetchData = async () => {
      try {
    const { data } = await axios.post(`${baseURL}/getreferral`,{token:getAuthToken()});
    setData(data.info.referral)  
  } 
   catch (error) {
    console.log(error);
  }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const onReferalClick = () => {
    navigator.clipboard.writeText(data);
    toast.success('Referal code copied');
  };

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Hello,</span> Expert!
            </h5>
          </div>
        </div>
        <div className="dashboard pt--20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                <div className="row g-5">
                  <div className="col-lg-3">
                    {/* Start Dashboard Sidebar  */}
                    <div className="sticky-top mb--30">
                      <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                        <div className="inner">
                          <div className="content-item-content">
                            <div className="rbt-default-sidebar-wrapper">
                              <div className="section-title mb--20">
                                <h6 className="rbt-title-style-2">
                                  <img
                                    src="../assets/images/icons/earn-money.svg"
                                    alt="img"
                                  />
                                  Earn money
                                </h6>
                              </div>
                              <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link
                                      to="/refertofriend"
                                      className="active"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Refer to friend</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/answerstreak">
                                      <i className="feather-arrow-right" />
                                      <span>Posting streak</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/referralhistory">
                                      <i className="feather-arrow-right" />
                                      <span>Referral history</span>
                                    </Link>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt--20">
                        <Link
                          className="rbt-btn btn-border text-center w-100 btn-sm"
                          to="/expertmainpage"
                        >
                          <span className="btn-text">
                            <i className="feather-arrow-left" /> Back to Home
                          </span>
                        </Link>
                      </div>
                    </div>
                    {/* End Dashboard Sidebar  */}
                  </div>
                  <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                      <div className="content">
                        <div className="row g-5">
                          <div className="col-lg-12">
                            <div className="section-title mb--10">
                              <h4 className="mb--0">Refer to Friend</h4>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <h6>Your referral code</h6>
                            <div className="border border-primary p--10 radius-10">
                              <div className="row">
                                <div className="col-lg-8 col-8 d-flex align-items-center">
                                 {data}
                                </div>
                                <div className="col-lg-4 col-4 text-end">
                                  <button
                                    className="rbt-btn btn-border-gradient hover-icon-reverse btn-sm"
                                    onClick={onReferalClick}
                                  >
                                    <span className="icon-reverse-wrapper">
                                      <span className="btn-text">Copy</span>
                                      <span className="btn-icon">
                                        <i className="feather-arrow-right" />
                                      </span>
                                      <span className="btn-icon">
                                        <i className="feather-arrow-right" />
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="border p--20 radius-10 bg-color-primary-opacity">
                              <h4 className="theme-gradient">
                                You can earn up to:
                              </h4>
                              <div className="row">
                                <div className="col-lg-3">
                                  <h4 className="theme-gradient"> INR 30</h4>
                                </div>
                                <div className="col-lg-9">
                                  <h6>
                                    for one time when your friend deposit min.
                                    INR 100
                                  </h6>
                                </div>
                              </div>
                              <div className="row align-items-center">
                                <div className="col-lg-8">
                                  <h4>
                                    Refer a Friend,
                                    <br />
                                    Reward Yourself
                                  </h4>
                                </div>
                                <div className="col-lg-4 text-end">
                                  <img
                                    src="../assets/images/icons/inr30.svg"
                                    alt="img"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="section-title mb--10">
                              <h4 className="mb--0">How it works</h4>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="bg-color-secondary-opacity p--20 radius-10 mb_sm--10">
                                  <h4 className="theme-gradient">
                                    01
                                    <img
                                      className=""
                                      src="../assets/images/icons/right_arrow.svg"
                                      alt="img"
                                    />
                                  </h4>
                                  <p>
                                    Refer a friend using any of the option
                                    below.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="bg-color-secondary-opacity p--20 radius-10 mb_sm--10">
                                  <h4 className="theme-gradient">
                                    02
                                    <img
                                      className=""
                                      src="../assets/images/icons/right_arrow.svg"
                                      alt="img"
                                    />
                                  </h4>
                                  <p>
                                    For you to qualify for the bonus, your
                                    friend must apply your refer code and be
                                    approved.
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="bg-color-secondary-opacity p--20 radius-10 mb_sm--10">
                                  <h4 className="theme-gradient">
                                    03
                                    <img
                                      className=""
                                      src="../assets/images/icons/right_arrow.svg"
                                      alt="img"
                                    />
                                  </h4>
                                  <p>
                                    Your referral bonus will be posted to your
                                    account within one day your friend deposit
                                    the min. amount.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="section-title mb--10">
                              <h6 className="mb--0">Share On</h6>
                            </div>
                            <ul className="social-icon social-default justify-content-start">
                              <li>
                                <Link to="https://www.facebook.com/">
                                  <i className="feather-facebook" />
                                </Link>
                              </li>
                              <li>
                                <Link to="https://www.twitter.com">
                                  <i className="feather-twitter" />
                                </Link>
                              </li>
                              <li>
                                <Link to="https://www.instagram.com/">
                                  <i className="feather-instagram" />
                                </Link>
                              </li>
                              <li>
                                <Link to="https://www.linkdin.com/">
                                  <i className="feather-linkedin" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default Refertofriend;
