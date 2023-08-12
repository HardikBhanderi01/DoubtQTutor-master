import moment from "moment";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getExpertQuestion, resetQuestionBlock } from "../redux/actions/QuestionAction";

const Studentquestion = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Student Inquiries on Various Topics';
  }, []);

  const dispatch = useDispatch();
  const history = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  const isUnsolved = type === "unanswered";
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const { expertQuestion } = useSelector((state) => state.question);
  const { data } = expertQuestion || {};
  const { question } = data || {};
  const duration = moment.duration(
    moment(question?.que_timer_end).diff(moment())
  );

  const minutes = Math.floor(duration.asMinutes());
  const seconds = Math.floor(duration.asSeconds()) - minutes * 60;

  const answerNowLink = () => {
    
    switch (question?.questionType) {
      case "MCQ - Final answer":
      case "MCQ - With Explanation":
        return `/mcqquestion?id=${id}`;
      case "True False - Final answer":
      case "True False - With Explanation":
        return `/turefalsequestion?id=${id}`;
      case "Fill in the blanks - Final answer":
      case "Fill in the blanks - With Explanation":
        return `/fillinblanks?id=${id}`;
      case "Short Answer - Final answer":
      case "Short Answer - With Explanation":
        return `/questionanswer?id=${id}`;
        case "Match the following - Till 5 question ":
          case "Match the following - Above 5 question":
        return `/matchfollowingquestion?id=${id}`;
      case "Problem solving based question":
        return `/questionanswer?id=${id}`;
      case "Long Answer Question":
        return `/questionanswer?id=${id}`;
      case "Writing - Essay, Etc question":
        return `/questionanswer?id=${id}`;
      case "Case Study - Above 3 subtype Q":
      case "Case Study - Till 3 subtype Q":
        return `/questionanswer?id=${id}`;
    }
  };

  const linkTarget = answerNowLink();

  const onAnswerClick = () => {
    dispatch(getExpertQuestion({ questionId: id,internalStatus: question?.internalStatus }));
  };

  const onSkipPress = () =>{
    dispatch(resetQuestionBlock({ blockType: "expertQuestion" }));
    dispatch(resetQuestionBlock({ blockType: "startAnswering" }));
    history(isUnsolved ? "/unsolvedquestions" : "/mcqfinalanswer");
  }

  useEffect(() => {
    if (expertQuestion.success && expertQuestion?.data?.question?.internalStatus === "AssignedAnswer") {
      history(linkTarget);
    }
  }, [expertQuestion.success, expertQuestion.loading]);

  const showAnsPreview = [
    "MCQ - Final answer",
    "MCQ - With Explanation",
  ].includes(question?.questionType);


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
                <div className="row g-5">
                  <div className="col-lg-12">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--30">
                      <div className="content">
                        <div className="row">
                          <div className="col-lg-6">
                            <h6>
                              Select your subject :
                              <b>{question?.questionSubject}</b>
                            </h6>
                            <h6>
                              Select your question type :
                              <b>{question?.questionType}</b>
                            </h6>
                          </div>
                          <div className="col-lg-6 text-end">
                            <p className="mb--0">Time to decide :</p>
                            <h5 id="time-countdown">
                              {minutes === 0 && seconds === 0 ? (
                                <p>skip...</p>
                              ) : (
                                <p>
                                  {minutes}m:
                                  {seconds < 10 ? `0${seconds}` : seconds}s
                                </p>
                              )}
                            </h5>
                            <p />
                          </div>
                          <div style={{userSelect : "none" }} className="col-md-12 col-lg-12 mb--20">
                            <h4>Student question</h4>
                            <div className="p--30 rbt-border radius-6">
                              Q. {question?.question}
                              <br />
                              {showAnsPreview && (
                                <>
                                  <br /> a) MRP = VMP <br /> b) MRP &gt; VMP
                                  <br /> c) VMP &gt; MRP <br /> d) None of the
                                  above
                                </>
                              )}
                            </div>
                          </div>
                          <div className="row mt--20 pt--20 border-top">
                            <div className="col-lg-6 col-4 text-start">
                              <button
                                onClick={onSkipPress}
                                className="rbt-btn btn-border btn-sm mr--20"
                              >
                                <span className="btn-text">Exit</span>
                              </button>
                            </div>
                            <div className="col-lg-6 col-8 text-end">
                              <Link
                                to={`/skipquestion?id=${id}&internalStatus=${question?.internalStatus}`}
                                className="rbt-btn btn-sm mr--10 mr_sm--0 mb_sm--10"
                              >
                                Skip question
                              </Link>
                              <button
                                onClick={onAnswerClick}
                                disabled={expertQuestion?.loading}
                                className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">Answer Now</span>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Studentquestion;
