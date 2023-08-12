import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../Selectfrom.css";
import { useDispatch, useSelector } from "react-redux";
import { getStatesList, getUnansweredQuestion, resetQuestionBlock } from "../redux/actions/QuestionAction";
import moment from "moment/moment";
import PulseLoader from "react-spinners/PulseLoader";

const Unsolvedquestions = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Exploring the Mysteries of the Unknown';
  }, []);

  const dispatch = useDispatch();
  const history = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [questionType, setQuestionType] = useState("");
  const unsolvedQuestionReducer = useSelector(
    (state) => state.question.unansweredQuestion
  );
  const {
    statesList,
  } = useSelector((state) => state.question);
  const statesListData = statesList?.data || {};
  const questionTypeData = useSelector((state) => state.question.questionType);
  const questionTypeArray = questionTypeData?.data?.data || [];
  useEffect(() => {
    const currentPageSkip = (currentPage - 1) * 5;
    const params = `?limit=5&skip=${currentPageSkip}&questionType=${questionType}`;
    dispatch(getUnansweredQuestion(params));
  }, [currentPage, questionType]);

  const handleAnswerNowClick = (qId) => {
    history(`/questiondescription?id=${qId}`);
  };

  useEffect(() => {
    dispatch(resetQuestionBlock({ blockType: "questionUnsolved" }));
    dispatch(getStatesList());
  }, [])

  const unsolvedQuestionData = unsolvedQuestionReducer.data || [];
  const unsolvedQuestionLoading = unsolvedQuestionReducer.loading;

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Welcome,</span> Expert!
            </h5>
          </div>
        </div>
        <div className="dashboard mt--20 mb--10">
          <div className="container">
            <div className="alert alert-danger mb--20" role="alert">
              <i className="feather-alert-triangle pl--20 pr--10" /> Ensure you
              follow the Q&amp;A answering guidelines to maintain a CF score of
              80% or more. for any help, please visit our support page.
            </div>
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
                              <div className="section-title mb--10">
                                <h6 className="rbt-title-style-2">
                                  <img
                                    src="../assets/images/icons/home.svg"
                                    alt="img"
                                  />
                                  Back to homepage
                                </h6>
                              </div>
                              <p>Try fresh questions available on dashboard </p>
                              <Link
                                to="/expertmainpage"
                                className="rbt-btn btn-sm btn-border-gradient"
                              >
                                Home page
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="inner mt--20">
                          <div className="content-item-content">
                            <div className="rbt-default-sidebar-wrapper">
                              <div className="section-title mb--10">
                                <h6 className="rbt-title-style-2">
                                  <img
                                    src="../assets/images/icons/my-stats.svg"
                                    alt="img"
                                  />
                                  My stats
                                </h6>
                              </div>

                              <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link to="#" className="active">
                                      <span>PRR:</span>
                                    </Link>
                                    <small className="badge color-body">
                                      {statesListData?.PRR}
                                    </small>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <span>Upvote:</span>
                                    </Link>
                                    <small className="badge color-body">
                                      {statesListData?.upvote}
                                    </small>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <span>Downvote:</span>
                                    </Link>
                                    <small className="badge color-body">
                                      {statesListData?.downvote}
                                    </small>
                                  </li>
                                </ul>
                              </nav>

                            </div>
                          </div>
                        </div>
                        <div className="inner mt--20">
                          <div className="content-item-content">
                            <div className="rbt-default-sidebar-wrapper">
                              <div className="section-title mb--10">
                                <h6 className="rbt-title-style-2">
                                  <img
                                    src="../assets/images/icons/writing_questions.svg"
                                    alt="img"
                                  />
                                  Quick links
                                </h6>
                              </div>
                              <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link to="/contact">
                                      <i className="feather-arrow-right" />
                                      <span>Contact us</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="feather-arrow-right" />
                                      <span>Answering guidelines</span>
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
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--30">
                      <div className="content">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="section-title">
                              <h4 className="mb--10">Unsolved questions</h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="filter-select rbt-modern-select mb--10">
                              <label>Question type :</label>
                              <div className="dropdown react-bootstrap-select w-100">
                                <Form.Select
                                  id="displayname"
                                  className="w-100"
                                  value={questionType}
                                  onChange={(e) => {
                                    setQuestionType(e.target.value);
                                  }}
                                >
                                  {questionTypeArray.map((q) => (
                                    <option value={q._id}>{q.questionType}</option>
                                  ))}
                                </Form.Select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rbt-dashboard-table table-responsive mobile-table-750">
                          <table
                            style={{ userSelect: "none" }}
                            className="rbt-table table table-borderless"
                          >
                            <thead>
                              <tr>
                                <th>Question</th>
                                <th>Price</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {unsolvedQuestionLoading ? (
                                <td
                                  colSpan={3}
                                  className="loader"
                                  align="center"
                                >
                                  <PulseLoader color="#b02deb" />
                                </td>
                              )
                                : unsolvedQuestionData.length === 0 ? (
                                  <tr>
                                    <td colSpan={3} className="fw-3 fw-bolder text-center">
                                      No questions found
                                    </td>
                                  </tr>
                                ) : !unsolvedQuestionLoading && unsolvedQuestionData.map((q) => (
                                  <tr>
                                    <td>
                                      <span className="rbt-badge-5 bg-primary-opacity mb--5">
                                        {q.questionType}
                                      </span>
                                      <h6 className="mb--0">{q.question}</h6>
                                      <small>
                                        {moment(q.que_timer_end).fromNow()}
                                      </small>
                                    </td>
                                    <td>
                                      <h6 className="color-primary">
                                        INR {q.tutorPrice}
                                      </h6>
                                    </td>
                                    <td>
                                      <button
                                        className="rbt-btn btn-border-gradient btn-sm"
                                        onClick={() =>
                                          handleAnswerNowClick(q._id)
                                        }
                                      >
                                        <span className="btn-text">
                                          Answer Now
                                        </span>
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="col-lg-12">
                          <nav>
                            <ul className="rbt-pagination justify-content-end">
                              <li>
                                <button
                                  disabled={currentPage === 1}
                                  className="transparent-btn"
                                  onClick={() =>
                                    setCurrentPage(currentPage - 1)
                                  }
                                >
                                  <Link to="#" aria-label="Previous">
                                    <i className="feather-chevron-left" />
                                  </Link>
                                </button>
                              </li>
                              <li className={currentPage === 1 && "active"}>
                                <button
                                  onClick={() => setCurrentPage(1)}
                                  className="transparent-btn"
                                >
                                  <Link to="#">1</Link>
                                </button>
                              </li>
                              <li className={currentPage === 2 && "active"}>
                                <button
                                  onClick={() => setCurrentPage(2)}
                                  className="transparent-btn"
                                  disabled={!unsolvedQuestionData.length}
                                >
                                  <Link to="#">2</Link>
                                </button>
                              </li>
                              <li

                                className={currentPage === 3 && "active"}
                              >
                                <button onClick={() => setCurrentPage(3)} disabled={!unsolvedQuestionData.length} className="transparent-btn">
                                  <Link to="#">3</Link>
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    setCurrentPage(currentPage + 1)
                                  }
                                  className="transparent-btn"
                                  disabled={!unsolvedQuestionData.length}
                                >
                                  <Link to="#" aria-label="Next">
                                    <i className="feather-chevron-right" />
                                  </Link>
                                </button>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '100%', height: '110px' }} />
        </main>
    </>
  );
};

export default Unsolvedquestions;
