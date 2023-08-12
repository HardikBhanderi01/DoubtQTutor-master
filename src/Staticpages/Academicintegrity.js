import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../utils/utility';

const Academicintegrity = () => {

    useEffect(() => {
        document.title = 'DoubtQ - Academic Integrity';
    }, []);

    return (
        <> 
            <main className="rbt-main-wrapper questionAnswerjustify">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h2 className="title">Academic Integrity</h2>
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link  to={isLoggedIn() ? "/staticpage" : "/"} >Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Academic Integrity</li>
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
                                <h4 className="title">Academic Integrity</h4>
                            </div>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Students have access to an incredible amount of knowledge in today's
                                    environment, thanks to collaborative school projects and internet
                                    research. This is particularly true when you are utilizing a resource
                                    such as DoubtQ, which is an online learning platform where you can access
                                    over 100 million study materials that are unique to a certain course and
                                    that have been offered by a community of students and instructors.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    To get started, you need to make sure you have a firm grasp of the concept of
                                    academic honesty. As a student, you are in general accountable for completing
                                    your own work, and that work should be unique to you as an individual. It is
                                    important to provide an accurate citation whenever you make reference to the
                                    pioneering work of another person. When it comes to your academic career, your
                                    school, your teachers, and your classmates all put their faith in you to be
                                    truthful and genuine.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    To be more explicit, you are required to abide with the academic integrity policy
                                    of your institution. What is required of you at each individual school, college,
                                    and university is spelled clearly. You should also keep in mind that by using DoubtQ,
                                    you are agreeing to be bound by all of our rules. As you interact with other members
                                    of our community to share and gain knowledge, you should make it a point to
                                    familiarize yourself with and adhere to all of our standards. We are thrilled
                                    to have you join us today.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">Is using DoubtQ cheating ? </h4>
                            </div>
                            <ul className="plan-offer-list mt--30">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    It is not considered cheating to make use of the materials provided by
                                    DoubtQ in order to enrich your studies, improve your comprehension of
                                    a subject, or broaden the talents shown on your résumé. It is crucial and
                                    critical for future success that you take the initiative to acquire the
                                    aid you need or study new subjects.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Having said that, we are aware that some students are not use DoubtQ in the
                                    way in which it was designed to be used.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Infringement of DoubtQ's copyright, plagiarism, and other forms of unethical
                                    behaviour are not tolerated under any circumstances. Anyone who uses DoubtQ in
                                    an improper manner in order to obtain an unfair advantage, who publishes the
                                    material of another user as their own, or who breaches any law, regulation, ethical
                                    code, or school code will be permanently barred from using the platform.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    We take great satisfaction in working with students, educators, administrators,
                                    and parents to ensure that the honesty of our website is not undermined in any way,
                                    and the DoubtQ team has gone to considerable pains to construct and keep up a high-quality
                                    educational resource.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">What constitutes cheating or misuse of DoubtQ?</h4>
                            </div>
                            <p className="description mt--10 mb-2">
                                DoubtQ is intended as a supplemental study resource, and using this site in any
                                other manner violates both DoubtQ’s Terms of use and copyright policy. It is the
                                member's responsibility to understand the academic integrity requirements at their
                                institution to ensure that using online study resources does not violate their
                                institution’s honor code. Examples of misuse include but are not limited to:
                            </p>
                            <ul className="plan-offer-list mt--30">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Copying and paste or use of content taken directly from DoubtQ and submitting
                                    it as one’s own work
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Uploading any contemporaneous recordings of a class or lecture given by an instructor
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Using DoubtQ study materials or tutors to complete tests or homework assignments when
                                    instructed not to use outside help
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Using DoubtQ in any manner that violates your instructor’s or institution's academic
                                    honour code
                                </li>
                            </ul>
                        </div>
                        <p className="description mt--10 mb-2">
                            Using DoubtQ for cheating or plagiarism of any kind will not be tolerated. Anyone who misuses
                            DoubtQ to submit another member's content as their own or gain an unfair advantage during testing
                            may be permanently banned.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">
                                    DoubtQ Do -
                                </h4>
                            </div>
                            <ul className="plan-offer-list mt--30">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Enforce our honour code using technology and people
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Remind students about our Honour Code in-product.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Help verify Honour Code investigations.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Teach our devoted specialists to detect and flag Honour Code Policy-violating
                                    material.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Investigate possible Honour Code or Terms of Use infractions and respond
                                    quickly.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Honour Shield helps teachers safeguard exams.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Use keyword detection to find obvious test questions, which our Content
                                    Moderation staffs thoroughly reviews.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Remove material recognized by a valid copyright infringement notification
                                    from the copyright owner.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Limit monthly subscriber questions.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Limit account sharing between subscribers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <h4 className="description pt--20">
                                DoubtQ DO Not -
                            </h4>
                            <ul className="plan-offer-list mt--20">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Subscribing users should be able to submit multiple questions at once.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Create an environment where users can share files directly with one another.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Let people who aren't DoubtQ Experts answer questions.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Guarantees of 100% solution.
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
            </main>
        </>
    )

}

export default Academicintegrity;