import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../../Selectfrom.css";
import { getAuthToken } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { getProfessionalInfo, setProfessionalDetailsReq } from "../../redux/actions/ProfileAction";

const Professionaldetails = () => {

  useEffect(() => {
    document.title = 'DoubtQ - A Comprehensive Overview of Career Experience and Qualifications';
  }, []);

  const dispatch = useDispatch();
  const history = useNavigate();
  const professionalDetailsReducer = useSelector((state) => state.profile.professionalDetails);
  const professionalInfo = useSelector(
    (state) => state.profile.professionalInfo
  );
  const [professionalDetails, setProfessionalDetails] = useState({
    clg_city
      :
      professionalInfo?.data?.tut_info?.clg_city,
    clg_name
      :
      professionalInfo?.data?.tut_info?.clg_name,

    degree
      :
      professionalInfo?.data?.tut_info?.degree,
    degree_choice
      :
      professionalInfo?.data?.tut_info?.degree_choice,
    degree_specialisation
      :
      professionalInfo?.data?.tut_info?.degree_specialisation,
      gpa:professionalInfo?.data?.tut_info?.gpa
  });

  const { success, loading } = professionalDetailsReducer;
  
  useEffect(() => {
    if (professionalInfo) {
      setProfessionalDetails({
        clg_city
          :
          professionalInfo?.data?.tut_info?.clg_city,
        clg_name
          :
          professionalInfo?.data?.tut_info?.clg_name,

        degree
          :
          professionalInfo?.data?.tut_info?.degree,
        degree_choice
          :
          professionalInfo?.data?.tut_info?.degree_choice,
        degree_specialisation
          :
          professionalInfo?.data?.tut_info?.degree_specialisation,
          gpa:professionalInfo?.data?.tut_info?.gpa
      })
    }
  }, [professionalInfo])

  useEffect(() => {
    if (success) {
      history("/bankdetails");
    }
  }, [success]);

  useEffect(() => {
    dispatch(getProfessionalInfo())
  }, [])


  const onFormChange = (name, value) => {
    setProfessionalDetails({ ...professionalDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    const fileObj = e.target.files[0];
    setProfessionalDetails({
      ...professionalDetails,
      [e.target.name]: fileObj,
    });
  };

  const handlePersonalDetailSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const payload = {
      ...professionalDetails,
      token: getAuthToken(),
    };
    for (const key in payload) {
      formData.append(key, payload[key]);
    }
    dispatch(
      setProfessionalDetailsReq(formData)
    );
  };


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
                  <li>
                    <i className="feather-check bg-color-primary color-white" />
                    Choose subjects
                  </li>
                  <li>
                    <i className="feather-check bg-color-primary color-white" />
                    MCQ test
                  </li>
                  <li>
                    <i className="feather-check bg-color-primary color-white" />
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
                                    // className="active color-primary"
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
                                      className="active color-primary"
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
                          <div className="col-lg-7">
                            <div className="section-title mb--20">
                              <h4>Professional details</h4>
                            </div>
                            <div className="mt--20">
                              <h6>Please select *</h6>
                              <div className="mb--5">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="rbt-radio"
                                  id="rbt-radio-1"
                                  checked={professionalDetails?.degree_choice === "no"}
                                  onChange={(e) => { onFormChange("degree_choice", "no") }}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="rbt-radio-1"
                                >
                                  I am a bachelor’s student
                                </label>
                              </div>
                              <div className="mb--20">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="rbt-radio"
                                  id="rbt-radio-2"
                                  checked={professionalDetails?.degree_choice === "yes"}
                                  onChange={(e) => { onFormChange("degree_choice", "yes") }}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="rbt-radio-2"
                                >

                                  I have completed my bachelor’s degree
                                </label>
                              </div>
                            </div>
                            <form action="#" className="rbt-default-form">
                              <div className="rbt-form-group">
                                <label htmlFor="displayname" className="">
                                  Add highest/relevant degree ( Mandatory )
                                </label>
                                <div className="dropdown react-bootstrap-select w-100">
                                  <input
                                    type="text"
                                    defaultValue=""
                                    value={professionalDetails?.degree}
                                    onChange={(e) => {
                                      onFormChange("degree", e.target.value);
                                    }}
                                    className="w-100"
                                  />
                                  {/* <option>Select Subject</option>
                                    <option value="1">John</option>
                                    <option value="2">Due</option>
                                    <option value="3">Due John</option>
                                    <option value="4">johndue</option> */}
                                </div>
                              </div>
                              <div className="rbt-form-group">
                                <label htmlFor="username">
                                  Upload highest/relevant degree ( Mandatory )
                                </label>
                                <input
                                  type="file"
                                  className="custom-file-input pb--5 pt--5"
                                  id="inputGroupFile01"
                                  name="degree_image"
                                  aria-describedby="inputGroupFileAddon01"
                                  onChange={handleFileChange}
                                />
                              </div>
                              <div className="rbt-form-group">
                                <label htmlFor="username">
                                  Upload highest/relevant degree Specialization
                                  ( Mandatory )
                                </label>
                                <input
                                  type="text"
                                  defaultValue=""
                                  name="degree_specialisation"
                                  value={professionalDetails?.degree_specialisation}
                                  onChange={(e) => {
                                    onFormChange("degree_specialisation", e.target.value);
                                  }}
                                />
                              </div>
                              <div className="rbt-form-group">
                                <label htmlFor="phonenumber">
                                  Upload highest/relevant degree college name (
                                  Mandatory )
                                </label>
                                <input
                                  type="text"
                                  defaultValue=""
                                  name="clg_name"
                                  value={professionalDetails?.clg_name}
                                  onChange={(e) => {
                                    onFormChange("clg_name", e.target.value);
                                  }}
                                />
                              </div>
                              <div className="rbt-form-group">
                                <label htmlFor="phonenumber">
                                  Upload highest/relevant degree College City (
                                  Mandatory )
                                </label>
                                <input
                                  type="text"
                                  defaultValue=""
                                  name="clg_city"
                                  value={professionalDetails?.clg_city}
                                  onChange={(e) => {
                                    onFormChange("clg_city", e.target.value);
                                  }}
                                />
                              </div>
                              <div className="rbt-form-group">
                                <label htmlFor="phonenumber">
                                  GPA/mark% ( Mandatory )
                                </label>
                                <input
                                  placeholder="%"
                                  value={professionalDetails?.gpa}
                                  onChange={(e) => {
                                    onFormChange("gpa", e.target.value);
                                  }}
                                  type="number"
                                />
                              </div>
                              <div className="rbt-form-group">
                                <button
                                  className="btn-sm rbt-btn btn-gradient"
                                  disabled={loading || !professionalDetails?.gpa || !professionalDetails?.degree_choice || !professionalDetails?.degree || !professionalDetails?.degree_specialisation || !professionalDetails?.clg_name || !professionalDetails?.clg_city}
                                  onClick={handlePersonalDetailSubmit}
                                >
                                  Submit
                                </button>
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
        </div>
      </main>
    </>
  );
};

export default Professionaldetails;
