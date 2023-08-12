import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../../Selectfrom.css";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalInfo, setPersonalDetailsReq } from "../../redux/actions/ProfileAction";
import { getAuthToken } from "../../utils/helper";

const Personaldetails = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Comprehensive Information on Individual Profile and Background';
  }, []);

  const dispatch = useDispatch();
  const history = useNavigate();
  const personalDetailsReducer = useSelector(
    (state) => state.profile.personalDetails
  );
  const personalInfo = useSelector(
    (state) => state.profile.personalInfo
  );
  const [personalDetails, setPersonalDetails] = useState({
    country
      :
      personalInfo?.data?.tutorinfo?.country,
    dob
      :
      personalInfo?.data?.tutorinfo?.dob,
    experience
      :
      personalInfo?.data?.tutorinfo?.experience,
    gender
      :
      personalInfo?.data?.tutorinfo?.gender,
    mobileNo
      :
      personalInfo?.data?.tutorinfo?.mobileNo,
    name
      :
      personalInfo?.data?.tutorinfo?.name,
  });

  useEffect(() => {
    if (personalInfo) {
      setPersonalDetails({
        country
          :
          personalInfo?.data?.tutorinfo?.country,
        dob
          :
          personalInfo?.data?.tutorinfo?.dob,
        experience
          :
          personalInfo?.data?.tutorinfo?.experience,
        gender
          :
          personalInfo?.data?.tutorinfo?.gender,
        mobileNo
          :
          personalInfo?.data?.tutorinfo?.mobileNo,
        name
          :
          personalInfo?.data?.tutorinfo?.name,
      })
    }
  }, [personalInfo])

  const { success, loading } = personalDetailsReducer;

  useEffect(() => {
    dispatch(getPersonalInfo())
  }, [])


  useEffect(() => {
    if (success) {
      history("/choosesubjects");
    }
  }, [success]);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    const fileObj = e.target.files[0];
    setPersonalDetails({ ...personalDetails, profilephoto: fileObj });
  };

  const handlePersonalDetailSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const payload = { ...personalDetails, token: getAuthToken() };
    for (const key in payload) {
      formData.append(key, payload[key]);
    }
    dispatch(setPersonalDetailsReq(formData))
  }

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Hello,</span> Tutor
            </h5>
          </div>
        </div>
        <div className="dashboard pt--20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <ul className="rbt-list-style-2 justify-content-center">
                  <li>
                    <i className="feather-check bg-color-primary color-white" />
                    Personal details
                  </li>
                  <li className="off">
                    <i className="feather-check" />
                    Choose subjects
                  </li>
                  <li className="off">
                    <i className="feather-check" />
                    MCQ test
                  </li>
                  <li className="off">
                    <i className="feather-check" />
                    Professional details
                  </li>
                  <li className="off">
                    <i className="feather-check" />
                    Bank details
                  </li>
                </ul>
              </div>
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                <div className="row g-5">
                  <div className="col-lg-3">
                    {/* Start Dashboard Sidebar  */}
                    <div className="sticky-top mb--30 mb_sm--0">
                      <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                        <div className="inner">
                          <div className="content-item-content">
                            <div className="rbt-default-sidebar-wrapper">
                              <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link
                                      // to="/personaldetails"
                                      className="active color-primary"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Personal details</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                    // to="/choosesubjects"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Choose subjects </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                    // to="/mcqtest"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>MCQ test </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                    // to="/professionaldetails"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Professional details </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                    // to="/bankdetails"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Bank details </span>
                                    </Link>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Dashboard Sidebar  */}
                  </div>
                  <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                      <div className="content">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="section-title mb--20">
                              <h4>Personal settings</h4>
                            </div>
                          </div>
                          <form
                            action="#"
                            className="rbt-default-form row row--15"
                          >
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="d-flex">
                                <img
                                  src={
                                    personalDetails?.profilephoto ? URL.createObjectURL(personalDetails?.profilephoto) :
                                      "../assets/images/icons/placeholder-avatar.jpg"
                                  }
                                  className="rounded-circle"
                                  alt="example placeholder"
                                  accept="image/*"
                                  style={{ width: 120 }}
                                />
                              </div>
                              <div className="mt--10 mb--20">
                                <label
                                  className="form-label btn-sm rbt-btn btn-border d-inline-block"
                                  htmlFor="customFile2"
                                >
                                  Upload photo
                                </label>
                                <input
                                  type="file"
                                  className="form-control d-none"
                                  id="customFile2"
                                  onChange={handleFileChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="firstname">
                                  Name ( as per your bank account )<span className="text-danger">*</span>
                                </label>
                                <input
                                  id="firstname"
                                  type="text"
                                  defaultValue=""
                                  placeholder="Jone Dio"
                                  name="name"
                                  onChange={onFormChange}
                                  value={personalDetails?.name}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="filter-select rbt-modern-select">
                                <label htmlFor="displayname" className="">
                                  Country<span className="text-danger">*</span>
                                </label>
                                <div className="dropdown react-bootstrap-select w-100">
                                  <Form.Select value={personalDetails?.country} name="country" onChange={onFormChange} className="w-100">
                                    {/*<option value="vietnam">Vietnam</option>*/}
                                    <option value="">Please select country</option>
                                    <option value="india">India</option>
                                    {/*<option value="usa">USA</option>*/}
                                    {/*<option value="uk">UK</option>*/}
                                  </Form.Select>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="lastname">Mobile number</label>
                                <div className="row g-0">
                                  <div className="col-lg-12">
                                    <input
                                      id="lastname"
                                      type="tel"
                                      defaultValue=""
                                      placeholder="Enter your mobile no."
                                      name="mobileNo"
                                      value={personalDetails?.mobileNo}
                                      onChange={onFormChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="filter-select rbt-modern-select">
                                <label htmlFor="displayname" className="">
                                  Gender<span className="text-danger">*</span>
                                </label>
                                <div className="dropdown react-bootstrap-select w-100">
                                  <Form.Select value={personalDetails.gender} name="gender" onChange={onFormChange} className="w-100">
                                    <option value="" hidden disabled selected>Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                  </Form.Select>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="username">Date Of birth<span className="text-danger">*</span></label>
                                <input
                                  type="date"
                                  placeholder="Date"
                                  id="date"
                                  name="dob"
                                  onChange={onFormChange}
                                  value={personalDetails?.dob}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="tutorexperience">
                                  Tutor experience ( in years )<span className="text-danger">*</span>
                                </label>
                                <input
                                  id="tutorexperience"
                                  type="text"
                                  defaultValue=""
                                  placeholder=""
                                  name="experience"
                                  onChange={onFormChange}
                                  value={personalDetails?.experience}
                                />
                              </div>
                            </div>
                            <div className="col-12 mt--20">
                              <div className="rbt-form-group">
                                <button
                                  className="btn-sm rbt-btn btn-gradient"
                                  disabled={loading || !personalDetails.gender || !personalDetails?.country || !personalDetails?.experience || !personalDetails?.dob}
                                  onClick={handlePersonalDetailSubmit}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
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
    </>
  );
};

export default Personaldetails;
