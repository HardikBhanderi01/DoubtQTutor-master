import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  getExpertQuestion,
  getAssignedQuestion,
  resetQuestionBlock,
  getStatesList,
  startAnswering,
  getQuestionUnsolved,
  getExpertQuestionSuccess,
} from "../redux/actions/QuestionAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer, toast } from "react-toastify";
import { pdfjs } from "react-pdf";
import axios from "axios";
import { FaSync } from "react-icons/fa";
import { BsPatchQuestionFill } from "react-icons/bs";

const url = process.env.REACT_APP_API_BASE_URL;

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Staticpage = ({ mainPage }) => {
  useEffect(() => {
    document.title = "DoubtQ - MCQAnswer";
  }, []);

  const dispatch = useDispatch();
  const history = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [questionType, setQuestionType] = useState("");
  const {
    assignedQuestion: assignedQuestionReducer,
    questionUnsolved: questionAssignedReducer,
    statesList,
    expertQuestion,
  } = useSelector((state) => state.question);
  const startAnswerState = useSelector(
    (state) => state.question.startAnswering
  );
  const questionTypeData = useSelector((state) => state.question.questionType);
  const questionTypeArray = questionTypeData?.data?.data || [];
  const statesListData = statesList?.data || {};
  const questionAssignedData = questionAssignedReducer?.data;

  const getQuestionList = () => {
    const currentPageSkip = (currentPage - 1) * 5;
    const params = `?limit=5&skip=${currentPageSkip}&questionType=${questionType}`;
    dispatch(getAssignedQuestion(params));
  };

  useEffect(() => {
    getQuestionList();
  }, [currentPage, questionType]);

  useEffect(() => {
    dispatch(startAnswering({}));
    dispatch(resetQuestionBlock({ blockType: "expertQuestion" }));
  }, []);

  useEffect(() => {
    dispatch(resetQuestionBlock({ blockType: "expertQuestion" }));
    dispatch(getStatesList());
  }, []);

  useEffect(() => {
    if (expertQuestion?.data?.screen) return;
    if (
      expertQuestion.success &&
      expertQuestion?.data?.question?.internalStatus === "AssignedWithResponse"
    ) {
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
      toast("Question Assigned To Someone Else.");
    }
  }, [questionAssignedData]);

  const onAnswerClick = (questionId, internalStatus) => {
    dispatch(getExpertQuestion({ questionId, internalStatus: internalStatus }));
    dispatch(
      resetQuestionBlock({
        blockType: "questionStatusSkip",
      })
    );
  };

  const handleStartAnsClick = () => {
    dispatch(startAnswering({}));
  };

  useEffect(() => {
    if (startAnswerState.success) {
      const startAnswerResScreen = startAnswerState?.data?.screen;
      const questionId = startAnswerState?.data?.question?._id;
      const questionQuestionType =
        startAnswerState?.data?.question?.questionType;

      if (startAnswerResScreen === 1) {
        history(`/studentquestion?id=${questionId}`);
        dispatch(getExpertQuestionSuccess(startAnswerState));
      } else {
        dispatch(getExpertQuestionSuccess(startAnswerState));

        switch (questionQuestionType) {
          case "MCQ - Final answer":
          case "MCQ - With Explanation":
            history(`/mcqquestion?id=${questionId}`);
            return;
          case "True False - Final answer":
          case "True False - With Explanation":
            history(`/turefalsequestion?id=${questionId}`);
            return;
          case "Fill in the blanks - Final answer":
          case "Fill in the blanks - With Explanation":
            history(`/fillinblanks?id=${questionId}`);
            return;
          case "Short Answer - Final answer":
          case "Short Answer - With Explanation":
            history(`/questionanswer?id=${questionId}`);
            return;
          case "Match the following - Till 5 question ":
          case "Match the following - Above 5 question":
            history(`/matchfollowingquestion?id=${questionId}`);
            return;
          case "Problem solving based question":
            history(`/questionanswer?id=${questionId}`);
            return;
          case "Long Answer Question":
            history(`/questionanswer?id=${questionId}`);
            return;
          case "Writing - Essay, Etc question":
            history(`/questionanswer?id=${questionId}`);
            return;
          case "Case Study - Above 3 subtype Q":
          case "Case Study - Till 3 subtype Q":
            history(`/questionanswer?id=${questionId}`);
            return;
        }
        history(`/questionanswer?id=${questionId}`);
      }
    }
  }, [startAnswerState]);

  const assignedQuestionData = assignedQuestionReducer.data || [];
  const assignedQuestionLoading = assignedQuestionReducer.loading;

  const [pdfUrl, setPdfUrl] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/download/answeringguideline`);
      setPdfUrl(response.data);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDownloadPDF = () => {
    const baseURL = process.env.REACT_APP_APIS_BASE_URL;
    window.open(`${baseURL}/download/answeringguideline`, "_blank");
  };

  return (
    <>
      <main className="rbt-main-wrapper mb--20">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Welcome,</span> Expert!
            </h5>
          </div>
        </div>
        <div className="dashboard mt--20 mb--20">
          <div className="container">
            {/* <div className="alert alert-danger mb--20" role="alert">
              <i className="feather-alert-triangle pl--20 pr--10" /> Ensure you
              follow the Q&amp;A answering guidelines to maintain a CF score of
              80% or more. for any help, please visit our support page.
            </div> */}
            <div className="row">
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                <div className="row g-5">
                  
                  <div className="col-lg-12">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                      <div className="content">
                        <div className="section-title">
                          {mainPage && (
                            <div>
                                <>
                                  <div className="sticky-top top-ref">
                                    <button
                                      className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                                      style={{
                                        float: "right",
                                        padding: "0px 30px 0px 30px",
                                      }}
                                      data-bs-toggle="modal"
                                      data-bs-target="#refresh-popup"
                                      onClick={handleStartAnsClick}
                                    >
                                      <FaSync />
                                    </button>
                                  </div>
                                  <h6>
                                    Thanks for your efforts on DoubtQ Q&amp;A!
                                    Unfortunately, there are no questions
                                    available in your queue for the moment.
                                  </h6>
                                  <hr />
                                  <h5>Why aren't there any Questions?</h5>
                                  <hr />
                                  <p>
                                    The availability and popularity of our
                                    inquiries is probably to blame. Two possible
                                    outcomes are:
                                  </p>
                                  <p>
                                    (1) You have ignored every single inquiry
                                    that could have been asked.
                                  </p>
                                  <p>
                                    If you skip a question, you will never see
                                    it again. You will see this message until a
                                    new question has been asked if you have
                                    skipped all of the questions. Avoid
                                    carelessly skipping questions!
                                  </p>
                                  <p>
                                    Additional Experts are currently answering
                                    every question that has been posted.
                                  </p>
                                  <p>
                                    <ul>
                                      <li>
                                        Other Experts are currently online
                                        assisting students with questions just
                                        like the one you were answering/deciding
                                        on a few seconds ago!
                                      </li>
                                    </ul>
                                  </p>
                                  <hr />
                                  <h5>What can I do now?</h5>
                                  <ul>
                                    <p>
                                      1. Refresh the page after a couple of
                                      minutes to see the newly available
                                      questions.
                                    </p>
                                    <p>
                                      2. Log out from your DoubtQ account and
                                      log back in after a couple of minutes.
                                    </p>
                                    <p>
                                      3. Clear your browser cache and refresh
                                      the page after a couple of minutes.
                                    </p>
                                  </ul>
                                </>
                            </div>
                          )}
                          {!mainPage && (
                            <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--30">
                              <div className="content">
                                <div className="row">
                                  <div className="col-lg-8">
                                    <div className="section-title">
                                      {/* <h4 className="mb--10">Unsolved Questions</h4> */}
                                      <h4 className="mb--10">
                                        Expert! Q&amp;A
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="filter-select rbt-modern-select mb--10">
                                      <label>Question Type :</label>
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
                                            <option value={q._id}>
                                              {q.questionType}
                                            </option>
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
                                            <td
                                              colSpan={3}
                                              className="fw-3 fw-bolder text-center"
                                            >
                                              No questions found
                                            </td>
                                          </tr>
                                        ) : (
                                          assignedQuestionData.map(
                                            (q, index) => (
                                              <tr key={index}>
                                                <td>
                                                  <span className="rbt-badge-5 bg-primary-opacity mb--5">
                                                    {q.questionType}
                                                  </span>
                                                  <h6 className="mb--0">
                                                    {q.question}
                                                  </h6>
                                                  <small>
                                                    {q.que_timer_end
                                                      ? moment(
                                                          q.que_timer_end
                                                        ).fromNow()
                                                      : ""}
                                                  </small>
                                                </td>
                                                <td>
                                                  <h6 className="color-primary">
                                                    INR {q.tutorPrice}
                                                  </h6>
                                                </td>
                                                <td>
                                                  <button
                                                    disabled={
                                                      expertQuestion.loading
                                                    }
                                                    onClick={() =>
                                                      onAnswerClick(
                                                        q.questionId,
                                                        q.internalStatus
                                                      )
                                                    }
                                                    className="rbt-btn btn-border-gradient btn-sm"
                                                  >
                                                    <span className="btn-text">
                                                      Answer Now
                                                    </span>
                                                  </button>
                                                </td>
                                              </tr>
                                            )
                                          )
                                        )}
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
                                        className={
                                          currentPage === 1 && "active"
                                        }
                                      >
                                        <button
                                          onClick={() => setCurrentPage(1)}
                                          className="transparent-btn"
                                        >
                                          <Link to="#">1</Link>
                                        </button>
                                      </li>
                                      <li
                                        className={
                                          currentPage === 2 && "active"
                                        }
                                      >
                                        <button
                                          onClick={() => setCurrentPage(2)}
                                          className="transparent-btn"
                                          disabled={
                                            !assignedQuestionData.length
                                          }
                                        >
                                          <Link to="#">2</Link>
                                        </button>
                                      </li>
                                      <li
                                        className={
                                          currentPage === 3 && "active"
                                        }
                                      >
                                        <button
                                          onClick={() => setCurrentPage(3)}
                                          disabled={
                                            !assignedQuestionData.length
                                          }
                                          className="transparent-btn"
                                        >
                                          <Link to="#">3</Link>
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          onClick={() =>
                                            setCurrentPage(currentPage + 1)
                                          }
                                          className="transparent-btn"
                                          disabled={
                                            !assignedQuestionData.length
                                          }
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
                          )}
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
      {/* <ToastContainer /> */}
      <div
        className="modal fade show"
        // style={{
        //   display: referralcomplete.isAuthenticated
        //     ? "block modal-open-bg"
        //     : "hidden",
        //   background: "#00000059",
        // }}
        id="refreshpopup"
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
                  you got <span className="theme-gradient">$ 10</span> now you
                  can withdraw it from redeemable section
                </h6>
                <div className="d-flex justify-content-center">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                    to="/"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text" data-bs-dismiss="modal">
                        OK
                      </span>
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

      {/* modal become a tutor */}

      <div
        className="modal fade"
        id="refresh-popup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="re-answerpopup"
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
                <BsPatchQuestionFill className="h1 feather-x-circle text-dark" />
                <h4 className="mt--20 mb--20"></h4>

                <h6 className="mb--20">
                  For the latest updates, Refresh for new questions
                </h6>
                <h4 className="mt--20 mb--20"></h4>
                <div className="d-flex justify-content-center">
                  <button
                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text" data-bs-dismiss="modal">
                        OK
                      </span>
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
    </>
  );
};

export default Staticpage;


