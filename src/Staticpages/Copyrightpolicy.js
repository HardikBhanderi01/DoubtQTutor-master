import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../utils/utility';

const Copyrightpolicy = () => {

    useEffect(() => {
        document.title = 'DoubtQ - Copyright Policy';
    }, []);

    return (
        <>
            <main className="rbt-main-wrapper questionAnswerjustify">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h2 className="title">Copyright Policy</h2>
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                        <Link  to={isLoggedIn() ? "/staticpage" : "/"} >Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Copyright Policy</li>
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
                                <h4 className="title">Copyright Policy</h4>
                            </div>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    As both a business and a community, DoubtQ is committed to upholding the
                                    intellectual property rights of all content creators. By utilizing the
                                    information and tools that are provided below, owners of copyrights have
                                    the ability to manage their rights on the DoubtQ platform.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Users of DoubtQ are not allowed to upload or submit content that violates
                                    other people's intellectual property rights. To put it another way, you should
                                    only submit your own original work and not the work of others without the express
                                    authorization of the original author. Access to Tutors Is Also Included Within Our
                                    Services. When providing content to the tutor service, we kindly ask that you do
                                    so in your own words. It is an infringement of copyright to copy content from third-party
                                    sources, whether you do so directly or by paraphrasing the original text, and DoubtQ
                                    prohibits this practice.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">Example allowed content that may be shared (must be your original work)</h4>
                            </div>
                            <ul className="plan-offer-list mt--30">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Notes on Problems to Practice
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Guides to study and/or outlines
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Test prep materials
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Lab reports
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Essays
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Homework replies
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">Example of restricted material that may not be shared unless you have permission to do </h4>
                            </div>
                            <ul className="plan-offer-list mt--30">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Exams
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Test banks
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Guides to Problem Solving
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Textbooks
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Slide presentations
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Instructor materials (other than as listed above).
                                </li>
                            </ul>
                        </div>
                        <p className="description mt--10 mb-2">
                            Keep in mind that your use of DoubtQ's services is always subject to our
                            Terms of Use, which contains our Copyright Policy. These terms apply in
                            any and all circumstances. The meanings of any capitalized words that
                            appear in this Policy but are not provided with an explanation may be
                            found in the Terms of Use.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">
                                    By submitting Content (Questions, Expert Answers, etc.) to DoubtQ, you are indicating that you agree
                                    to the following terms and conditions:
                                </h4>
                            </div>
                            <ul className="plan-offer-list mt--30">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    You are the owner of the copyrights to the Content or you have the
                                    full consent of the owners of the copyrights to use and upload the
                                    Content;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Your posting of the Content will not infringe with any laws,
                                    regulations, or ethical codes, including the policy on academic
                                    integrity that is in place at your institution;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    The act of uploading the content will not result in a violation
                                    of either the Terms of Use or the Copyright Policy that DoubtQ
                                    has in place.
                                </li>
                            </ul>
                        </div>
                        <p className="description mt--10 ">
                            If we are informed that a piece of content violates copyright, DoubtQ will
                            either remove the offending material or disable access to it. Accounts belonging
                            to users who repeatedly violate our policies and guidelines will be deleted.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <h4 className="description pt--20">
                                Copyright FAQs
                            </h4>
                            <h5>What is copyright policy of DoubtQ?</h5>
                            <ul className="plan-offer-list mt--20">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    DoubtQ's policy is that they will react to valid reports of copyright
                                    infringement. If we determine that any of our advertisers, affiliates,
                                    content providers, members, or users have copied and disseminated copyrighted
                                    materials without permission, we have the right to (1) prevent access to or
                                    delete such materials and (2) terminate and cease service to repeat offenders.
                                    Keep in mind that this Copyright Dispute Policy is a part of DoubtQ's Terms of
                                    Service and applies whenever you use our services. DoubtQ's use of undefined
                                    words in this Policy is governed by the terms and conditions set out in the
                                    Terms of Service.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">
                                    What is copyright and why is it important?
                                </h4>
                            </div>
                            <ul className="plan-offer-list mt--20">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Poetry, books, movies, songs, computer software, and architecture are
                                    only some of the many forms of creative expression that are protected
                                    by copyright, as defined by the INDIAN Copyright Office. Facts, concepts,
                                    systems, and operating techniques are not shielded by copyright, but
                                    the manner in which they are conveyed could be. By law, only the creator
                                    of a work may profit from its reproduction, dissemination, adaptation,
                                    public performance, or exhibition. It guarantees that writers get all of
                                    the financial rewards from their creations.
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
                                    How does DoubtQ handle copyright issues?
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                VAIThe rights to reproduce anything belong to the original author.
                                There are, however, a few notable exceptions, and they include, but
                                are not limited to:
                            </p>
                            <ul className="plan-offer-list mt--20">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Business owners who have legal possession of their employees
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Fair Use materials
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Freely available materials
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
                                    Is this material still protected by copyright even though there is no official
                                    copyright notice on it?
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                The owners of copyright are exempt from the requirement that they affix
                                an official copyright notice to their works in order for those works to
                                continue to be protected. If you are not the author of the particular piece
                                of content that you wish to upload, you are REQUIRED to obtain written permission
                                from the owner of the copyright.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Which kind of files is prohibited on DoubtQ?
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                Users of DoubtQ are not allowed to contribute or upload any material
                                that violates the rights of others. Tests, textbooks, instructor guides,
                                test banks, lecture notes, PowerPoint presentations, and other similar
                                works are all protected by intellectual property rights and cannot be shared
                                publicly without permission. Tutoring is another service we provide. Please
                                use your own language while contributing anything to the tutor service. Infringing
                                on the copyright of others is a violation of the Terms of Service and will result in
                                a ban from DoubtQ.
                            </p>
                            <h6 className="description mt--10">
                                Submission of any Content (Questions, Expert Answers, etc.) to DoubtQ constitutes your
                                representation that:
                            </h6>
                            <ul className="plan-offer-list mt--20">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Your posting of the Content does not and will not violate any law, regulation,
                                    or ethics code, including your school's academic integrity policy.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    You’re uploading of the Content does and will not violate DoubtQ's Terms of Use,
                                    Honour Code, or this Copyright Policy.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    If DoubtQ receives a notice that certain piece of Content violates intellectual
                                    property rights; we will either delete it or make it so that users may no longer access it.
                                </li>
                            </ul>
                        </div>
                        <p className="description mt--10 mb-2">
                            If you are found to be in violation of this Policy on many occasions, we will delete your account.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Exactly why was my comment or posting deleted?
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                The copyright holder for the content you posted asked that it be taken down,
                                so the post was deleted. Reach out to the copyright owner if you have issues
                                or questions about why your post was reported. You can find their contact
                                details in the email we sent you after removing your ad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Can I republish anything you've taken down?
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                NO, in most cases, Contact the rights holder if you feel your post was removed
                                in error. DoubtQ reserves the right to suspend or terminate your account and/or
                                access to all DoubtQ sites if you continue to post infringing material or repost
                                content that has been reported to and removed by DoubtQ.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    May I quote directly from a textbook in my post?
                                </h5>
                            </div>
                            <p className="description mt--10">
                                Without the express written consent of the author or owner of the work in
                                question, you may not distribute any derivative works or any portion of
                                a work protected by author or authorship attribution. DoubtQ reserves
                                the right to remove or disable access to any post that contains content
                                that has been copyrighted, including but not limited to textbooks, eBooks,
                                test banks, solutions manuals, and teacher's editions.
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
            </main>
        </>
    )
}

export default Copyrightpolicy;