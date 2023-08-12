import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactTutor } from "../redux/actions/ProfileAction";
import "react-phone-number-input/style.css";
import axios from "axios";


const Contact = () => {

    useEffect(() => {
        document.title = 'DoubtQ - Contact Us';
      }, []);

    const dispatch = useDispatch();
    const [contactInfo, setContactInfo] = useState({});
    const [data1, setData1] = useState([]);

    const { contactTutor: contactTutorReducer } = useSelector((state) => state.profile);

    const handleContactClick = (e) => {
        e.preventDefault()
        const payload = {
            ...contactInfo

        }
        dispatch(contactTutor(payload));
    }

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: value })
    }

    useEffect(() => {
        if (contactTutorReducer.success) {
            setContactInfo({})
        }
    }, [contactTutorReducer.success])

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

    useEffect(() => {
        fetchData();
    }, []);

    const formatPhoneNumber = (phoneNumber) => {
        if (!phoneNumber) {
            return '';
          }
        const countryCode = phoneNumber.slice(0, 2);
        const firstPart = phoneNumber.slice(2, 7);
        const secondPart = phoneNumber.slice(7, 12);
        return `${countryCode} ${firstPart}-${secondPart}`;
    };


    return (
        <>
            <main className="rbt-main-wrapper">
                <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--60">
                                    <span className="subtitle bg-secondary-opacity">Contact Us</span>
                                    <h2 className="title">Have some questions? </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                                data-sal="slide-up"
                                data-sal-delay={150}
                                data-sal-duration={800}
                            >
                                <div className="rbt-address">
                                    <div className="icon">
                                        <i className="feather-headphones" />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact Phone Number</h4>
                                        {data1.map((data) => (
                                            <Link className="color-black" to={`tel:${data.contactmobileNo}`}>
                                                <>
                                                    <i className="fa fa-phone" /> +{formatPhoneNumber(data.contactmobileNo)}
                                                </>
                                            </Link>
                                        ))}                                       
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                                data-sal="slide-up"
                                data-sal-delay={200}
                                data-sal-duration={800}
                            >
                                <div className="rbt-address">
                                    <div className="icon">
                                        <i className="feather-mail" />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Email Address </h4>                                      
                                        <p>
                                            <Link to="mailto:info@doubtq.com">info@doubtq.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                                data-sal="slide-up"
                                data-sal-delay={250}
                                data-sal-duration={800}
                            >
                                <div className="rbt-address">
                                    <div className="icon">
                                        <i className="feather-map-pin" />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Location</h4>
                                        <p>
                                            5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rbt-contact-address mb--80">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img
                                        className="w-100 radius-6"
                                        src="assets/images/about/contact.jpg"
                                        alt="Contact Images"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                    <div className="section-title text-start">
                                        <span className="subtitle bg-primary-opacity">inquiry now</span>
                                    </div>
                                    <h3 className="title">You can contact with me</h3>
                                    <form
                                        className="rbt-profile-row rbt-default-form row row--15"
                                    >
                                        <div className="col-lg-12 col-12">
                                            <div className="rbt-form-group">
                                                <label htmlFor="firstname">Full Name<span className="text-danger">*</span></label>
                                                <input
                                                    id="firstname"
                                                    type="text"
                                                    defaultValue=""
                                                    placeholder="Enter name here"
                                                    name="fullname"
                                                    value={contactInfo?.fullname}
                                                    onChange={onFormChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12">
                                            <div className="rbt-form-group">
                                                <label htmlFor="lastname">Email</label>
                                                <input
                                                    id="lastname"
                                                    type="email"
                                                    defaultValue=""
                                                    placeholder="Enter email id"
                                                    name="email"
                                                    value={contactInfo?.email}
                                                    onChange={onFormChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12">
                                            <div className="rbt-form-group">
                                                <label htmlFor="username">Mobile</label>
                                                <input
                                                    id="username"
                                                    type="tel"
                                                    defaultValue=""
                                                    placeholder="Enter mobile no"
                                                    name="mobileNo"
                                                    value={contactInfo?.mobileNo}
                                                    onChange={onFormChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="rbt-form-group">
                                                <label htmlFor="bio">Message<span className="text-danger">*</span></label>
                                                <textarea
                                                    placeholder="Something say"
                                                    id="bio"
                                                    cols={20}
                                                    rows={5}
                                                    defaultValue={""}
                                                    name="Message"
                                                    value={contactInfo?.Message}
                                                    onChange={onFormChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 mt--20">
                                            <div className="rbt-form-group">
                                                <button disabled={contactTutorReducer.loading} onClick={handleContactClick} className="btn-sm rbt-btn btn-gradient" >
                                                    Send message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Modal */}
            <div
                className="modal fade"
                id="youtubepopup"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="youtubepopup"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <p className="text-danger">
                                    *You must view the video for atleast 2 minutes to see the answer
                                </p>
                                <iframe
                                    width="100%"
                                    height={315}
                                    src="https://www.youtube.com/embed/nR3ok_P2gzI"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
