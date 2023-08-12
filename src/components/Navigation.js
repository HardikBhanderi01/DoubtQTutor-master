import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getWalletDetails } from "../redux/actions/ProfileAction";
import { isLoggedIn } from "../utils/utility";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Navigation = () => {
  const location = useLocation().pathname;

  const dispatch = useDispatch();
  const { walletDetail } = useSelector((state) => state.profile);
  const { login, logout, signup } = useSelector((state) => state.auth);
  const [isLoggedInUser, setIsLoggedInUser] = useState(false);
  const userName = login?.data?.info?.email || signup?.data?.info?.email;
  const [data1, setData1] = useState([]);

  const userLogged = isLoggedIn();
  useEffect(() => {
    if (userLogged && !isLoggedInUser) {
      setIsLoggedInUser(true);
    } else if (isLoggedInUser) {
      setIsLoggedInUser(false);
    }
  }, [login, logout]);

  // Add mobileNo Api
  const fetchData = async () => {
    const baseURL = process.env.REACT_APP_APIS_BASE_URL;
    try {
      const response = await axios.get(`${baseURL}/tutor/getmobileno`);
      setData1(response.data.document);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    const baseURL = process.env.REACT_APP_APIS_BASE_URL;
    try {
      const response = await axios.get(`${baseURL}/tutor/getmobileno`);
      setData1(response.data.document);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
      return "";
    }
    const countryCode = phoneNumber.slice(0, 2);
    const firstPart = phoneNumber.slice(2, 7);
    const secondPart = phoneNumber.slice(7, 12);
    return `${countryCode} ${firstPart}-${secondPart}`;
  };

  //popup-mobile-menu
  function toggleOffcanvas() {
    document.querySelector(".popup-mobile-menu").classList.toggle("active");
  }

  // sticky-nav
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    if (isLoggedIn()) {
      dispatch(getWalletDetails());
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  const auth = isLoggedIn();

  return (
    <>
      {/* Start Header Area */}
      <header
        className={
          "rbt-header rbt-header-10 " +
          (location === "/signin" ||
          location === "/signup" ||
          location === "/signupmodel" ||
          location === "/forgotpassword"
            ? "d-none"
            : "")
        }>
        <div className='rbt-sticky-placeholder' />
        {/* Start Header Top  */}
        {!auth && (
          <div className='bg-color-darker pt--10 pb--10 header-space-betwween'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-6 col-6'>
                  <div className='color-white d-flex small align-items-center'>
                    <div className='d-none d-sm-block d-sm-none d-md-block mr--10'>
                      Tutor support :
                    </div>
                    {data1
                      ? data1.map((data) => (
                          <Link
                            className='color-white'
                            to={`https://web.whatsapp.com/send?phone=${data.mobileNo}`}
                            target='_blank'>
                            <>
                              <i className='fab fa-whatsapp' /> +
                              {formatPhoneNumber(data.mobileNo)}
                            </>
                          </Link>
                        ))
                      : null}
                  </div>
                </div>
                <div className='col-lg-6 col-6 text-end'></div>
              </div>
            </div>
          </div>
        )}
        <div
          className={`rbt-header-wrapper header-space-betwween header-sticky ${stickyClass}`}>
          <div className='container-fluid'>
            <div className='mainbar-row rbt-navigation-center align-items-center'>
              <div className='header-left rbt-header-content'>
                <div className='header-info'>
                  <div className='logo'>
                    <Link to={isLoggedIn() ? "/expertmainpage" : "/"}>
                      <img
                        src='../assets/images/logo/doubt-q.png'
                        alt='DoubtQ Logo Images'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='rbt-main-navigation d-none d-xl-block'>
                <nav className='mainmenu-nav'>
                  <ul className='mainmenu justify-content-end'>
                    <li className='with-megamenu has-menu-child-item position-static'>
                      <Link to={isLoggedIn() ? "/expertmainpage" : "/"}>
                        Home
                      </Link>
                    </li>
                    <li className='with-megamenu has-menu-child-item position-static'>
                      <Link to='/staticpage'>Expert Q &amp; A</Link>
                    </li>
                    <li className='position-static'>
                      <Link to='/allquestion'>My Answers</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='header-right pt--20 pb--20'>
                {/* Navbar Icons */}
                <ul className='quick-access'>
                  <li className='account-access rbt-user-wrapper d-none d-xl-block'>
                    <Link
                      className='rbt-btn btn-gradient btn-sm'
                      to={isLoggedIn() ? "/Personaldetails" : "/signin"}>
                      <i className='feather-user' />
                    </Link>
                    <div className='rbt-user-menu-list-wrapper'>
                      {isLoggedIn() && (
                        <div className='inner'>
                          {/*<div className="rbt-admin-profile">*/}
                          {/*  <div className="admin-thumbnail">*/}
                          {/*    <img*/}
                          {/*      src="../assets/images/team/avatar.jpg"*/}
                          {/*      alt="User Images"*/}
                          {/*    />*/}
                          {/*  </div>*/}
                          {/*  <div className="admin-info">*/}
                          {/*    <span className="name">{userName}</span>*/}
                          {/*    <Link*/}
                          {/*      className="rbt-btn-link color-primary"*/}
                          {/*      to="/Personaldetails"*/}
                          {/*    >*/}
                          {/*      View Profile*/}
                          {/*    </Link>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                          <ul className='user-list-wrapper'>
                            <li>
                              <Link to='/refertofriend'>
                                <div>
                                  <img
                                    src='../assets/images/icons/earn-money.svg'
                                    alt='img'
                                  />
                                  Earn Money
                                </div>
                              </Link>
                            </li>
                          </ul>
                          <ul className='user-list-wrapper'>
                            <li>
                              <Link to='/logout'>
                                <span className='material-symbols-outlined'>
                                  logout
                                </span>
                                <span>Logout</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                  <li className='account-access rbt-user-wrapper d-none d-xl-block'>
                    <Link
                      to='/wallet'
                      className='rbt-btn btn-border-gradient btn-sm'>
                      <i className='fa-solid fa-wallet' />
                      INR
                      {walletDetail?.data?.availableAmount || 0}
                    </Link>
                    <div className='rbt-user-menu-list-wrapper'>
                      <div className='inner'>
                        <ul className='user-list-wrapper'>
                          <li>
                            <Link to='/wallet'>
                              <span className='material-symbols-outlined'>
                                currency_rupee
                              </span>
                              <span>
                                Available amount - INR
                                {walletDetail?.data?.availableAmount || 0}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to='/wallet'>
                              <span className='material-symbols-outlined'>
                                currency_rupee
                              </span>
                              <span>
                                Redeemable amount - INR
                                {walletDetail?.data?.pendingAmount || 0}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='access-icon rbt-user-wrapper d-block d-xl-none'>
                    <Link className='rbt-round-btn' to='#'>
                      <i className='feather-user' />
                    </Link>
                    <div className='rbt-user-menu-list-wrapper'>
                      <div className='inner'>
                        {/*<div className="rbt-admin-profile">*/}
                        {/*  <div className="admin-thumbnail">*/}
                        {/*    <img*/}
                        {/*      src="../assets/images/team/avatar.jpg"*/}
                        {/*      alt="User Images"*/}
                        {/*    />*/}
                        {/*  </div>*/}
                        {/*  <div className="admin-info">*/}
                        {/*    <span className="name">Nipa Bali</span>*/}
                        {/*    <Link*/}
                        {/*      className="rbt-btn-link color-primary"*/}
                        {/*      to="/personaldetails"*/}
                        {/*    >*/}
                        {/*      View Profile*/}
                        {/*    </Link>*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                        <ul className='user-list-wrapper'>
                          <li className='position-static'>
                            <Link to='/expertmainpage'>
                              <span className='material-symbols-outlined'>
                                description
                              </span>
                              <span>Expert Q &amp; A</span>
                            </Link>
                          </li>
                          <li>
                            <Link to='/logout'>
                              <span className='material-symbols-outlined'>
                                logout
                              </span>
                              <span>Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* Start Mobile-Menu-Bar */}
                <div className='mobile-menu-bar d-block d-xl-none'>
                  <div className='hamberger'>
                    <button
                      className='hamberger-button rbt-round-btn'
                      data-toggle='offcanvas'
                      onClick={toggleOffcanvas}>
                      <i className='feather-menu' />
                    </button>
                  </div>
                </div>
                {/* Start Mobile-Menu-Bar */}
              </div>
            </div>
          </div>
          {/* Start Search Dropdown  */}
          <div className='rbt-search-dropdown'>
            <div className='wrapper'>
              <div className='row'>
                <div className='col-lg-12'>
                  <form action='#'>
                    <input
                      type='text'
                      placeholder='What are you looking for?'
                    />
                    <div className='submit-btn'>
                      <Link className='rbt-btn btn-gradient btn-md' to='#'>
                        Search
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End Search Dropdown  */}
        </div>
      </header>
      {/* Mobile Menu Section */}
      <div className='popup-mobile-menu'>
        <div className='inner-wrapper'>
          <div className='inner-top'>
            <div className='content'>
              <div className='logo'>
                <Link to='/'>
                  <img
                    src='../assets/images/logo/doubt-q.png'
                    alt='Logo DoubtQ'
                  />
                </Link>
              </div>
              <div className='rbt-btn-close'>
                <button
                  className='close-button rbt-round-btn'
                  data-toggle='offcanvas'
                  onClick={toggleOffcanvas}>
                  <i className='feather-x' />
                </button>
              </div>
            </div>
            <ul className='navbar-top-left rbt-information-list justify-content-start mt--20'>
              <li>
                <Link to='mailto:info@doubtq.com'>
                  <i className='feather-mail' />
                  info@doubtq.com
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <i className='fab fa-whatsapp' /> +91 93747 44365
                </Link>
              </li>
            </ul>
          </div>
          <nav className='mainmenu-nav'>
            <ul className='mainmenu'>
              <li className='position-static'>
                <Link to={isLoggedIn() ? "/expertmainpage" : "/"}>Home</Link>
              </li>
              <li className='position-static'>
                <Link to='/staticpage'>Expert Q &amp; A</Link>
              </li>
              <li className='position-static'>
                <Link to='/allquestion'>My Answers</Link>
              </li>
            </ul>
          </nav>
          <div className='mobile-menu-bottom'>
            <div className='social-share-wrapper'>
              <h6>Find With Us</h6>
              <ul className='social-icon social-default icon-naked justify-content-start'>
                <li>
                  <Link className='facebook' to='https://www.facebook.com/'>
                    <i className='feather-facebook' />
                  </Link>
                </li>
                <li>
                  <Link className='instagram' to='https://www.instagram.com/'>
                    <i className='feather-instagram' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
