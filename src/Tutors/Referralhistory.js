import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getReferralDashboardCahsout, getReferralDashboardData } from "../redux/actions/QuestionAction";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import moment from "moment";

const Referralhistory = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Referral History';
  }, []);

  const dispatch = useDispatch();
  const history = useNavigate()
  const { referalDashboard, referalDashboardCashout } = useSelector((state) => state.question);
  const friendReferral = referalDashboard.data || [];
  const friendReferralLoading = referalDashboard.loading;

  useEffect(() => {
    dispatch(getReferralDashboardData());
  }, []);

  const onHandleAmount = () => {
    history("/referralhistory")
  }

  //popup btn
  const handleCashOut = (id) => {
    dispatch(getReferralDashboardCahsout({ userId: id }))

  };

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Hello,</span>  Expert!
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
                      {/* <div className="rbt-default-sidebar rbt-shadow-box rbt-border"/> */}
                        <div className="mt--20">
                          <Link
                            to="/expertmainpage"
                            className="rbt-btn btn-border text-center w-100 btn-sm"
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
                          <div className="row g-5">
                            <div className="col-lg-12">
                              <div className="section-title mb--10">
                                <h4 className="mb--0">Referral history</h4>
                              </div>
                            </div>
                            <div className="rbt-dashboard-table table-responsive mobile-table-750">
                              <table className="rbt-table table table-borderless">
                                <thead>
                                  <tr>
                                    <th>Sr.</th>
                                    <th>Friend’s Name</th>
                                    <th>Refer Date</th>
                                    <th>Amount</th>
                                    <th>You Got</th>
                                  </tr>
                                </thead>
                                {friendReferralLoading && (
                                  <td
                                    colSpan={5}
                                    className="loader"
                                    align="center"
                                  >
                                    <PulseLoader color="#b02deb" />
                                  </td>
                                )}
                                {!friendReferralLoading && (
                                  <tbody>
                                    {friendReferral.length === 0 ? (
                                      <tr>
                                        <td colSpan={12} className="fw-3 fw-bolder text-center">
                                          No history found.
                                        </td>
                                      </tr>
                                    ) : friendReferral.map((item, id) => {
                                      return (
                                        <tr key={id}>
                                          <th>{id + 1}</th>
                                          <td>{item.email}</td>
                                          <td>{moment(item.referdate).format("MMMM D, YYYY")}</td>
                                          <td>
                                            <h6 className="color-primary">
                                              $ {item.amount}
                                            </h6>
                                          </td>
                                          <td className="">
                                            <button
                                              className="rbt-btn btn-border-gradient btn-sm"
                                              to="#"
                                              width={100}
                                              data-bs-toggle={
                                                item.iscashout === true
                                                  ? "modal"
                                                  : ""
                                              }
                                              data-bs-target="#congratulationspopup"
                                              disabled={item.redeemed || referalDashboardCashout.loading}
                                            >
                                              <span
                                                className="btn-text"
                                                onClick={() =>
                                                  handleCashOut(item.userId)
                                                }
                                              >
                                                {item.iscashout === true
                                                  ? "  Cash Out  "
                                                  : "Cashed Out"}
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
        <div style={{ width: '100%', height: '200px' }} />
      </main>

      {/* Modal */}
      <div
        className="modal"
        style={{ display: referalDashboardCashout?.success ? "block" : "hidden", background: "#00000059" }}
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
                  <button
                    onClick={onHandleAmount}
                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Redeemable Amount</span>
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

export default Referralhistory;
