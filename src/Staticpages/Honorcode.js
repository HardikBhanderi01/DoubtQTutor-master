import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../utils/utility';

const Honorcode = () => {

    useEffect(() => {
        document.title = 'DoubtQ - Honour Code';
    }, []);

    return (
        <>
            <main className="rbt-main-wrapper questionAnswerjustify">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h2 className="title">Honour Code</h2>
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                        <Link  to={isLoggedIn() ? "/staticpage" : "/"} >Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Honour Code</li>
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
                                <h4 className="title">Honour Code &amp; Policy</h4>
                            </div>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    DoubtQ doesn't stop at making sure you get good grades; it also
                                    introduces you to new subjects, ideas, teachers, and classmates
                                    to help you grow as a learner. To help you study and learn more
                                    efficiently, we are devoted to making available a wide variety
                                    of high-quality materials, and we are just as dedicated to
                                    monitoring their use and safeguarding their ownership.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Even though we expect that the vast majority of DoubtQ members will
                                    use the site responsibly, we require that all users confirm that
                                    they have read, understood, and agreed to abide by DoubtQ's Honour
                                    Code as part of the registration process.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Our community members are expected to maintain the highest standards
                                    of honesty and decency in their academic endeavours. As a result, we
                                    reserve the right to take legal action against anybody who utilizes
                                    our platform with the intent to commit fraud or steal another user's
                                    work.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">Take a look at our guidelines for correct usage:</h4>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mt-2">
                                    <h4 className="title">DO</h4>
                                    <ul className="plan-offer-list mt--10 mb-2">
                                        <li>
                                            <i className="theme-gradient feather-arrow-right-circle" />
                                            Learn more and retain more of what you study with DoubtQ resources.
                                        </li>
                                        <li>
                                            <i className="theme-gradient feather-arrow-right-circle" />
                                            Submit high-quality, newly-created study materials to DoubtQ.
                                        </li>
                                        <li>
                                            <i className="theme-gradient feather-arrow-right-circle" />
                                            When it is necessary, consult the DoubtQ study guides and online
                                            tutors for assistance with your homework.
                                        </li>
                                        <li>
                                            <i className="theme-gradient feather-arrow-right-circle" />
                                            Make use of DoubtQ in a way that adheres to the academic integrity standards
                                            set forth by your teachers and/or the establishment at which you study.
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 mt-2">
                                    <h4 className="title">DON’T</h4>
                                    <ul className="plan-offer-list mt--10 mb-2">
                                        <li>
                                            <i className="theme-gradient feather-arrow-right-circle" />
                                            Put in your own work that is clearly copied and pasted from Course Hero answers.
                                        </li>
                                        <li>
                                            <i className="theme-gradient feather-arrow-right-circle" />
                                            Submit someone else's notes to Course Hero and pass them off as your own.
                                        </li>
                                        <li>
                                            <i className="theme-gradient feather-arrow-right-circle" />
                                            Even if you have been told explicitly not to, you can still use Course Hero's
                                            materials and tutors to get your work done.
                                        </li>
                                        <li>
                                            <i className="theme-gradient feather-arrow-right-circle" />
                                            Never use Course Hero in a way that goes against the academic integrity
                                            policies of your teachers or school.
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
                            <h4 className="description pt--10">
                                Cheating is ill-advised for several reasons:
                            </h4>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    To begin, when you steal the ideas of others, you are demonstrating
                                    that you are not interested in educating yourself on the topic at hand.
                                    Cheating will only decrease the value of the education in which you have
                                    invested so much money, which you have already spent a substantial amount
                                    of money on. In the long run, you are doing yourself a disservice by doing
                                    this.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Second, there is a good chance that you will be discovered. A significant number
                                    of educational institutions make use of cutting-edge technology to check student
                                    submissions for instances of plagiarism. Since we are an online database, the
                                    contents of DoubtQ are frequently crawled by the tools that are used to monitor
                                    the content of websites. We are even going to great lengths to ensure that they
                                    are following the rules.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Third, the repercussions are severe, and at many educational facilities, a conviction
                                    for academic dishonesty can lead to probation, suspension, or even expulsion from the
                                    program entirely.
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
                                    Our Commitment to Upholding Academic Integrity:
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                DoubtQ cares about its kids and their success in school. Since maintaining
                                academic honesty is important to us, we make every effort to do so.
                            </p>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    In other words, we want to help you teach more, not replace you. We
                                    are here to help you study whenever you need it, day or night. We
                                    provide detailed explanations and study aids so that students may
                                    get the help they need whenever and wherever it is most convenient
                                    for them.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    It is our hope that our services would be utilized only to supplement
                                    education and facilitate the comprehension of assigned readings and
                                    other study materials.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    They are not meant to be used dishonestly in any way, such as by
                                    copying answers from the internet and passing them off as one's own
                                    on a live test or exam. These activities are unfair and
                                    counterproductive to the learning process.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <p className="description mt--10 mb-2">
                                Abuse of our system or resources will not be tolerated. Abuse of our Services
                                may result in suspension or termination of your access to our site. Any action
                                we deem necessary to protect the security and safety of our platform and
                                community may be taken if we discover that our Services have been abused.
                                As part of this process, we reserve the right to delete inappropriate content
                                and/or suspend the accounts of users who are responsible for this type of
                                abuse.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    DoubtQ Honor Code
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                Using any solutions, answers, resources, or information offered on or
                                via the DoubtQ platform to cheat on an exam or a graded piece of work is
                                a serious breach of our Honour Code.
                            </p>
                            <h6>The following are some misuses:</h6>
                            <ul className="plan-offer-list mt--10 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Putting exam or graded work questions to the test using the Services.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Distributing DoubtQ provided solutions, documents, or other information
                                    without proper credit.
                                </li>
                            </ul>
                        </div>
                        <p className="description mt--10 mb-2">
                            Every breach of our Honor Code will be met with immediate repercussions. If DoubtQ
                            discovers evidence that its Services have been used in violation of its Honor Code
                            or any other part of our Terms of Use, it may, at its sole discretion, remove the
                            offending materials and/or terminate the accounts of the offending users.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    You’re Content -
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                Any content from your exams that you add to the Study Tool will always be your property.
                                DoubtQ will not assert any ownership over any content you add to the Tool. You acknowledge
                                that DoubtQ may review your Exam Content for any reason, including ensuring it complies
                                with our prohibited content requirements, and that DoubtQ is under no obligation to review
                                any content you upload to the Tool. Exam Content uploaded to the Tool at your direction is
                                not certified or approved by DoubtQ in any way.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    IF YOU FOUND ANY HONOUR CODE VIOLATIONS AT DoubtQ –
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                Feel free to contact our support team via EMAIL.
                            </p>
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

export default Honorcode;