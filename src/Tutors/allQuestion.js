import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  getExpertQuestion,
  getQuestionUnsolved,
  resetQuestionBlock,
  getQuestionList,
  getStatesList,
} from "../redux/actions/QuestionAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import PulseLoader from "react-spinners/PulseLoader";


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="Answer">
      {isReadMore ? text.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{ color: "blue" }}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const AllQuestion = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Comprehensive Collection of Diverse Questions';
  }, []);

  const dispatch = useDispatch();
  const history = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    question,
    questionUnsolved: questionAssignedReducer,
    expertQuestion,
  } = useSelector((state) => state.question);
  const { statesList } = useSelector((state) => state.question);
  const questionTypeData = useSelector((state) => state.question.questionType);
  const questionTypeArray = questionTypeData?.data?.data || [];

  const statesListData = statesList?.data || {};
  const questionAssignedData = questionAssignedReducer?.data;

  const getQuestionListApi = () => {
    const currentPageSkip = (currentPage - 1) * 5;
    const params = `?limit=5&skip=${currentPageSkip}`;
    dispatch(getQuestionList(params));
  };

  useEffect(() => {
    getQuestionListApi();
  }, [currentPage]);

  useEffect(() => {
    if (expertQuestion.success) {
      const { data } = expertQuestion;
      dispatch(resetQuestionBlock({ blockType: "postUnsolvedQuestionAns" }));
      dispatch(resetQuestionBlock({ blockType: "postExpertQuestionAns" }));
      history(`/studentquestion?id=${data?.question?._id}`);
    }
  }, [expertQuestion.success]);

  useEffect(() => {
    if (
      questionAssignedData?.message === "Question Assigned To Someone Else."
    ) {
    } else if (questionAssignedData?.questionId) {
      history(`/questiondescription?id=${questionAssignedData?.questionId}`);
      dispatch(resetQuestionBlock("questionUnsolved"));
    }
  }, [questionAssignedData]);

  const onAnswerClick = (questionId, internalStatus) => {
    dispatch(getExpertQuestion({ questionId, internalStatus: internalStatus }));
  };

  useEffect(() => {
    dispatch(getStatesList());
  }, []);
const navigate =useNavigate();



  const assignedQuestionData = question?.data || [];
  const assignedQuestionLoading = question?.loading;
   const toComponentB = (q) => {
    console.log(q);
    navigate("/myquestionanswer", { state: { q} });
  };

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
        <div className="dashboard pt--20 pb--20">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="mt--20 mb--20">
                  <Link
                    to="/expertmainpage"
                    className="rbt-btn btn-border text-center w-70 btn-sm"
                  >
                    <span className="btn-text">
                      <i className="feather-arrow-left" /> Back to Home
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                <div className="row g-5">

                  <div className="col-lg-12">
                    {/* <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20"> */}
                      <div className="content">
                        <div className="section-title">
                          <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--30">
                            <div className="content">
                              <div className="row">
                                <div className="col-lg-8">
                                  <div className="section-title">
                                    <h4 className="mb--10">All Question</h4>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="filter-select rbt-modern-select mb--10">
                                    <label>Question type :</label>
                                    <div className="dropdown react-bootstrap-select w-100">
                                      <Form.Select
                                        id="displayname"
                                        className="w-100"
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
                                      <th>Answer</th>
                                    </tr>
                                  </thead>
                                  {assignedQuestionLoading && (
                                    <td
                                      colSpan={3}
                                      className="loader"
                                      align="center"
                                    >
                                      <PulseLoader color="#b02deb" />
                                    </td>
                                  )}
                                  {!assignedQuestionLoading && (
                                    <tbody>
                                       {assignedQuestionData.length === 0 ? (
                                    <tr>
                                      <td colSpan={3} className="fw-3 fw-bolder text-center">
                                        No questions found
                                      </td>
                                    </tr>
                                  ) : (assignedQuestionData.map((q, i) => (
                                     <tr key={i}>
                                           <td >
                                        <span className="rbt-badge-5 bg-primary-opacity mb--5">
                                          {q.questionType}
                                        </span>
                                        <h6 className="mb--0">
                                          {q.question.length === 50
          ? q.question.slice(0, 50) + "..."
          : q.question}
                                          
                                        </h6><small>{q.questionSubject}</small>
                                      </td>
                                          <td>
                                            <h6 className="color-primary">
                                              INR {q.tutorPrice}
                                            </h6>
                                          </td>
                                          <td onClick={() => {toComponentB(q)}}>
                                             <span>
                                           <ReadMore>{q.answer}</ReadMore>
                                              </span>
                                            {/* </button> */}
                                          </td>
                                        </tr>)
                                      ))}
                                    </tbody>
                                  )}
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
                                    <li
                                      className={currentPage === 1 && "active"}
                                    >
                                      <button
                                        onClick={() => setCurrentPage(1)}
                                        className="transparent-btn"
                                      >
                                        <Link to="#">1</Link>
                                      </button>
                                    </li>
                                    <li
                                      className={currentPage === 2 && "active"}
                                    >
                                      <button
                                        onClick={() => setCurrentPage(2)}
                                        className="transparent-btn"
                                        disabled={!assignedQuestionData.length}
                                      >
                                        <Link to="#">2</Link>
                                      </button>
                                    </li>
                                    <li

                                      className={currentPage === 3 && "active"}
                                    >
                                      <button onClick={() => setCurrentPage(3)} disabled={!assignedQuestionData.length} className="transparent-btn">
                                        <Link to="#">3</Link>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        onClick={() =>
                                          setCurrentPage(currentPage + 1)
                                        }
                                        className="transparent-btn"
                                        disabled={!assignedQuestionData.length}
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
                      {/* <div className="mt--50">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="section-title">
                              <h4 className="mb--20">
                                Frequently asked questions
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="rbt-accordion-style rbt-accordion-04 accordion">
                          <div className="accordion" id="accordionExamplec3">
                            <div className="accordion-item card">
                              <h2
                                className="accordion-header card-header"
                                id="headingThree1"
                              >
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree1"
                                  aria-expanded="true"
                                  aria-controls="collapseThree1"
                                >
                                  Can I change my Q&amp;A subject preference?
                                </button>
                              </h2>
                              <div
                                id="collapseThree1"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingThree1"
                                data-bs-parent="#accordionExamplec3"
                              >
                                <div className="accordion-body card-body">
                                  You can run Histudy easily. Any School,
                                  University, College can be use this histudy
                                  education template for their educational
                                  purpose. A university can be run their online
                                  leaning management system by histudy education
                                  template.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item card">
                              <h2
                                className="accordion-header card-header"
                                id="headingThree2"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree2"
                                  aria-expanded="false"
                                  aria-controls="collapseThree2"
                                >
                                  Who evaluates my answers? whwn do i got a
                                  feedback report?
                                </button>
                              </h2>
                              <div
                                id="collapseThree2"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree2"
                                data-bs-parent="#accordionExamplec3"
                              >
                                <div className="accordion-body card-body">
                                  After purchasing the product need you any
                                  support you can be share with us with sending
                                  mail to rainbowit10@gmail.com.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item card">
                              <h2
                                className="accordion-header card-header"
                                id="headingThree3"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree3"
                                  aria-expanded="false"
                                  aria-controls="collapseThree3"
                                >
                                  When will I get paid for my answers?
                                </button>
                              </h2>
                              <div
                                id="collapseThree3"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree3"
                                data-bs-parent="#accordionExamplec3"
                              >
                                <div className="accordion-body card-body">
                                  Yes, We will get update the Histudy. And you
                                  can get it any time. Next time we will comes
                                  with more feature. You can be get update for
                                  unlimited times. Our dedicated team works for
                                  update.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item card">
                              <h2
                                className="accordion-header card-header"
                                id="headingThree4"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree4"
                                  aria-expanded="false"
                                  aria-controls="collapseThree4"
                                >
                                  How many questions can i skip?
                                </button>
                              </h2>
                              <div
                                id="collapseThree4"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree4"
                                data-bs-parent="#accordionExamplec3"
                              >
                                <div className="accordion-body card-body">
                                  If you're looking for random paragraphs,
                                  you've come to the right place. When a random
                                  word or a random sentence isn't quite enough,
                                  the next logical step is to find a random
                                  paragraph.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    {/* </div> */}
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

export default AllQuestion;
