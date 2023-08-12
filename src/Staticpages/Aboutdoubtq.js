import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../utils/utility';

const Aboutdoubtq = () => { 

    useEffect(() => {
        document.title = 'DoubtQ - About DoubtQ';
    }, []);

    return (
        <>
            <main className="rbt-main-wrapper questionAnswerjustify">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h2 className="title">About DoubtQ</h2>
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link to={isLoggedIn() ? "/staticpage" : "/"} >Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">About DoubtQ</li>
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
                                <h4 className="title">About company</h4>
                            </div>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    The purpose of the website DoubtQ is to provide students with access
                                    to high-quality, subject-specific learning materials. Course Hero,
                                    founded in 2006 by then-college student Jain Brothers - Kartik Jain
                                    and Vivek Jain, seeks to fulfill its purpose of preparing students
                                    for success when they graduate.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    DoubtQ is there for each individual student as they search for answers
                                    and tools to help them master their doubts, ace their questions, and retain
                                    what they've learned. Detailed explanations for every subject are just some of
                                    the millions of learning resources available to students who subscribe or contribute
                                    their own resources. DoubtQ has a robust community of educators from all over
                                    the world. Over 500+ teachers from the India are already a part of this group,
                                    sharing materials, collaborating on lessons, and developing innovative methods
                                    of teaching.
                                </li>
                            </ul>
                        </div>
                        <p className="description mt--10 mb-2">
                            <b> Values </b>- We foster a culture that is consistent with our mission. We bring that
                            integrity to our products, customers, work environment, and the community.
                        </p>
                        <p className="description mt--10 mb-2">
                            <b> People </b>-We bring our vision to life by investing in our people. We come together
                            virtually and in our offices around the world to collaborate, innovate, and have fun.
                        </p>
                        <p className="description mt--10 mb-2">
                            <b> History </b>-We started our journey as an education technology company focused on affordability
                            and accessibility. Now, we help students in every step of their own journey, from learning
                            to earning.
                        </p>
                        <p className="description mt--10 mb-2">
                            <b> Impact </b>- Helping students succeed extends beyond enhancing their academic experience.
                            We aim to make an impact in multiple areas of their lives and in their communities.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <h4 className="description pt--10">
                                Jobs and Careers
                            </h4>
                            <h5>Join Us</h5>
                            <ul className="plan-offer-list mt--10 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    To provide a system for bringing together anyone interested in information exchange.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    I'm always up for teaming up with innovative thinkers to accomplish something worthwhile.
                                </li>
                            </ul>
                            <h5>Why Should You Choose DoubtQ?</h5>
                            <ul className="plan-offer-list mt--10 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    You will get a once-in-a-lifetime chance to study and train directly from team
                                    leaders who have seen ideas become real goods and services.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Join the group that is always brainstorming new ways to improve the E-learning
                                    industry.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Engage in conversation with the original group of founders to get your voice
                                    heard and effect change.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    We appreciate our staff and all the hard work they put in, day and night. In
                                    order to encourage team building and camaraderie between employees, the
                                    organization often hosts social events.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    We're a fast-growing, Bootstrapped company that's just getting started. As you
                                    develop, you will have the chance to master new skills and take on leadership
                                    roles in your team.
                                </li>
                            </ul>
                            <h5>Job Openings</h5>
                            <ul className="plan-offer-list mt--10 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    We Are Currently Not Hiring!
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    But Stay Tuned For New Update!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Mission
                                </h5>
                            </div>
                            <ul className="plan-offer-list mt--10 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Our mission, as the industry's leading student-first connected learning
                                    platform, is to assist each and every student in achieving their full
                                    potential, both in the classroom and beyond.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Vision
                                </h5>
                            </div>
                            <ul className="plan-offer-list mt--10 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    OBy assisting students in acquiring more knowledge in a shorter amount
                                    of time and at a cheaper cost, we work toward maximizing the return on
                                    investment (ROI) that education provides.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='auto-height' style={{ width: '100%', height: '110px' }}></div>
                {/* <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap py-4 mb--30">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
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
                            </div>
                        </div>
                    </div>
                </div> */}
            </main >

        </>
    )

}

export default Aboutdoubtq;