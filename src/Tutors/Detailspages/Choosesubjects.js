import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Selectfrom.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../../utils/helper";
import {
  getSubjectListReq,
  setSubjectDetailsReq,
} from "../../redux/actions/ProfileAction";
import { Select } from "antd";
import { toast } from 'react-toastify';

const Choosesubjects = () => {
  useEffect(() => {
    document.title =
      "DoubtQ - A Comprehensive Guide to Selecting Subjects for Personal and Professional Growth";
  }, []);

  const history = useNavigate();
  const dispatch = useDispatch();
  const { subjectDetails: subjectDetailsReducer, subjectListDetails } =
    useSelector((state) => state.profile);
  const [subjectDetails, setSubjectDetails] = useState([]);
  const subjectList = subjectListDetails?.data?.data || [];

  const { success } = subjectDetailsReducer;

  useEffect(() => {
    if (success) {
      history("/mcqtest");
    }
  }, [success]);

  useEffect(() => {
    dispatch(getSubjectListReq());
  }, []);

  // const onFormChange = (e) => {
  //   if (e.length > 5) return;
  //   setSubjectDetails(e);
  // };
  function onFormChange(selectedSubjects) {
    if (selectedSubjects.length > 5) {
      toast.error("You have selected the maximum number of subjects.");
      return;
    }
    setSubjectDetails(selectedSubjects);
  }

  const handleSubjectSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setSubjectDetailsReq({ subjects: subjectDetails, token: getAuthToken() })
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
                  <li className="active color-primary">
                    <i className="feather-check bg-color-primary color-white" />
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
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Personal details</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      // to="/choosesubjects"
                                      className="active color-primary"
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
                          <div className="col-lg-7">
                            <div className="section-title mb--20">
                              <h4>Choose subjects</h4>
                            </div>
                            <form action="#" className="rbt-default-form">
                              <div className="filter-select rbt-modern-select mb--10">
                                <div className="dropdown react-bootstrap-select w-100">
                                  <p>Please select up to 5 subjects that you're comfortable tutoring in.</p>
                                  <Select
                                    mode="multiple"
                                    allowClear
                                    style={{ width: "100%", height: 50 }}
                                    height={50}
                                    value={subjectDetails}
                                    placeholder="Please select"
                                    onChange={onFormChange}
                                    options={subjectList.sort().map((a) => ({
                                      label: a,
                                      value: a,
                                    }))}
                                  />
                                </div>
                              </div>
                              <div className="rbt-form-group">
                                <button
                                  onClick={handleSubjectSubmit}
                                  className="btn-sm rbt-btn btn-gradient"
                                  disabled={!subjectDetails?.length}
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

export default Choosesubjects;
