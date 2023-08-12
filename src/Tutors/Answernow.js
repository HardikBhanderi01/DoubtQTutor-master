import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  postExpertQuestionAnswer,
  resetQuestionBlock,
  postUnsolvedQuestionAnswer,
} from "../redux/actions/QuestionAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Answernow = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Get Quick and Accurate Answers with AnswerNow - Your Ultimate Knowledge Resource';
  }, []);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  const isUnsolved = type === "unanswered";
  const dispatch = useDispatch();
  const history = useNavigate();
  const [time, setTime] = useState(Date.now());
  const [value, setValue] = useState("");
  const [explanation, setExplanation] = useState("");
  const { questionUnsolved, expertQuestion, postUnsolvedQuestionAns, postExpertQuestionAns } =
    useSelector((state) => state.question);

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
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
      answer: value,
      explanation: "",
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
      dispatch(resetQuestionBlock({ blockType: isUnsolved ? "questionUnsolved" : "expertQuestion" }));
      dispatch(resetQuestionBlock({
        blockType: isUnsolved ? "postUnsolvedQuestionAns" : "postExpertQuestionAns",
      }))
      history(isUnsolved ? `/unsolvedquestions` : "/mcqfinalanswer");
    }
  }, [apiSuccess]);

  //ReactQuill Editor

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
                                  Back to Homepage
                                </h6>
                              </div>
                              <p>Try Fresh Questions available on Dashboard </p>
                              <Link
                                to="/expertmainpage"
                                className="rbt-btn btn-sm btn-border-gradient"
                              >
                                Home page
                              </Link>
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
                          <div className="col-lg-6">
                            <p className="mb--0 text-danger">
                              No suspension if skipped within 10 min
                            </p>
                          </div>
                          <div className="col-lg-6 text-end">
                            <p className="mb--0">Give your answer within :</p>
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
                          <div style={{userSelect : "none" }} className="col-md-12 col-lg-12 pt--10 pb--10">
                            <p>{question?.question}</p>
                          </div>
                          <div className="col-md-12 col-lg-12 mb--20">
                            <h4>Explanation</h4>
                            {/* <textarea id="ckplot"> */}
                            <ReactQuill
                              modules={{
                                toolbar: {
                                  container: [
                                    [
                                      { header: [1, 2, 3, 4, 5, 6] },
                                      { font: [] },
                                    ],
                                    [{ size: [] }],
                                    [{ color: [] }, { background: [] }],
                                    [
                                      "bold",
                                      "italic",
                                      "underline",
                                      "strike",
                                      "blockquote",
                                    ],
                                    [{ align: [] }],
                                    [{ list: "ordered" }, { list: "bullet" }],
                                    ["link", "image", "video"],
                                    ["clean"],
                                    ["code-block"],
                                  ],
                                },
                              }}
                              theme="snow"
                              value={value}
                              onChange={setValue}
                              placeholder="Type here....."
                            />

                            {/* </textarea> */}
                          </div>
                          <div className="col-lg-12 text-end mt--20 pt--20 border-top">
                            <Link
                              to="/mcqfinalanswer"
                              className="rbt-btn btn-border btn-sm mr--20"
                            >
                              <span className="btn-text">Cancel</span>
                            </Link>
                            <button
                              disabled={apiLoading}
                              onClick={handleSubmitClick}
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
      </main>
    </>
  );
};

export default Answernow;
