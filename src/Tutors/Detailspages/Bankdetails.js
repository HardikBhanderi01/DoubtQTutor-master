import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getBankDetails, setBankDetailsReq } from "../../redux/actions/ProfileAction";
import { getAuthToken } from "../../utils/helper";

const Bankdetails = () => {
  useEffect(() => {
    document.title = "DoubtQ - Accounts and Transactions";
  }, []);

  const bankDetailReducer = useSelector((state) => state.profile.bankDetail);
  const bankInfo = useSelector(
    (state) => state.profile.bankInfo
  );
  const dispatch = useDispatch();
  const [bankDetails, setBankDetails] = useState({
    country: "india",
    accountType: "saving",
    bankName: "sbi",
  });

  const { success, loading } = bankDetailReducer;

  useEffect(() => {
    dispatch(getBankDetails())
  }, [])

  useEffect(() => {
    if (bankInfo && bankInfo?.data?.tut_info?.IFSCCode) {
      setBankDetails({
        IFSCCode
          :
          bankInfo?.data?.tut_info?.IFSCCode,
        accountNumber
          :
          bankInfo?.data?.tut_info?.accountNumber,
        accountType
          :
          bankInfo?.data?.tut_info?.accountType,
        bankName
          :
          bankInfo?.data?.tut_info?.bankName,
        country
          :
          bankInfo?.data?.tut_info?.country,
        name
          :
          bankInfo?.data?.tut_info?.name,
        panCard
          :
          bankInfo?.data?.tut_info?.panCard,
      })
    }
  }, [bankInfo])
  console.log("@@@bankDetails",bankDetails)
  const onFormChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleBankDetailSubmit = (e) => {
    e.preventDefault();
    console.log("@@@@bankDetails",bankDetails)
    dispatch(
      setBankDetailsReq({
        ...bankDetails,
        token: getAuthToken(),
      })
    );
  };

  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="blue-title">
          <div className="container">
            <h5 className="color-white pt--20 pb--20 mb--0">
              <i className="feather-user" />
              <span className="normal-text">Hello,</span> Tutor
            </h5>
          </div>
        </div>
        <div className="dashboard pt--20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <ul className="rbt-list-style-2 justify-content-center">
                  <li>
                    <i className="feather-check bg-color-primary color-white" />
                    Personal details
                  </li>
                  <li>
                    <i className="feather-check bg-color-primary color-white" />
                    Choose subjects
                  </li>
                  <li>
                    <i className="feather-check bg-color-primary color-white" />
                    MCQ test
                  </li>
                  <li>
                    <i className="feather-check bg-color-primary color-white" />
                    Professional details
                  </li>
                  <li className="active color-primary">
                    <i className="feather-check bg-color-primary color-white" />
                    Bank details
                  </li>
                </ul>
              </div>
              <div className="col-lg-12">
                {/* Start Dashboard Top  */}
                {/* End Dashboard Top  */}
                <div className="row g-5">
                  <div className="col-lg-3">
                    {/* Start Dashboard Sidebar  */}
                    <div className="sticky-top mb--30 mb_sm--0">
                      <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                        <div className="inner">
                          <div className="content-item-content">
                            <div className="rbt-default-sidebar-wrapper">
                              <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                  <li>
                                    <Link to="/personaldetails">
                                      <i className="feather-arrow-right" />
                                      <span>Personal details</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/choosesubjects">
                                      <i className="feather-arrow-right" />
                                      <span>Choose subjects </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/mcqtest">
                                      <i className="feather-arrow-right" />
                                      <span>MCQ test </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/professionaldetails">
                                      <i className="feather-arrow-right" />
                                      <span>Professional details </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="/"
                                      className="active color-primary"
                                    >
                                      <i className="feather-arrow-right" />
                                      <span>Bank details </span>
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
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="section-title mb--20">
                              <h4>Bank details</h4>
                            </div>
                            <form
                              action="#"
                              className="rbt-default-form row row--15"
                            >
                              <div className="col-lg-12">
                                <div className="filter-select rbt-modern-select mb--10">
                                  <label htmlFor="displayname" className="">
                                    Select country
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="dropdown react-bootstrap-select w-100">
                                    <Form.Select
                                      id="displayname"
                                      className="w-100"
                                      name="country"
                                      value={bankDetails?.country}
                                      onChange={onFormChange}
                                    >
                                      {/*<option value="vietnam">Vietnam</option>*/}
                                      <option value="india">India</option>
                                      {/*<option value="uk">UK</option>*/}
                                      {/*<option value="usa">USA</option>*/}
                                    </Form.Select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="rbt-form-group">
                                  <label htmlFor="firstname">
                                    Name<span className="text-danger">*</span>
                                  </label>
                                  <input
                                    id="firstname"
                                    type="text"
                                    defaultValue=""
                                    placeholder="Jone Dio"
                                    name="name"
                                    value={bankDetails?.name}
                                    onChange={onFormChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="rbt-form-group">
                                  <label htmlFor="Accountnumber">
                                    Account number
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    id="Accountnumber"
                                    type="tel"
                                    defaultValue=""
                                    placeholder="Enter your account number"
                                    name="accountNumber"
                                    value={bankDetails?.accountNumber}
                                    onChange={onFormChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="rbt-form-group">
                                  <label htmlFor="ifsccode">
                                    IFSC code
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    id="ifsccode"
                                    type="text"
                                    defaultValue=""
                                    placeholder="Enter your IFSC code"
                                    name="IFSCCode"
                                    value={bankDetails?.IFSCCode}
                                    onChange={onFormChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="filter-select rbt-modern-select mb--10">
                                  <label htmlFor="displayname" className="">
                                    Account type
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="dropdown react-bootstrap-select w-100">
                                    <Form.Select
                                      id="displayname"
                                      className="w-100"
                                      name="accountType"
                                      value={bankDetails?.accountType}
                                      onChange={onFormChange}
                                    >
                                      <option value="saving">Saving</option>
                                      <option value="current">Current</option>
                                    </Form.Select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="filter-select rbt-modern-select mb--10">
                                  <label htmlFor="displayname" className="">
                                    Bank name
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="dropdown react-bootstrap-select w-100">
                                    <Form.Select
                                      id="displayname"
                                      className="w-100"
                                      name="bankName"
                                      value={bankDetails?.bankName}
                                      onChange={onFormChange}
                                    >
                                      {/* <option value="sbi">
                                        State Bank of India
                                      </option>
                                      <option value="bob">
                                        Bank of Baroda
                                      </option>
                                      <option value="Deutsche Bank">
                                        Deutsche Bank
                                      </option>
                                      <option value="hdfc">HDFC Bank</option> */}
                                      <option value="allahabad">Allahabad Bank</option>
                                      <option value="andhra">Andhra Bank</option>
                                      <option value="axis">Axis Bank</option>
                                      <option value="bahrain_kuwait">Bank of Bahrain and Kuwait</option>
                                      <option value="bob_retail">Bank of Baroda - Retail Banking</option>
                                      <option value="boi">Bank of India</option>
                                      <option value="bom">Bank of Maharashtra</option>
                                      <option value="canara">Canara Bank</option>
                                      <option value="central">Central Bank of India</option>
                                      <option value="city_union">City Union Bank</option>
                                      <option value="corp_bank">Corporation Bank</option>
                                      <option value="deutsche">Deutsche Bank</option>
                                      <option value="dcb">Development Credit Bank</option>
                                      <option value="dhanlaxmi">Dhanlaxmi Bank</option>
                                      <option value="federal">Federal Bank</option>
                                      <option value="icici">ICICI Bank</option>
                                      <option value="idbi">IDBI Bank</option>
                                      <option value="indian">Indian Bank</option>
                                      <option value="iob">Indian Overseas Bank</option>
                                      <option value="indusind">IndusInd Bank</option>
                                      <option value="ing_vysya">ING Vysya Bank</option>
                                      <option value="jammu_kashmir">Jammu and Kashmir Bank</option>
                                      <option value="karnataka">Karnataka Bank Ltd</option>
                                      <option value="karur_vysya">Karur Vysya Bank</option>
                                      <option value="kotak">Kotak Bank</option>
                                      <option value="laxmi_vilas">Laxmi Vilas Bank</option>
                                      <option value="obc">Oriental Bank of Commerce</option>
                                      <option value="pnb_retail">Punjab National Bank - Retail Banking</option>
                                      <option value="punjab_sind">Punjab & Sind Bank</option>
                                      <option value="svb">Shamrao Vitthal Co-operative Bank</option>
                                      <option value="south_indian">South Indian Bank</option>
                                      <option value="sbbj">State Bank of Bikaner & Jaipur</option>
                                      <option value="sbh">State Bank of Hyderabad</option>
                                      <option value="sbi">State Bank of India</option>
                                      <option value="sbm">State Bank of Mysore</option>
                                      <option value="sbp">State Bank of Patiala</option>
                                      <option value="sbt">State Bank of Travancore</option>
                                      <option value="syndicate">Syndicate Bank</option>
                                      <option value="tamilnad_mercantile">Tamilnad Mercantile Bank Ltd.</option>
                                      <option value="uco">UCO Bank</option>
                                      <option value="union">Union Bank of India</option>
                                      <option value="ubi">United Bank of India</option>
                                      <option value="vijaya">Vijaya Bank</option>
                                      <option value="yes">Yes Bank Ltd</option>
                                      <option value="hdfc">HDFC Bank Ltd.</option>
                                    </Form.Select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="rbt-form-group">
                                  <label htmlFor="pancard">
                                    PAN card no.
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    id="pancard"
                                    type="text"
                                    defaultValue=""
                                    placeholder="Enter your pan card number"
                                    name="panCard"
                                    value={bankDetails?.panCard}
                                    onChange={onFormChange}
                                  />
                                </div>
                              </div>
                              <div className="col-12 mt--20">
                                <div className="rbt-form-group">
                                  <button
                                    className="btn-sm rbt-btn btn-gradient"
                                    disabled={
                                      loading ||
                                      !bankDetails?.country ||
                                      !bankDetails?.name ||
                                      !bankDetails?.accountNumber ||
                                      !bankDetails?.IFSCCode ||
                                      !bankDetails?.panCard ||
                                      !bankDetails?.bankName ||
                                      !bankDetails?.accountType
                                    }
                                    onClick={handleBankDetailSubmit}
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
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
      {/* Modal */}
      <div
        className="modal "
        id="congratulations"
        style={{
          display: success ? "block" : "hidden",
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
                <h4 className="mt--20 mb--20">Congratulations</h4>
                <h6 className="mb--20">
                  Thank you,
                  <br />
                  your profile has been completed successfully Please answer 3
                  Question in your trial period
                </h6>
                <div className="d-flex justify-content-center">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                    to="/expertmainpage"
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
    </>
  );
};

export default Bankdetails;
