import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import INR from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { getWalletDetails } from "../../redux/actions/ProfileAction";
import PulseLoader from "react-spinners/PulseLoader";
import { isLoggedIn } from "../../utils/utility";

const Totalamount = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Understanding and Managing Your Finances';
  }, []);

  const dispatch = useDispatch();
  const { walletDetail } = useSelector((state) => state.profile);

  //btn-active
  useEffect(() => {
    var selector = ".add-money";
    INR(selector).on("click", function () {
      INR(selector).removeClass("active");
      INR(this).addClass("active");
    });
  });

  useEffect(() => {
    if (isLoggedIn()) {
      dispatch(getWalletDetails());
    }
  }, []);

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
                      <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                        <div className="inner">
                          <div className="content-item-content">
                            <div className="rbt-default-sidebar-wrapper">
                              <div className="section-title mb--20">
                                <h6 className="rbt-title-style-2">
                                  <img
                                    src="assets/images/icons/wallet.svg"
                                    alt=""
                                  />
                                  Wallet
                                </h6>
                              </div>
                              <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link to="/wallet" className="active">
                                      <i className="feather-arrow-right" />
                                      <span>Total amount</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/transactionhistory">
                                      <i className="feather-arrow-right" />
                                      <span>Transaction history</span>
                                    </Link>
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
                  <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                      <div className="content">
                        <div className="row g-5">
                          <div className="col-lg-6">
                            <div className="section-title mb--30">
                              <h6 className="mb--0">Total amount</h6>
                              <h4 className="mb--0">
                                <b>INR {walletDetail?.data?.totalAmount || 0}</b>
                              </h4>
                            </div>
                            <div className="row border-bottom mt--10 pb--10">
                              <div className="col-lg-8 col-8">
                                <h6>Available amount</h6>
                              </div>
                              <div className="col-lg-4 col-4 text-end">
                                {walletDetail.loading ? (
                                  <PulseLoader color="#b02deb" />
                                ) : (
                                  <h6>
                                    INR {walletDetail?.data?.availableAmount || 0}
                                  </h6>
                                )}
                              </div>
                            </div>
                            <div className="row border-bottom mt--10 pb--10">
                              <div className="col-lg-8 col-8">
                                <h6>Pending amount</h6>
                              </div>
                              <div className="col-lg-4 col-4 text-end">
                                {walletDetail.loading ? (
                                  <PulseLoader color="#b02deb" />
                                ) : (
                                  <h6>INR {walletDetail?.data?.pendingAmount || 0}</h6>
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
            </div>
          </div>
        </div>
        <div style={{ width: '100%', height: '200px' }} />
      </main>
    </>
  );
};

export default Totalamount;
