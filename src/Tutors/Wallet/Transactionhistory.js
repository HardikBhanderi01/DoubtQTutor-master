import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getWalletDetails } from "../../redux/actions/ProfileAction";
import PulseLoader from "react-spinners/PulseLoader";
import moment from "moment";
import { isLoggedIn } from "../../utils/utility";
import { getPageNumbers } from "../../utils/helper";

const Transactionhistory = () => {

  useEffect(() => {
    document.title = 'DoubtQ - Transaction History';
  }, []);

  const dispatch = useDispatch();
  const { walletDetail } = useSelector((state) => state.profile);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (isLoggedIn()) {
      dispatch(getWalletDetails());
    }
  }, []);

  const getStatusLabel = (status) => {
    switch (status) {
      case "Success":
        return (
          <span className="rbt-badge-5 bg-color-success-opacity color-success">
            Success
          </span>
        );
      case "Pending":
        return <span className="rbt-badge-5 bg-primary-opacity">Pending</span>;
      case "Processing":
        return (
          <span className="rbt-badge-5 bg-primary-opacity">Processing</span>
        );
      case "On Hold":
        return (
          <span className="rbt-badge-5 bg-color-warning-opacity color-warning">
            On Hold
          </span>
        );
      case "Canceled":
        return (
          <span className="rbt-badge-5 bg-color-danger-opacity color-danger">
            Canceled
          </span>
        );
    }
  };

  const onDateChange = (e) => {
    setSelectedDate(e.target.value)
  }

  function handlePageChange(direction) {
    if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const walletHistory = walletDetail?.data?.walletHistory || [];
  const totalPages = Math.ceil(walletHistory.length / 10);
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const itemsPerPage = 10; // for example
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsForCurrentPageWalletHistory = walletHistory.slice(startIndex, endIndex);

  const getFiltertedItemsForCurrentPageWalletHistory = () => {
    if (!selectedDate) return [...itemsForCurrentPageWalletHistory]
    const filteredDate = itemsForCurrentPageWalletHistory.filter((a) => moment(a.date?.split("T")[0]).isSame(moment(selectedDate)));
    return [...filteredDate]
  }
  const tableData = [...getFiltertedItemsForCurrentPageWalletHistory()];
  return (
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
                                  alt="img"
                                />
                                Wallet
                              </h6>
                            </div>
                            <nav className="mainmenu-nav">
                              <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                <li>
                                  <Link to="/wallet">
                                    <i className="feather-arrow-right" />
                                    <span>Total amount</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/transactionhistory"
                                    className="active"
                                  >
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
                            <h4 className="mb--0">INR {walletDetail?.data?.totalAmount || 0}</h4>
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
                                <h6>
                                  INR {walletDetail?.data?.pendingAmount || 0}
                                </h6>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        <h5 className="mt--30">Transaction history</h5>
                      </div>
                      <div className="col-lg-4">
                        <form className="mt--20">
                          <div className="rbt-form-group">
                            <input type="date" value={selectedDate} onChange={onDateChange} placeholder="Date" id="date" />
                          </div>
                        </form>
                      </div>
                      <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--20">
                        <table className="rbt-table table table-borderless">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Description</th>
                              <th>Date</th>
                              <th>Amount</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {walletDetail.loading && (
                              <td colSpan={5}>
                                <div className="text-center">
                                  <PulseLoader color="#b02deb" />
                                </div>
                              </td>
                            )}
                            {tableData.length === 0 ? (
                              <tr>
                                <td colSpan={12} className="fw-3 fw-bolder text-center">
                                  No history found
                                </td>
                              </tr>
                            ) : !walletDetail.loading && tableData.map((tra) => (
                              <tr>
                                <td>{tra.transactionId}</td>
                                <td>{tra.description}</td>
                                <td>
                                  {moment(tra.date).format("MMMM D, YYYY")}
                                </td>
                                <td>INR {tra.balance}</td>
                                <td>{getStatusLabel(tra.status)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="col-lg-12">
                        <nav>
                          <ul className="rbt-pagination justify-content-end">
                            <li>
                              {currentPage > 1 && (
                                <button
                                  className="transparent-btn"
                                  onClick={() => handlePageChange("previous")}
                                >
                                  <Link aria-label="Previous">
                                    <i className="feather-chevron-left" />
                                  </Link>
                                </button>
                              )}
                            </li>
                            {pageNumbers.map((pageNumber) => (
                              <li
                                className={
                                  pageNumber === currentPage && "active"
                                }
                              >
                                <button
                                  className="transparent-btn"
                                  key={pageNumber}
                                  onClick={() => setCurrentPage(pageNumber)}
                                  disabled={pageNumber === currentPage}
                                >
                                  <Link to="#">{pageNumber}</Link>
                                </button>
                              </li>
                            ))}
                            <li>
                              {currentPage < totalPages && (
                                <button
                                  className="transparent-btn"
                                  onClick={() => handlePageChange("next")}
                                >
                                  <Link to="#" aria-label="Next">
                                    <i className="feather-chevron-right" />
                                  </Link>
                                </button>
                              )}
                            </li>
                          </ul>
                        </nav>
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
  );
};

export default Transactionhistory;
