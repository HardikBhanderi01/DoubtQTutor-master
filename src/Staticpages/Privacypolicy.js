import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../utils/utility';

const Privacypolicy = () => {

    useEffect(() => {
        document.title = 'DoubtQ - Privacy Policy';
    }, []);

    return (
        <>
            <main className="rbt-main-wrapper questionAnswerjustify">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h2 className="title">Privacy Policy</h2>
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                        <Link  to={isLoggedIn() ? "/staticpage" : "/"} >Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right" />
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Privacy Policy</li>
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
                                <h4 className="title">Privacy &amp; Policy</h4>
                            </div>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    If you'd like more information on protecting your personal information
                                    or filing a request for privacy beyond what's in our Privacy Policy,
                                    have a look at the links below.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    We value your right to privacy. This Privacy Policy describes the practices
                                    and policies of DoubtQ EDUCATIONAL PRIVATE LIMITED ("we," "our," or "us") with
                                    respect to the collection, use, and disclosure of Personal Information we receive
                                    about you or from you on DoubtQ.COM ("Site").
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    When you use this Site, you accept the policies outlined in this Privacy Statement.
                                    Upon clicking the "Accept" button below, you are giving your informed consent to our
                                    collection, use, and disclosure of your personal information as described in this Privacy
                                    Policy. Don't bother visiting the Site if you don't want to.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    The Terms of Service apply to and include this Privacy Policy.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">Effective date: December 3, 2022</h4>
                            </div>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Information security is a top priority for DoubtQ Group companies.
                                    Within this privacy statement, we detail the types of personal information
                                    we gather, how it will be used, and the options you have for restricting its
                                    dissemination.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Get in touch with us if you need a different version of this policy because of a disability.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    <Link to="#"> privacy@DoubtQ.com </Link>
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    All DoubtQ Companies adhere to the privacy policies outlined below.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <h4 className="description pt--10">
                                Privacy Practices Across DoubtQ Companies
                            </h4>
                            <h5>Personal Data We Collect</h5>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    In order to learn about the personal data obtained by a DoubtQ
                                    Company and the category of third parties with whom your personal
                                    data is shared, we will not collect new categories of personal data
                                    without giving you notice. Further, we will not gather extra types of
                                    personal information to uncover whatever kind of personal information
                                    a DoubtQ Company gathers.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Since we care very much about providing a positive experience for our clients,
                                    we may collect data about you or collect data from you directly. You may visit
                                    this Site and remain anonymous; but, we will still collect and retain some information
                                    about your visit. Details such as your Internet Protocol (IP) address, browser and
                                    operating system details, geographic location, access time and date, page views, and
                                    referring website addresses are all recorded. Nothing in this data can be used to
                                    specifically identify you or trace it back to you.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    We collect personally identifiable information from you or about you if you
                                    create an account on this site, conduct business on this site, fill out the
                                    contact form on this site, send personal correspondence, such as emails or
                                    letters, or if other users or third parties send us correspondence about your
                                    activities or postings on this site. For example, if you create an account,
                                    conduct business on this site, fill out the contact form on this site. Your name,
                                    address, e-mail address, telephone number, and credit card or debit card details
                                    are some of the personally identifiable information that might be collected.
                                    We keep your information for as long as it is required to settle disputes,
                                    offer customer assistance, and troubleshoot issues, as long as the law allows
                                    us to do so.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    We are aware that you are concerned about the use and dissemination of your personal
                                    information. You agree that any information we receive about you or from you may be
                                    used by us (for marketing, and we can send mail to clients directly), or shared by
                                    us with our affiliates, and other third parties, in order to help process your request;
                                    to comply with any law; to help improve our website or the products or services we
                                    offer; for research; to better understand the needs of our customers; to develop
                                    new offerings, and to alert you to new products and services of ours in which you
                                    may be interested. In order to offer you with a higher level of service, we may
                                    combine the information that you submit with information about you that is accessible
                                    to us either internally or from other sources.
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
                                    Starting a New Account
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                Although multiple-choice questions (Pratical Based's) have been proved to be
                                beneficial to students' academic performance, they have also become
                                a significant source of anxiety for pupils. As a result, more and
                                more high school and college students are turning to Pratical Based assistance
                                websites. The query, "Can I obtain my Pratical Based question assistance for
                                me?" is a common one among students, so let's examine some of the
                                motivations behind it. Or "Can I get some assistance with my Pratical Based?"
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Producing Individual Personas
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                You may be able to make a profile detailing your hobbies,
                                academic and professional background, and other aspects of your life.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Your Messages to Us
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                When you contact us for information about our Services, subscribe to our
                                newsletter or loyalty program, submit a support request, apply for a job,
                                or otherwise interact with us, we may gather personal information such as
                                your email address, phone number, or postal address.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Interactions with Others through Our Platforms
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                Some of the Services may have a video chat or text chat function that allows
                                users to have one-on-one conversations with other users in the community,
                                facilitating communication and collaboration among them. The contents of
                                any such user-to-user conversations may be recorded and stored by our
                                systems.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Costs, Finances, and Payment Details
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                If you make a purchase using our Services, we will handle the financial details
                                of your transaction. It's important to note that we don't save any information on
                                your credit or debit cards. DoubtQ may collect additional information from you,
                                such as your bank account information, social security number, social insurance
                                number, or taxpayer identification number, if your use of the Services requires
                                payment from DoubtQ to you (for example, if you offer services for sale through
                                DoubtQ or participate in research projects).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Surveys
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                From time to time, we conduct surveys and may need to get in touch with you.
                                Depending on the nature of the activity in which you choose to participate,
                                you may be required to provide certain details about yourself.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Internet-Distributed Material
                                </h5>
                            </div>
                            <p className="description mt--10">
                                You are free to make whatever use you see fit of any forums,
                                blogs, or social media platforms we make available. You should consider
                                the material you share on these platforms to be "public" and accessible to anybody.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">Information that is Not Personal Data</h4>
                            </div>
                            <ul className="plan-offer-list mt--30">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    We may create aggregated, de-identified, or anonym zed data from the personal
                                    data that we collect. This may include removing information from the data that
                                    would otherwise make it personally identifiable to a specific user. We may
                                    use such aggregated, de-identified, or anonym zed data and share it amongst
                                    DoubtQ Companies as well as with third parties for our lawful business purposes.
                                    These purposes may include analyzing, building, and improving the Services,
                                    as well as promoting our business; however, we will not share such data in a
                                    manner that could identify you.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    To augment the information you supply, we may also collect data about you from
                                    other sources, such as from third-party services and organizations. When you use
                                    a third-party app to access our Services (like an app store, a third-party login
                                    service, or a social networking site), or when you use your DoubtQ credentials to
                                    access a third-party service, we may collect information about you from that app,
                                    depending on the app's privacy settings and your own. Your name, user ID, user name,
                                    location, gender, date of birth, email address or other contact information, profile
                                    image, activities like test completion and results, and contacts recorded in that
                                    service may be among the information we gather via these means. We can more accurately
                                    verify the data you have supplied and improve the quality of the information we offer
                                    to you about our company, goods, and Services with the help of this supplementary data.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">Tracking Tools, Interest Based Advertising and Opt-Out</h4>
                            </div>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    On the Services, both DoubtQ Companies and our third-party partners gather information
                                    via the use of cookies and other tracking technologies (collectively referred to as "Cookies").
                                    Detailed information about the Cookies that are used (including the purpose for using them),
                                    interest-based advertising, how to manage Cookies, and do-not-track signals can be found in
                                    the Cookie Policy of each DoubtQ Company, which can be accessed via a link in the privacy
                                    statement of each company.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Cookies are little identifiers that are transferred from a web server
                                    and saved on the hard disk of your computer. This allows us to remember who
                                    you are if you revisit our website in the future. Cookies are used on this
                                    site to determine how visitors arrive to our page. We will never use cookies
                                    to store or transmit any personally identifiable information about you over
                                    the internet because we value your right to confidentiality. You have the option
                                    of accepting or declining cookies at this time. Cookies are stored on your computer
                                    when you use most web browsers, although you can typically change the settings of
                                    your browser to prevent it from doing so if you prefer. It is possible that some parts
                                    of the site may not operate correctly or at all if you opt to refuse cookies and continue
                                    to use the website. The usage of cookies by third parties is not something that we are
                                    able to regulate
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <h5 className="description pt--10">
                                Why We Share Your Personal Data amongst DoubtQ Companies?
                            </h5>
                            <h6>DoubtQ Companies share your personal data amongst each other:</h6>
                            <ul className="plan-offer-list mt--20">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    That we may jointly advertise, jointly promote, and jointly sell our Services to you.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    With the intention of tracking business metrics and KPIs, such as subscription
                                    Service revenue,
                                    we may gauge internal performance.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    To facilitate DoubtQ, Inc. enabling users to register for and log into numerous
                                    services across DoubtQ Companies simultaneously.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    In order for DoubtQ, Inc. to reply to customer service and other enquiries pertaining
                                    to our Services.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    For compliance with relevant privacy regulations and to fulfil requests from data
                                    subjects to DoubtQ, Inc.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    To publish and showcase your contributions across many of our Services. For the
                                    purposes of this paragraph, "your content" refers exclusively to user-generated
                                    content you publish using our Services. A question or response you submit to
                                    DoubtQ.com, For instance, may be shared and posted on another DoubtQ Service,
                                    and your username may be included in the shared version.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    To prevent fraud, strengthen security, and fix bugs; or to protect the rights,
                                    property, or safety of you, DoubtQ Companies, or a third party.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Keeping track of your finances and personal data;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    By granting access to our Services, we are able to do things like make available
                                    eBooks and other features and functions that are only available to paying customers.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Assistance in sending, monitoring, and retrieving purchases (including textbooks)
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Contacting you about your account, your use of our Services, and any changes
                                    to our policies;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    carrying out tasks to ensure the continued reliability or security of a product
                                    or service;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Managing your bank details and other payment options for goods and services;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Handling financial dealings and software requests; and
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Letting you sign up for things that interest you.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Identifying security breaches, safeguarding against dishonest, fraudulent,
                                    or unlawful actions, and punishing offenders;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Monitoring fleeting interest in and usage of our services for purposes like ad
                                    contextualization;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    conducting studies with the purpose of developing and demonstrating new technologies;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Improving the effectiveness, durability, and/or security of goods, services,
                                    marketing strategies, and/or security processes via study and development;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Developing state-of-the-art enhancements to our service or hardware;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Making progress on the creation of new goods and services;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Maintaining a high standard of quality within;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Identity confirmation and fraud protection;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Debugging to find and fix issues that prevent the system from functioning as intended;
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    The Honour Code and other regulations will be enforced; and
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Providing you with individualized information, such as new content or Services,
                                    about promotions, goods, and services that may be of interest to you.
                                </li>
                            </ul>
                            <p className="description mt--15">
                                For the purposes outlined above, each DoubtQ Company is regarded as a "controller"
                                of the personal data it collects.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    How We Share Your Personal Data amongst DoubtQ Companies?
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                We also collaborate on the development of certain systems and technologies.
                                For instance, we share the systems that manage subscriptions, which allows you
                                to select to subscribe to multiple Services and log on to all of them using a
                                single account; we also share the systems that manage customer support inquiries
                                and data subject requests; and we share the systems that provide analytics.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Marketing Communications
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                By opting in to receive marketing emails from a DoubtQ Company, not only will that
                                DoubtQ Company have access to your email address, but also any other information
                                you voluntarily provide. There is a "unsubscribe" link at the bottom of every
                                email that allows you to cancel your subscription at any time. Alternately, you
                                can change your mind about receiving promotional emails by contacting us or doing
                                so through your account settings. In the meanwhile, know that you will still get
                                messages about your account or transactions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">Data Security</h4>
                            </div>
                            <ul className="plan-offer-list mt--30 mb-2">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    We take appropriate physical, technical, organizational, and administrative
                                    security measures to safeguard your personal data based on the type of personal
                                    data and the manner in which it is being processed. In addition, you can aid in
                                    data security by carefully picking and protecting your password and/or other
                                    sign-on mechanism, restricting access to your computer or device and browser,
                                    and signing off when you're done using them. However, please be aware that no
                                    method of transmission over the internet or storage of data is 100% secure,
                                    despite our best efforts to protect the security of your account and other
                                    data we hold in our records.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    Data security measures include, but are not limited to: regularly scanning our
                                    Services for security holes and known vulnerabilities to ensure the safety of
                                    your visit or use of our Services; storing your personal information in encrypted
                                    form behind secured networks that can only be accessed by a select group of individuals
                                    who have special access rights to such systems and are required to keep the information
                                    confidential; and implementing other security measures that are designed to prevent
                                    unauthorized access, maintain data accuracy, and ensure the correct use of personal
                                    information.
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
                                    Data Retention
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                For those DoubtQ Services that require an account, the relevant DoubtQ Company
                                will keep your personal data for as long as you have an active account or for
                                as long as it is otherwise required to provide the Services to you. If it is
                                necessary for us to do so in order to comply with our legal obligations, resolve
                                disputes, or collect fees that are owed, or if doing so is otherwise permitted
                                or required by applicable law, rule, or regulation, we will in certain circumstances
                                keep personal data for a longer period of time. Further, we may keep information for
                                an indefinite period of time in a form that is either anonymous or aggregated, in which
                                case the information would not personally identify you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Changes to This Privacy Policy
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                Because we are always working to improve our Services, it is possible that
                                we will need to alter this policy on occasion. If we do so, however, we will
                                make sure to notify you of any changes that are significant either by posting
                                a notice on the product-specific website to which the changes apply, by sending
                                you an email, or by some other reasonable means of communication.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Cross Border Transfers of Personal Data
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                The DoubtQ Companies are based in India; however their expansion into other nations
                                is possible. We also work with a global network of service providers, including those
                                in India. As a result, your personal information may be transferred to, or accessed
                                by, DoubtQ Companies and our service providers in countries that do not offer an adequate
                                degree of data protection. Do not use our Services or provide us with any personal information
                                if you do not want us to transmit such information outside of India. For further information
                                on the security procedures we have put in place during the transmission of your personal
                                information, please don't hesitate to get in touch with us.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Children
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                If you are considered a minor in your country, you are required to represent
                                that you have the permission of a parent or other adult who is legally responsible
                                for you in order to use the service. The collection, use, or disclosure of a child's
                                personal information requires the verifiable consent of the child's parents or legal
                                guardians. If you are the parent or legal guardian of a minor in your country and
                                you permit your child to use the service, you agree to be bound by the terms of this
                                Agreement and are responsible for the activities your child engages in while using the service.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Governing law and jurisdiction
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                The laws of India will be applied to and interpreted in line with the
                                requirements of this Privacy Policy, which will be regulated by those laws.
                                You acknowledge that the courts in Delhi, India, have exclusive and exclusive
                                jurisdiction over any dispute that may arise.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start">
                                <h5 className="description mt--10">
                                    Severability
                                </h5>
                            </div>
                            <p className="description mt--10 mb-2">
                                The provisions that are included in this Privacy Policy are enforceable in
                                their own right and are not dependent on one another in any way. In the event
                                that a provision is found to be invalid by the appropriate court, the validity
                                of the remaining provisions will not be affected in any way.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title text-start mt--30">
                                <h4 className="title">Contact Us</h4>
                            </div>
                            <ul className="plan-offer-list mt--20">
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    You can send your request to DoubtQ, Inc. and indicate so on the request if you
                                    subscribed to more than one Service during the checkout process and would like
                                    to exercise any of the rights under applicable privacy law. DoubtQ, Inc. will
                                    process your request in accordance with the instructions provided on the request.
                                </li>
                                <li>
                                    <i className="theme-gradient feather-arrow-right-circle" />
                                    I would ask that you get in touch with the DoubtQ Company that is most relevant to your request.
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

export default Privacypolicy;