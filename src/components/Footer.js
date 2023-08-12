import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "react-phone-number-input/style.css";
import axios from "axios";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const baseURL = process.env.REACT_APP_APIS_BASE_URL;

  const location = useLocation().pathname;

  const [data1, setData1] = useState([]);

  // Add mobileNo Api
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/tutor/getmobileno`);
      setData1(response.data.document);
      console.log(response.data.document);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
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

  return (
    <>
      {/* Start Footer aera */}
      <footer
        className={
          "rbt-footer footer-style-1 " +
          (location === "/signin" ||
          location === "/signup" ||
          location === "/signupmodel" ||
          location === "/forgotpassword"
            ? "d-none"
            : "")
        }>
        <div className='footer-top'>
          <div className='container'>
            <div className='row row--15 mt_dec--30'>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12 mt--30'>
                <div className='footer-widget'>
                  <h5 className='ft-title'>About Us</h5>
                  <ul className='ft-link'>
                    <li>
                      <Link to='/aboutdoubtq'>About DoubtQ</Link>
                    </li>
                    <li>
                      <Link to='#'>Become a tutor</Link>
                    </li>
                    <li>
                      <Link to='/faq'>FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12 mt--30'>
                <div className='footer-widget'>
                  <h5 className='ft-title'>Policy</h5>
                  <ul className='ft-link'>
                    <li>
                      <Link to='/refundpolicy'>Refund Policy</Link>
                    </li>
                    <li>
                      <Link to='/privacypolicy'>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to='/termsandconditions'>Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to='/copyrightpolicy'>Copyright Policy</Link>
                    </li>
                    <li>
                      <Link to='/honourcode'>Honour Code</Link>
                    </li>
                    <li>
                      <Link to='/academicintegrity'>Academic Integrity</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12 mt--30'>
                <div className='footer-widget'>
                  <h5 className='ft-title'>Get Contact</h5>
                  <ul className='ft-link'>
                    <li>
                      <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                      <span>Phone:</span>
                      {data1
                        ? data1.map((data, index) => (
                            <Link
                              key={index}
                              className='color-black'
                              to={`tel:${data.footermobileNo}`}>
                              <>+ {formatPhoneNumber(data.footermobileNo)}</>
                            </Link>
                          ))
                        : null}
                    </li>
                    <li>
                      <span>E-mail: </span>
                      <Link to='mailto:hr@example.com'> info@doubtq.com</Link>
                    </li>
                  </ul>
                  {/* <ul className="social-icon social-default icon-naked justify-content-start mt--10 mb--20">
                    <li>
                      <Link className="facebook" to="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link className="instagram" to="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </Link>
                    </li>
                  </ul> */}
                  {/* <h5 className="ft-title">Get App</h5>
                  <div className="row">
                    <div className="col-lg-6 mb_sm--10">
                      <Link to="#">
                        <img
                          src="../assets/images/icons/google_play.svg"
                          alt="Google Play"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <Link to="#">
                        <img
                          src="../assets/images/icons/app_store.svg"
                          alt="App Store"
                        />
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12 mt--30'>
                <div className='footer-widget'>
                  <h5 className='ft-title'>Follows</h5>
                  <ul className='social-icon social-default icon-naked justify-content-start mt--10 mb--20'>
                    <li>
                      <Link className='facebook' to='https://www.facebook.com/'>
                        <i className='feather-facebook' />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='instagram'
                        to='https://www.instagram.com/'>
                        <i className='feather-instagram' />
                      </Link>
                    </li>
                  </ul>
                  <h5 className='ft-title'>Get App</h5>
                  <div className='row'>
                    <div className='col-lg-6 mb_sm--10'>
                      <Link to='/comingsoon'>
                        <img
                          src='../assets/images/icons/google_play.svg'
                          alt='Google Play'
                        />
                      </Link>
                    </div>
                    <div className='col-lg-6'>
                      <Link to='/comingsoon'>
                        <img
                          src='../assets/images/icons/app_store.svg'
                          alt='App Store'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright-area copyright-style-1 ptb--20'>
          <div className='container'>
            <hr className='rbt-separator m-0' />
            <div className='row align-items-center pt--30'>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
                <p className='rbt-link-hover text-center text-lg-start'>
                  ©{currentYear} DoubtQ. All Rights Reserved
                </p>
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
                <ul className='copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10'>
                  <li>
                    Website developed by:
                    <Link
                      className='mx-1'
                      target='_blank'
                      to='https://www.setblue.com/'>
                      Setblue.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
