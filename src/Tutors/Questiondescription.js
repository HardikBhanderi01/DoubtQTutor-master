import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,useSearchParams} from "react-router-dom";
import { getQuestionUnsolved } from "../redux/actions/QuestionAction";

const Questiondescription = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Expert Answers to a Variety of Questions ';
  }, []);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const dispatch = useDispatch();
  const history = useNavigate();
  const [assignedAlready, setAssignedAlready] = useState({
    isOpen: false,
    message: "",
  });
  const { questionUnsolved } = useSelector((state) => state.question);
  const questionAssignedData = questionUnsolved?.data;

  const handleAnswerNowClick = () => {
    if (id) {
      dispatch(getQuestionUnsolved({ questionId: id }));
    }
  };

  const urlToRedirect = () => {
    switch (questionAssignedData.question.questionType) {
      case "MCQ - Final answer":
      case "MCQ - With Explanation":
        return `/mcqquestion?id=${id}&type=unanswered`;
      case "True False - Final answer":
      case "True False - With Explanation":
        return `/turefalsequestion?id=${id}&type=unanswered`;
      case "Fill in the blanks - Final answer":
      case "Fill in the blanks - With Explanation":
        return `/fillinblanks?id=${id}&type=unanswered`;
      case "Short Answer - Final answer":
      case "Short Answer - With Explanation":
        return `/questionanswer?id=${id}&type=unanswered`;
      case "Match the following - Till 5 question ":
      case "Match the following - Above 5 question":
      case "Match the following - Above 5 question":
        return `/matchfollowingquestion?id=${id}&type=unanswered`;
      case "Problem solving based question":
        return `/questionanswer?id=${id}&type=unanswered`;
      case "Long Answer Question":
        return `/questionanswer?id=${id}&type=unanswered`;
      case "Writing - Essay, Etc question":
        return `/questionanswer?id=${id}&type=unanswered`;
      case "Case Study - Above 3 subtype Q":
      case "Case Study - Till 3 subtype Q":
        return `/questionanswer?id=${id}&type=unanswered`;
    }
  };

  useEffect(() => {
    if (
      questionAssignedData?.message === "Question Assigned To Someone Else."
    ) {
      setAssignedAlready({
        isOpen: true,
        message: questionAssignedData?.message,
      });
    } else if (questionAssignedData?.questionId) {
      const url = urlToRedirect();
      history(url);
    }
  }, [questionUnsolved?.success]);

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
              <i className="feather-alert-triangle pl--20 pr--10" />  Ensure you
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
                                to="/"
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
                          <div className="col-lg-12">
                            <div className="section-title mb--20">
                              <h4 className="mb--0">Question Description</h4>
                              <p>You are about to lock this question</p>
                            </div>
                            <h5>
                              By pressing the Answer Now button you acknowledge
                              that you have read and understood the following
                              terms and conditions:
                            </h5>
                            <ul className="rbt-list-style-1">
                              <li>
                                <i className="feather-check color-primary" />I
                                understand that the question is complete in all
                                respects and I have the expertise to provide a
                                quality answer to this question.
                              </li>
                              <li>
                                <i className="feather-check color-primary" />I
                                understand that plagiarized answers will be
                                rejected and my account will be terminated.
                              </li>
                              <li>
                                <i className="feather-check color-primary" />I
                                understand that my answer should ideally be
                                written in text form and i should add quality
                                images where necessary to support my answer.
                              </li>
                              <li>
                                <i className="feather-check color-primary" />I
                                understand that failure to comply with the above
                                stated terms may reult in account suspension.
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-12 text-end mt--20 pt--20 border-top">
                            <Link
                              to="/unsolvedquestions"
                              className="rbt-btn btn-border btn-sm mr--20"
                            >
                              <span className="btn-text">Cancel</span>
                            </Link>
                            <button
                              onClick={handleAnswerNowClick}
                              disabled={questionUnsolved.loading}
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
        <div
          className="modal "
          id="congratulations"
          style={{
            display: assignedAlready?.isOpen ? "block" : "hidden",
            background: "#00000059",
          }}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="congratulations"
          aria-hidden="false"
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
                  <h6 className="mb--20">{assignedAlready.message}</h6>
                  <div className="d-flex justify-content-center">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                      to="/unsolvedquestions"
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
      </main>
    </>
  );
};

export default Questiondescription;
