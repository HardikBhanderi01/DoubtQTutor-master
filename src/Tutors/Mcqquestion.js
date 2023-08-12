import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  postExpertQuestionAnswer,
  resetQuestionBlock,
  postUnsolvedQuestionAnswer,
} from "../redux/actions/QuestionAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Col, Row, Button, Modal } from "react-bootstrap";
import Tesseract from "tesseract.js";

const Mcqquestion = () => {

  useEffect(() => {
    document.title = 'DoubtQ - An efficient online MCQ service for interactive and customizable assessments';
  }, []);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  const isUnsolved = type === "unanswered";
  const dispatch = useDispatch();
  const [time, setTime] = useState(Date.now());
  const [answer, setAnswer] = useState("");
  const [canSkip, setCanSkip] = useState(true);
  const [explanation, setExplanation] = useState("");
  const {
    questionUnsolved,
    expertQuestion,
    postUnsolvedQuestionAns,
    postExpertQuestionAns,
  } = useSelector((state) => state.question);

  useEffect(() => {
    const TEN_MINUTES_IN_MS = 10 * 60 * 1000; // 10 minutes in milliseconds
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTime(Date.now());
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= TEN_MINUTES_IN_MS) {
        // Set state to true after 10 minutes have elapsed
        setCanSkip(false);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const questionData = isUnsolved ? questionUnsolved : expertQuestion;

  const questionAssignedData = questionData.data || {};
  const { question } = questionAssignedData;

  const duration = moment.duration(
    moment(question?.que_timer_end).diff(moment())
  );

  const minutes = Math.floor(duration.asMinutes());
  const seconds = Math.floor(duration.asSeconds()) - minutes * 60;

  const handleSubmitClick = () => {
    const payload = {
      questionId: id,
      answer: answer,
      explanation: explanation,
    };
    if (isUnsolved) {
      dispatch(postUnsolvedQuestionAnswer(payload));
    } else {
      dispatch(postExpertQuestionAnswer(payload));
    }
  };

  const apiSuccess = isUnsolved
    ? postUnsolvedQuestionAns?.success
    : postExpertQuestionAns?.success;
  const apiLoading = isUnsolved
    ? postUnsolvedQuestionAns?.loading
    : postExpertQuestionAns?.loading;

  useEffect(() => {
    if (apiSuccess) {
      dispatch(
        resetQuestionBlock({
          blockType: isUnsolved ? "questionUnsolved" : "expertQuestion",
        })
      );
      dispatch(resetQuestionBlock({
        blockType: isUnsolved ? "postUnsolvedQuestionAns" : "postExpertQuestionAns",
      }))
      dispatch(resetQuestionBlock({ blockType: "startAnswering" }));
    }
  }, [apiSuccess]);

  const [recognizedText, setRecognizedText] = useState("");
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const performOCR = (base64Image) => {
    Tesseract.recognize(base64Image, "eng", { logger: (m) => m })
      .then(({ data: { text } }) => {
        setRecognizedText(text);
      })
      .catch((error) => { });
  };

  function handleOCR(data) {
    performOCR(data);
  }
  const handleImageClick = (url) => {
    setShow(true);
    setImageSrc(url);
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
        <div className="dashboard pt--20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                <div className="row g-5">
                  <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                      <div className="content">
                        <div style={{ userSelect: "none" }} className="row">
                          <div className="col-md-12 col-lg-12 mb--20">
                            <h5>Question</h5>
                            <div className="p--20 rbt-border radius-6 bg-primary-opacity">
                              Q {question?.question}
                              <br />
                              <div className="my-4">
                                {question?.questionPhoto.map(
                                  (value, index) => {
                                    return (
                                      <div key={index}>
                                        <img
                                          onClick={() =>
                                            handleImageClick(value)
                                          }
                                          src={value}
                                          width={200}
                                          alt="img"
                                        />
                                        <br />
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                              <Button
                                variant="primary"
                                onClick={() =>
                                  handleOCR(
                                    question?.questionPhoto[0]
                                  )
                                }
                              >
                                Perform OCR
                              </Button>

                              <Row className="mt-5">
                                <Col xs={12} md={8} lg={12}>
                                  {recognizedText === "" ? (
                                    ""
                                  ) : (
                                    <>
                                      <h4 className="mb-4">
                                        Recognized Text:
                                      </h4>
                                      <pre className="">{recognizedText}</pre>
                                    </>
                                  )}
                                </Col>
                              </Row>
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
                                      onChange={() => setAnswer("a")}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="rbt-radio-1"
                                    >

                                      A)
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
                                      onChange={() => setAnswer("b")}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="rbt-radio-2"
                                    >

                                      B)
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
                                      onChange={() => setAnswer("c")}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="rbt-radio-3"
                                    >

                                      C)
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
                                      onChange={() =>
                                        setAnswer("d")
                                      }
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="rbt-radio-4"
                                    >

                                      D)
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {question?.questionType.includes("exp") && (
                            <div className="col-md-12 col-lg-12 mb--20">
                              <h5>Explanation</h5>
                              <textarea
                                onChange={(e) => {
                                  setExplanation(e.target.value);
                                }}
                                className="p--20 rbt-border radius-6 bg-secondary-opacity"
                              ></textarea>
                            </div>
                          )}
                        </div>
                        <div className="row mt--20 pt--20 border-top">
                          <div className="col-lg-6 col-4 text-start">
                            <Link
                              to={isUnsolved ? "/unsolvedquestions" : "/mcqfinalanswer"}
                              className="rbt-btn btn-border btn-sm mr--20"
                            >
                              <span className="btn-text">Exit</span>
                            </Link>
                          </div>
                          <div className="col-lg-6 col-8 text-end">
                            {canSkip && (
                              <Link
                                to={
                                  isUnsolved
                                    ? `/skipquestion?id=${id}&internalStatus=${question?.internalStatus}&type=unanswered`
                                    : `/skipquestion?id=${id}&internalStatus=${question?.internalStatus}`
                                }
                                className="rbt-btn btn-sm mr--10 mr_sm--0 mb_sm--10"
                              >
                                Skip Question
                              </Link>
                            )}
                            <button
                              className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                              disabled={apiLoading || !answer}
                              onClick={handleSubmitClick}
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
                                {minutes === 0 && seconds === 0 ? (
                                  <p>skip...</p>
                                ) : (
                                  <p>
                                    {minutes}m:
                                    {seconds < 10 ? `0${seconds}` : seconds}s
                                  </p>
                                )}
                              </h5>
                              <div className="w-100 rbt-btn btn-sm btn-border-gradient text-center">
                                In progress
                              </div>
                              <nav className="mainmenu-nav mb--20 mt--20">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link to="#">
                                      <span>Question price</span>
                                    </Link>
                                    <small className="badge color-primary">
                                      ${question?.questionPrice}
                                    </small>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <span>Question type</span>
                                    </Link>
                                    <small className="badge color-primary">
                                      MCQ
                                    </small>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <span>Subject</span>
                                    </Link>
                                    <small className="badge color-primary">
                                      {question?.questionSubject}
                                    </small>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                            <div className="row align-items-center">
                              <div className="col-lg-2 col-2">
                                <img
                                  src="../assets/images/icons/time.svg"
                                  alt="DoubtQ Logo Images"
                                />
                              </div>
                              <div className="col-lg-10 col-10">
                                <small>
                                  You Have 10 Minutes to skip this question.
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Dashboard Sidebar  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Modal */}
      <div
        className="modal"
        id="thankyoupopup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        style={{
          display: apiSuccess ? "block" : "hidden",
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
                  You have completed your trial period, kindly wait for 2 -3
                  business day to verify your account
                </h6>
                <div className="d-flex justify-content-center">
                  <Link
                    to={isUnsolved ? "/unsolvedquestions" : "/mcqfinalanswer"}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image show modal */}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="text-center">

          <img src={imageSrc} alt="modal-img" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Mcqquestion;
