import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuthToken } from "../../utils/helper";

const baseURL = process.env.REACT_APP_APIS_BASE_URL;

const Mcqtest = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Test Your Knowledge: Multiple Choice Questions (MCQ) Online Quiz';
  }, []);

  const history = useNavigate();
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [showModal, setShowModal] = useState({ open: false, link: "" });
  const [subjectArray, setSubjectArray] = useState([]);

  const onSubmitClick = () => {
    history("/expertmainpage")
    // setIsExamSubmitted(true);
  };

  const onMcqSubmitClick = () => {
    history("/professionaldetails")
  }
  const [data, setData] = useState([])
  const fetchdata = async () => {

    try {
      const response = await axios.get(`${baseURL}/tutor/gettutorexampopup`);

      setData(response.data.document);
      toast.success(response.data.message);

    } catch (error) {
      toast.error(error.response.data.error);

    }
  };
  const fetchSubjectData = async () => {
    try {
      const response = await axios.post(`${baseURL}/tutor/getsubjectattempt`, {
        token: getAuthToken(),
      });
      setSubjectArray(response.data.tut_sub);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  const content = data?.[0]?.content

  const lines = content?.split("\n");

  const mcqData = data?.map((value) => value.content)
  console.log(mcqData[0]);
  useEffect(() => {
    fetchdata()
    fetchSubjectData()
  }, [])

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
                                      className="active color-primary"
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
                              <h4>MCQ test</h4>
                            </div>
                            {
                              subjectArray.map(i => <div className="row border-bottom p--10">
                                <div className="col-lg-3 col-10">
                                  {i.subject}
                                </div>
                                <div className="col-lg-3 col-10">
                                Attempt :-{i.isAttempt}
                                </div>
                                <div className="col-lg-6 col-2 text-end">
                                  <button
                                    style={{ border: "none", background: "transparent" }}
                                    className="rbt-btn-link color-primary text-center"
                                    onClick={() => setShowModal({ open: true, link: `/tutorexammcq?subject=${i.subject}` })}
                                  >
                                    <span className="btn-text">
                                      {!i.isAttempt?'Give test now':'Re-Attempt'}
                                    </span>
                                    <i className="feather-arrow-right" />
                                  </button>
                                </div>
                              </div>)
                            }
                          </div>
                        </div>
                        <div className="mt--20 text-end">
                          <button
                            onClick={onSubmitClick}
                            className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                            disabled={subjectArray.find(i=>!i.isAttempt)}
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Submit</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div
        className="modal"
        id="thankyoupopup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        style={{
          display: isExamSubmitted ? "block" : "hidden",
          background: "#00000059",
        }}
        aria-labelledby="thankyoupopup"
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
                <i className="h1 feather-check-circle text-success" />
                <h4 className="mt--20 mb--20">Congratulations</h4>
                <h6 className="mb--20">
                  Thank you,
                  <br />
                  Thank you for submitting your test answers. We kindly request
                  that you allow 2-3 business days for our team to review your
                  submission. Please monitor your email inbox for further
                  instructions.
                </h6>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={onMcqSubmitClick}

                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Ok</span>
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
        </div>
      </div>

      {!!showModal?.open && <div
        className="modal"
        id="thankyoupopup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        style={{
          display: showModal?.open ? "block" : "hidden",
          background: "#00000059",
        }}
        aria-labelledby="thankyoupopup"
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
                onClick={() => setShowModal({ open: false, link: '/tutorexammcq' })}
              />
            </div>
            <div className="modal-body">
              <div className="text-center">
                <i className="h1 feather-fast-forward" />
                <h6 className="mb--20">
                  A𝗿𝗲 𝘆𝗼𝘂 𝘀𝘂𝗿𝗲 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝘀𝘁𝗮𝗿𝘁 𝘁𝗵𝗲 𝗲𝘅𝗮𝗺?
                  <br />
                </h6>
                {/* <p>{mcqData[0]}</p> */}
                <ul className="exam-popup-dic">
                  {lines?.map((line, index) => (
                    <li key={index} style={{ whiteSpace: 'pre-line' }}>{line}</li>
                  ))}
                </ul>

                <p className="">You need to verified if you want to give exam</p>
                <div className="d-flex justify-content-center" >
                  <Link className="rbt-btn btn-gradient hover-icon-reverse btn-sm mx-4" onClick={() => setShowModal({ open: false, link: '/tutorexammcq' })}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Cancel</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </span>
                  </Link>
                  <Link
                    to={showModal?.link}
                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm mx-4"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Ok</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Mcqtest;
