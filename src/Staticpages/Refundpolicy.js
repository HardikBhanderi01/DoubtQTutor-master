import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/utility";

const Refundpolicy = () => {
  useEffect(() => {
    document.title = "DoubtQ - Refund Policy";
  }, []);

  return (
    <>
      <main className="rbt-main-wrapper questionAnswerjustify">
        <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
          <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb-inner text-center">
                    <h2 className="title">Refund Policy</h2>
                    <ul className="page-list">
                      <li className="rbt-breadcrumb-item">
                        <Link to={isLoggedIn() ? "/staticpage" : "/"}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <div className="icon-right">
                          <i className="feather-chevron-right" />
                        </div>
                      </li>
                      <li className="rbt-breadcrumb-item active">
                        Refund Policy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-12">
                <div className="section-title text-start mt--30">
                  <h4 className="description mt--10">Refund Policy</h4>
                </div>
                <ul className="plan-offer-list mt--30 mb-2">
                  <li>
                    <h5>Refund Policy for Doubtq Education Services</h5>
                    <br />
                    <h6> Effective Date:11/05/2023 </h6>
                    <br />
                    At Doubtq, we strive to provide our users with the best
                    possible educational experience. We understand that
                    occasionally circumstances may arise where a refund is
                    necessary. Therefore, we have established the following
                    refund policy for our education services, applicable to all
                    our courses and programs:
                  </li>
                </ul>

                <div className="section-title text-start mt--30">
                  <h4 className="description mt--10">1. Refund Eligibility:</h4>
                </div>
                <ul className="plan-offer-list mt--30 mb-2">
                  <li className="d-flex">
                    <h6>1.1.</h6>
                    <span className="mx-3">
                      The refund policy is applicable within 1 hour of the
                      initial purchase or enrollment in any of our courses or
                      programs.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>1.2.</h6>
                    <span className="mx-3">
                      Refund requests received after the 1-hour period will not
                      be considered eligible for a refund.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>1.3.</h6>
                    <span className="mx-3">
                      This policy applies to all payment methods used, including
                      credit/debit cards, online payment gateways, or any other
                      authorized payment channels.
                    </span>
                  </li>
                </ul>

                <div className="section-title text-start mt--30">
                  <h4 className="description mt--10">2. Refund Process: </h4>
                </div>
                <ul className="plan-offer-list mt--30 mb-2">
                  <li className="d-flex">
                    <h6>2.1.</h6>
                    <span className="mx-3">
                      To request a refund, you must contact Doubtq's customer
                      support team within the specified 1-hour timeframe.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>2.2.</h6>
                    <span className="mx-3">
                      You can reach our customer support team by email at
                      doubtq27@gmail.com or by phone at +91 9374744365.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>2.3.</h6>
                    <span className="mx-3">
                      When contacting our customer support team, please provide
                      your purchase details and a clear explanation of the
                      reason for your refund request.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>2.4.</h6>
                    <span className="mx-3">
                      Our customer support team will review your request and
                      assess its eligibility for a refund within a reasonable
                      timeframe.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>2.5.</h6>
                    <span className="mx-3">
                      If your refund request is approved, the refund will be
                      issued using the same payment method used for the initial
                      purchase.
                    </span>
                  </li>
                </ul>

                <div className="section-title text-start mt--30">
                  <h4 className="description mt--10">
                    3. Non-Refundable Situations:
                  </h4>
                </div>
                <ul className="plan-offer-list mt--30 mb-2">
                  <li className="d-flex">
                    <h6>3.1.</h6>
                    <span className="mx-3">
                      Refunds will not be granted in cases where a significant
                      portion of the course or program has been accessed or
                      completed.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>3.2.</h6>
                    <span className="mx-3">
                      Refunds will not be provided if the refund request is made
                      after the 1-hour timeframe specified in this policy.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>3.3.</h6>
                    <span className="mx-3">
                      Refunds will not be granted if there is a violation of
                      Doubtq's terms of service or any other applicable
                      policies.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>3.4.</h6>
                    <span className="mx-3">
                      In situations where Doubtq determines that a refund is not
                      applicable, we may offer alternative resolutions, such as
                      extending access to the course or program or providing
                      additional support.
                    </span>
                  </li>
                </ul>

                <div className="section-title text-start mt--30">
                  <h4 className="description mt--10">
                    4. Modification or Termination:
                  </h4>
                </div>
                <ul className="plan-offer-list mt--30 mb-2">
                  <li className="d-flex">
                    <h6>4.1.</h6>
                    <span className="mx-3">
                      . Doubtq reserves the right to modify or terminate this
                      refund policy at any time, without prior notice.
                    </span>
                  </li>
                  <li className="d-flex">
                    <h6>4.2.</h6>
                    <span className="mx-3">
                      In the event of any modifications to this policy, the
                      updated policy will be effective immediately upon posting
                      on our website.
                    </span>
                  </li>
                </ul>

                <div className="col-lg-12">
                  <p className="description mt--10 mb-2 mx-5">
                    Please note that this refund policy applies specifically to
                    Doubtq's education services and may not apply to other
                    services or products offered by Doubtq. For more details
                    about our refund policy or any other inquiries, please refer
                    to our website or contact our customer support team.
                  </p>
                  <p className="description mt--10 mb-2 mx-5">
                    By enrolling in any of our courses or programs, you
                    acknowledge that you have read, understood, and agreed to
                    this refund policy.
                  </p>
                  <p className="description mt--10 mb-2 mx-5">
                    Thank you for choosing Doubtq as your educational partner.
                    We are committed to supporting your learning journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='auto-height' style={{ width: '100%', height: '110px' }}></div>
      </main>
    </>
  );
};

export default Refundpolicy;
