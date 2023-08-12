import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils/utility";



const Faq = () => {

    useEffect(() => {
        document.title = 'DoubtQ - Frequently Asked Questions (FAQ)';
    }, []);

    return (
        <>

            <main className="rbt-main-wrapper questionAnswerjustify">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h2 className="title">FAQs</h2>
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link to={isLoggedIn() ? "/staticpage" : "/"}>Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Faqs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="rbt-accordion-style accordion">
                                    <div className="section-title text-start mb--30">
                                        <h4 className="title">Purchases &amp; Refunds</h4>
                                    </div>
                                    <div className="rbt-accordion-style rbt-accordion-04 accordion">
                                        <div className="accordion" id="accordionExamplec3">
                                            <div className="accordion-item card">
                                                <h2
                                                    className="accordion-header card-header"
                                                    id="headingThree1"
                                                >
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree1"
                                                        aria-expanded="true"
                                                        aria-controls="collapseThree1"
                                                    >
                                                        What all services DOUBTQ provide?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseThree1"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree1"
                                                    data-bs-parent="#accordionExamplec3"
                                                >
                                                    <div className="accordion-body card-body">
                                                        DOUBTQ provides a variety of options for online tutoring to meet your unique
                                                        requirements by asking your academic questions and doubts. Confer with the subject
                                                        matter experts of your choosing in real time to get your questions answered.
                                                        provide assignment solving for qualified tutors and receive answers by the due
                                                        date you set.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item card">
                                                <h2
                                                    className="accordion-header card-header"
                                                    id="headingThree2"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree2"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree2"
                                                    >
                                                        Does DOUBTQ offer free trial?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseThree2"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree2"
                                                    data-bs-parent="#accordionExamplec3"
                                                >
                                                    <div className="accordion-body card-body">
                                                        DOUBTQ doesn't offer any free trial as we value the time and the efforts subjects
                                                        matter experts put into your doubts and questions to make them 100% unique. our
                                                        charges are affordable (Refer to pricing section). We also offer exciting discounts
                                                        and reward points to students to ensure they don't have to pay a high price.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item card">
                                                <h2
                                                    className="accordion-header card-header"
                                                    id="headingThree3"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree3"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree3"
                                                    >
                                                        How earliest can I get solution of uploaded questions?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseThree3"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree3"
                                                    data-bs-parent="#accordionExamplec3"
                                                >
                                                    <div className="accordion-body card-body">
                                                        We realize the significance of responding promptly. Timeliness of submissions is a major
                                                        priority for all of our experts. Because of this, we promise that all solutions will be
                                                        delivered before the date and time specified by us. Depending on the amount of work and
                                                        the availability of the tutors, we may even be able to turn around the solutions in a
                                                        matter of hours. We promise to submit all solutions as soon as possible.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item card">
                                                <h2
                                                    className="accordion-header card-header"
                                                    id="headingThree4"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree4"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree4"
                                                    >
                                                        How to contact customer care of DOUBTQ?
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseThree4"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree4"
                                                    data-bs-parent="#accordionExamplec3"
                                                >
                                                    <div className="accordion-body card-body">
                                                        At DOUBTQ, we offer round the clock customer assistance. You can also reach out to
                                                        us at info@doubtq.com or our WhatsApp Number.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-12">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus
                                    PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Faq;