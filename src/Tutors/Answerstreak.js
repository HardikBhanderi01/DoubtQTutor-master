import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAnswerStreak, getPostStreakCahsout } from "../redux/actions/QuestionAction";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";

const Answerstreak = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Keep the Momentum Going!';
  }, []);

  const dispatch = useDispatch();
  const answerStreakReducer = useSelector(
    (state) => state.question.answerStreak
  );
  const { postStreakCashout } = useSelector(
    (state) => state.question
  );
  const answerStreakData = answerStreakReducer.data;
  const answerStreakLoading = answerStreakReducer.loading;

  useEffect(() => {
    dispatch(getAnswerStreak());
  }, []);

  const colors = ["primary", "bar-color-2", "bar-color-3", "bar-color-4"];

  const handleCashOut = (index) => {
    dispatch(getPostStreakCahsout({srno : index}))
  };

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Hello,</span>Expert!
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
                  <div className="col-lg-3">
                    {/* Start Dashboard Sidebar  */}
                    <div className="sticky-top mb--30">
                      
                      <div className="mt--20">
                        <Link
                          className="rbt-btn btn-border text-center w-100 btn-sm"
                          to="/expertmainpage"
                        >
                          <span className="btn-text">
                            <i className="feather-arrow-left" /> Back to Home
                          </span>
                        </Link>
                      </div>
                    </div>
                    {/* End Dashboard Sidebar  */}
                  </div>
                  <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                      <div className="content">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="section-title mb--10">
                              <h4 className="mb--0">Answer streak</h4>
                            </div>
                          </div>
                          <div className="rbt-dashboard-table table-responsive mobile-table-750">
                            <table className="rbt-table table table-borderless">                             
                              {answerStreakLoading && (
                                <td
                                  colSpan={3}
                                  className="loader"
                                  align="center"
                                >
                                  <PulseLoader color="#b02deb" />
                                </td>
                              )}
                              {!answerStreakLoading && (
                                <tbody>
                                  {answerStreakData &&
                                    answerStreakData.length &&
                                    answerStreakData.map((item, i) => {
                                      const percentage =
                                        (item.filldata / item.totaldata) * 100;
                                      const isCashOutEnabled =
                                        item.filldata === item.totaldata;
                                      return (
                                        <tr key={i}>
                                          <th>
                                            <p className="b3 ">{i + 1}</p>
                                          </th>
                                          <td>
                                            <p className="b3 ">
                                              
                                              {item.filldata} / {item.totaldata}
                                            </p>
                                          </td>
                                          <td style={{ width: 400 }}>
                                            <div className="single-progress ">
                                              <h6>{item.totaldata} Post</h6>
                                              <div className="progress">
                                                <div
                                                  className={`progress-bar wow fadeInLeft ${
                                                    colors[i % colors.length]
                                                  }`}
                                                  // className="progress-bar wow fadeInLeft"
                                                  data-wow-duration="0.5s"
                                                  data-wow-delay=".3s"
                                                  // role="progressbar"
                                                  style={{
                                                    width: `${percentage}%`,
                                                    visibility: "visible",
                                                    animationDuration: "0.5s",
                                                    animationDelay: "0.3s",
                                                    animationName: "fadeInLeft",
                                                  }}
                                                  aria-valuenow={90}
                                                  aria-valuemin={0}
                                                  aria-valuemax={100}
                                                ></div>
                                                <span className="progress-number " />
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <h6 className="color-primary">
                                              INR
                                              {item.price < 10
                                                ? `0${item.price}`
                                                : item.price}
                                            </h6>
                                          </td>
                                          <td className="px-0">
                                            <button
                                              className="rbt-btn btn-border-gradient btn-sm"
                                              onClick={() => handleCashOut(item.srno)}
                                              disabled={!isCashOutEnabled || postStreakCashout.loading}
                                            >
                                              <span className="btn-text">
                                                Cash Out
                                              </span>
                                            </button>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              )}
                            </table>
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

export default Answerstreak;
