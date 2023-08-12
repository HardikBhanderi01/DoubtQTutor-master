import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Row } from "react-bootstrap";
import Tesseract from "tesseract.js";
import MatchTheFollowingAnswer from "./Matchfollowingquestion"
import FillInBlanksAnswer from "./Fillinblanks";
import TrueFalseAnswer from "./Turefalsequestion"
import MCQAnswer from "./Answer/MCQAnswer";




const Myquestionanswer = () => {
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
 
  const handleImageClick = (url) => {
    setShow(true);
    setImageSrc(url);
  };

  const [recognizedText, setRecognizedText] = useState("");

  const performOCR = (base64Image) => {
    Tesseract.recognize(base64Image, "eng", { logger: (m) => m })
      .then(({ data: { text } }) => {
        setRecognizedText(text);
      })
  };

  function handleOCR(data) {
    performOCR(data);
  }
   const location = useLocation();  

  const questionType =location.state.q.questionType;
  const answer =location.state.q.answer;
  const Question = location.state.q.question;
  const questionPhoto = location.state.q.questionPhoto;
  const explanation = location.state.q.explanation;
  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Hello,</span>
              {/* {referTofrnd.user && referTofrnd.user.info.name ? referTofrnd.user && referTofrnd.user.info.name : "User"} */}
            </h5>
          </div>
        </div>
        <div className="dashboard mt--20 mb--20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                <div className="row g-5">
                  <div className="col-lg-3">
                    {/* Start Dashboard Sidebar  */}
                    <div className="sticky mb--30">
                      <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                        <div className="inner">
                          <div className="content-Openitem-content">
                            <div className="rbt-default-sidebar-wrapper">
                              <div className="section-title mb--20">
                                <h6 className="rbt-title-style-2">
                                  <img
                                    src="/images/icons/writing_questions.svg"
                                    alt=""
                                  />
                                  My questions
                                </h6>
                              </div>
                              {/* <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link to="/myquestion" className="active">
                                      <i className="feather-arrow-right" />
                                      <span>All</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/myquestion">
                                      <i className="feather-arrow-right" />
                                      <span>In irogress</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/myquestion">
                                      <i className="feather-arrow-right" />
                                      <span>Open question</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/myquestion">
                                      <i className="feather-arrow-right" />
                                      <span>Close question</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/myquestion">
                                      <i className="feather-arrow-right" />
                                      <span>Issue question</span>
                                    </Link>
                                  </li>
                                </ul>
                              </nav> */}

                              <div className="mt--20">
                                <Link
                                  to="/"
                                  className="rbt-btn btn-border text-center w-100 btn-sm"
                                >
                                  <span className="btn-text">
                                    <i className="feather-arrow-left" /> Back to Home
                                  </span>
                                </Link>
                              </div>
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
                          <div className="col-md-12 col-lg-12 mb--20">
                            <h5>Question </h5>
                             
                              <div className="p--20 rbt-border radius-6 bg-primary-opacity">
                                <div className="fw-bold">
                             
                                  {Question?.split("\n")
                                      .map((line, index) => (
                                        <p key={index}>{line}</p>
                                      ))} 
                                </div>
                                <div className="my-4">
                                  {questionPhoto?.map(
                                      (value, index) => {
                                        return (
                                          <div key={index}>
                                            <img onClick={() => handleImageClick(value)} src={value} width={200} alt="img" />
                                            <br />
                                          </div>
                                        );
                                      }
                                    )} 
                                </div>
                                <Button variant="primary" onClick={() => handleOCR(questionPhoto[0])}>
                                  Perform OCR
                                </Button>

                                <Row className="mt-5">
                                  <Col xs={12} md={8} lg={12}>
                                    {recognizedText === "" ? "" : (
                                      <>
                                        <h4 className="mb-4">
                                          Recognized text:
                                        </h4>
                                        <pre className="">{recognizedText}</pre>
                                      </>
                                    )}
                                  </Col>
                                </Row>
                              </div>
                            
                          </div>

                          <div className="col-md-12 col-lg-12 mb--20 ">
                            <h5> Answer</h5>
                          
                              <div className="p--20 rbt-border radius-6 bg-primary-opacity questionAnswerjustify ">                          
                              
                                {questionType === "True False - With Explanation" ||
                                  questionType === "True False - Final answer" ? (
                                  <TrueFalseAnswer />
                                ) : questionType === "MCQ- With Explanation" ||
                                 questionType === "MCQ - Final answer" ? (
                                 <MCQAnswer />
                                ) : questionType === "Fill in the blanks - With Explanation" ||
                                 questionType === "Fill in the blanks - Final answer" ? (
                                  <FillInBlanksAnswer />
                                ) : questionType ===
                                  "Match the following - Till 5 question " ||
                                 questionType === "Match the following - Above 5 question" ? (
                                  <MatchTheFollowingAnswer />
                                ) : questionType === "Problem solving based question" ? (
                                  answer ? (
                                    answer.replace(/<\/?p>/gi, "")
                                  ) : (
                                    ""
                                  )
                                ) : (
                                 answer &&
                                  answer.split("\n").map((value, index) => {
                                    return <p key={index}>{value}</p>;
                                  })
                                )}
                              </div>
                           
                          </div> 
                          {questionType === "MCQ - With Explanation" ||
                            questionType === "True False - With Explanation" ||
                            questionType === "Fill in the blanks - With Explanation" ||
                            questionType === "Short Answer - With Explanation" ? (
                            <div className="col-md-12 col-lg-12 mb--20">
                              <h5>Explanation</h5>
                              <div className="p--20 rbt-border radius-6 bg-secondary-opacity questionAnswerjustify">
                                {explanation &&
                                 explanation
                                    .split("\n")
                                    .map((line, index) => (
                                      <p key={index}>{line}</p>
                                    ))}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                         </div>  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>        
      </main>
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

export default Myquestionanswer;
