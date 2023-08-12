import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  getRandomQuestionQuiz,
  postRandomQuestionAnswer as postRandomQuestionAnswerApi, setReAttemptData,
} from "../redux/actions/ProfileAction";
import ExamTimer from "./ExamTimer";
import { POST_RANDOM_QUESTION_ANSWER_RESET } from "../redux/reducers/ProfileReducer";
import axios from "axios";
import { getAuthToken } from "../utils/helper";
import { toast } from "react-toastify";

const baseURL = process.env.REACT_APP_APIS_BASE_URL;


const Tutorexammcq = () => {
  useEffect(() => {
    document.title =
      "DoubtQ - Your Comprehensive Resource for Multiple Choice Question (MCQ) Exam Preparation";
  }, []);

  const timerRef = useRef();
  const dispatch = useDispatch();
  const history = useNavigate();
  const [searchParams] = useSearchParams();
  const subject = searchParams.get("subject");
  const { getRandomQuestion, postRandomQuestionAnswer } = useSelector(
    (state) => state.profile
  );
  const [subjectAttempt, setSubjectAttempt] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(getRandomQuestion?.data || []);
  const fetchSubjectData = async () => {
    try {
      const response = await axios.post(`${baseURL}/tutor/getsubjectattempt`, {
        token: getAuthToken(),
      });
      setSubjectAttempt(response.data.tut_sub.filter(sub => sub?.subject === subject));
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    if (getRandomQuestion?.data?.length) {
      setQuestions(getRandomQuestion?.data);
    }
  }, [getRandomQuestion?.data]);

  useEffect(() => {
    if (subject) {
      dispatch(getRandomQuestionQuiz({ subject }));
      fetchSubjectData()
    } else {
      history("/");
    }
  }, []);

  const onSkip = () => {
    const nextQuestionIndex = currentQuestion + 1;
    setCurrentQuestion(nextQuestionIndex);
    const nextSeconds =
      questions[nextQuestionIndex]["questionType"] === "MCQ - Final answer"
        ? 60
        : 300;
    timerRef.current.resetTimer(nextSeconds);
  };
  const onSubmitClick = () => {
    if (currentQuestion === questions.length - 1 && subject) {
      dispatch(postRandomQuestionAnswerApi({ subject, questions }));
    } else {
      if (questions) {

        const nextQuestionIndex = currentQuestion + 1;
        setCurrentQuestion(nextQuestionIndex);
        const nextSeconds =
          questions[nextQuestionIndex]["questionType"] === "MCQ - Final answer"
            ? 60
            : 300;
        timerRef.current.resetTimer(nextSeconds);
      }
    }
  };
  const onReattemptClick = (attempt) => () => {
    dispatch(setReAttemptData({ subject, attempt }));
    // attempt :subjectAttempt[0]?.isAttempt
    // history('/')
    setTimeout(() => {
      return window.location.reload()
    }, 2000);
  };

  const onOptionClick = (answer = "") => {
    let tempQuestions = [...questions];
    tempQuestions[currentQuestion]["answer"] = answer;
    setQuestions(tempQuestions);
  };

  const currentQuestionDetail = questions[currentQuestion] || {};
  const {
    mcqoptions = [],
    questionType,
    questionSubject,
    answer,
  } = currentQuestionDetail || {};
  const [optionA, optionB, optionC, optionD] = mcqoptions || [];

  const isFailedInExam = [
    "you are failed exam", "you are failed exam please attempt second time"
  ].includes(postRandomQuestionAnswer?.data?.message)
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
        <div className="dashboard pt--20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                {getRandomQuestion?.loading ? (
                  <div style={{ margin: "250px 0px" }} className="text-center">
                    <PulseLoader color="#b02deb" />
                  </div>
                ) : (
                  <div className="row g-5">
                    {questionType === "MCQ" ? (
                      <div className="col-lg-9">
                        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                          <div className="content">
                            <div style={{ userSelect: "none" }} className="row">
                              <div className="col-md-12 col-lg-12 mb--20">
                                <h5>Question</h5>
                                <div className="p--20 rbt-border radius-6 bg-primary-opacity">
                                  {`(${currentQuestion + 1})`} Question <div dangerouslySetInnerHTML={{ __html: currentQuestionDetail?.question }} />
                                  <br />
                                  {/* <br /> a) {optionA} <br /> b) {optionB} <br />
                                  c) {optionC} <br /> d) {optionD} */}
                                </div>
                              </div>
                              <div className="col-md-12 col-lg-12 mb--20">
                                <h5>Answer</h5>
                                <div className="p--20 rbt-border radius-6 bg-primary-opacity">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="rbt-form-check p--10">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="rbt-radio"
                                          id="rbt-radio-1"
                                          checked={answer === optionA}
                                          onChange={() =>
                                            onOptionClick(optionA)
                                          }
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="rbt-radio-1"
                                        >
                                          A) {optionA}
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="rbt-form-check p--10">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="rbt-radio"
                                          id="rbt-radio-2"
                                          checked={answer === optionB}
                                          onChange={() =>
                                            onOptionClick(optionB)
                                          }
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="rbt-radio-2"
                                        >
                                          B) {optionB}
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="rbt-form-check p--10">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="rbt-radio"
                                          id="rbt-radio-3"
                                          checked={answer === optionC}
                                          onChange={() =>
                                            onOptionClick(optionC)
                                          }
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="rbt-radio-3"
                                        >
                                          C) {optionC}
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="rbt-form-check p--10">
                                        <input
                                          className="form-check-input"
                                          type="radio"
                                          name="rbt-radio"
                                          id="rbt-radio-4"
                                          checked={answer === optionD}
                                          onChange={() =>
                                            onOptionClick(optionD)
                                          }
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="rbt-radio-4"
                                        >
                                          D) {optionD}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt--20 pt--20 border-top">
                              <div className="col-lg-6 col-4 text-start">
                                {!postRandomQuestionAnswer.loading && questions?.length > currentQuestion + 1 && (
                                  <div
                                    className="rbt-btn btn-border btn-sm mr--20"
                                    onClick={onSkip}
                                  // to="/mcqtest"
                                  >
                                    <span className="btn-text">Skip</span>
                                  </div>
                                )}
                              </div>
                              <div className="col-lg-6 col-8 text-end">
                                <button
                                  className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                                  disabled={postRandomQuestionAnswer.loading}
                                  onClick={onSubmitClick}
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
                    ) : (
                      <div className="col-lg-9">
                        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                          <div className="content">
                            <div style={{ userSelect: "none" }} className="row">
                              <div className="col-md-12 col-lg-12 mb--20">
                                <h5>Question</h5>
                                <div className="p--20 rbt-border radius-6 bg-primary-opacity">
                                  {/* Question <div dangerouslySetInnerHTML={{__html:currentQuestionDetail?.question}}/> */}
                                  {`(${currentQuestion + 1})`} Question <div dangerouslySetInnerHTML={{ __html: currentQuestionDetail?.question }} />
                                </div>
                              </div>
                              <div className="col-md-12 col-lg-12 mb--20">
                                <h5>Answer</h5>
                                <div className="p--20 rbt-border radius-6 bg-primary-opacity">
                                  <textarea
                                    placeholder=""
                                    id="bio"
                                    cols={20}
                                    rows={5}
                                    onChange={(e) =>
                                      onOptionClick(e.target.value)
                                    }
                                    defaultValue={""}
                                    value={answer}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mt--20 pt--20 border-top">
                              <div className="col-lg-6 col-4 text-start">
                                {!postRandomQuestionAnswer.loading && (
                                  <div
                                    className="rbt-btn btn-border btn-sm mr--20"
                                    // to="/mcqtest"
                                    onClick={onSkip}
                                  >
                                    <span className="btn-text">Skip</span>
                                  </div>
                                )}
                              </div>
                              <div className="col-lg-6 col-8 text-end">
                                <button
                                  className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                                  disabled={postRandomQuestionAnswer.loading}
                                  onClick={onSubmitClick}
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
                    )}
                    <div className="col-lg-3">
                      {/* Start Dashboard Sidebar  */}
                      <div className="sticky-top mb--30">
                        <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                          <div className="inner">
                            <div className="content-item-content">
                              <div className="rbt-default-sidebar-wrapper">
                                <h6 className="mb--0">Time left</h6>
                                <h5
                                  className="w-100 mt--10 text-center"
                                  id="time-countdown"
                                >
                                  <ExamTimer
                                    secondsTimer={300}
                                    ref={timerRef}
                                    currentQuestion={currentQuestion}
                                    questions={questions}
                                    setCurrentQuestion={setCurrentQuestion}
                                  />
                                </h5>
                                <div className="w-100 rbt-btn btn-sm btn-border-gradient text-center">
                                  In progress
                                </div>
                                <nav className="mainmenu-nav mb--20 mt--20">
                                  <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                    <li>
                                      <Link to="#">
                                        <span>Question type</span>
                                      </Link>
                                      <small className="badge color-primary">
                                        {questionType}
                                      </small>
                                    </li>
                                    <li>
                                      <Link to="#">
                                        <span>Subject</span>
                                      </Link>
                                      <small className="badge color-primary">
                                        {questionSubject}
                                      </small>
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal"
          id="thankyoupopup"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          style={{
            display: postRandomQuestionAnswer?.success ? "block" : "hidden",
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
                  onClick={() => dispatch({ type: POST_RANDOM_QUESTION_ANSWER_RESET })}
                />
              </div>
              <div className="modal-body">
                <div className="text-center">
                  {
                    isFailedInExam ? (
                      <i className="h1 feather-x-circle text-danger" />
                    ) : (
                      <i className="h1 feather-check-circle text-success" />
                    )}{" "}
                  <h4 className="mt--20 mb--20">
                    {isFailedInExam
                      ? "Oops"
                      : "Congratulations"}{" "}
                  </h4>
                  <h6 className="mb--20">
                    {"you are failed exam" === postRandomQuestionAnswer?.data?.message ?
                      <span>
                        You have failed this subject test.
                        <br />
                        You are not eligible for this subject!
                        <br />

                        <br />
                        Please proceed further!{" "}
                      </span>
                      : isFailedInExam ? (
                        <span>
                          You are failed exam
                          <br />
                          Please attempt second time!{" "}
                        </span>
                      ) : (
                        <span>
                          You have passed this subject test
                          <br />
                          Please proceed further!{" "}
                        </span>
                      )}
                  </h6>
                  <div className="d-flex justify-content-center">
                    {"you are failed exam" === postRandomQuestionAnswer?.data?.message ||!isFailedInExam ?
                      <Link
                        to="/mcqtest"
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
                      </Link>
                      : <>
                        <button
                          className="rbt-btn btn-gradient hover-icon-reverse btn-sm mr--10"
                          onClick={onReattemptClick(1)}
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">ReAttempt</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                          </span>
                        </button>
                        <Link
                          to="/mcqtest"
                          className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                          onClick={onReattemptClick(2)}
                        >
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">cancel</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right" />
                            </span>
                          </span>
                        </Link>
                      </>}
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

export default Tutorexammcq;
