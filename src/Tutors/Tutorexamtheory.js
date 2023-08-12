import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Tutorexamtheory = () => {

    useEffect(() => {
        document.title = 'DoubtQ - Mastering Exam Theory: Comprehensive Tutoring and Study Resources';
    }, []);

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
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Start Dashboard Top  */}
                                {/* End Dashboard Top  */}
                                <div className="row g-5">
                                    <div className="col-lg-9">
                                        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-md-12 col-lg-12 mb--20">
                                                        <h5>Question</h5>
                                                        <div className="p--20 rbt-border radius-6 bg-primary-opacity">
                                                            Q 01. what do you mean by ‘under conditions of a perfect
                                                            competition in the product market’?
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-12 mb--20">
                                                        <h5>Answer</h5>
                                                        <div className="p--20 rbt-border radius-6 bg-primary-opacity">
                                                            <textarea
                                                                placeholder=""
                                                                id="bio"
                                                                cols={20}
                                                                rows={5}
                                                                defaultValue={"MRP = VMP"}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt--20 pt--20 border-top">
                                                    <div className="col-lg-6 col-4 text-start">
                                                        <Link className="rbt-btn btn-border btn-sm mr--20" href="#">
                                                            <span className="btn-text">Exit</span>
                                                        </Link>
                                                    </div>
                                                    <div className="col-lg-6 col-8 text-end">
                                                        <Link
                                                            className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#thankyoupopup"
                                                        >
                                                            <span className="icon-reverse-wrapper">
                                                                <span className="btn-text">Submit</span>
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
                                    <div className="col-lg-3">
                                        {/* Start Dashboard Sidebar  */}
                                        <div className="sticky-top mb--30">
                                            <div className="rbt-default-sidebar rbt-shadow-box rbt-border">
                                                <div className="inner">
                                                    <div className="content-item-content">
                                                        <div className="rbt-default-sidebar-wrapper">
                                                            <h6 className="mb--0">Time Left</h6>
                                                            <h5
                                                                className="w-100 mt--10 text-center"
                                                                id="time-countdown"
                                                            />
                                                            <div className="w-100 rbt-btn btn-sm btn-border-gradient text-center">
                                                                In Progress
                                                            </div>
                                                            <nav className="mainmenu-nav mb--20 mt--20">
                                                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">

                                                                    <li>
                                                                        <Link href="#">
                                                                            <span>Question Type</span>
                                                                        </Link>
                                                                        <small className="badge color-primary">MCQ</small>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#">
                                                                            <span>Subject</span>
                                                                        </Link>
                                                                        <small className="badge color-primary">
                                                                            Economics
                                                                        </small>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Tutorexamtheory