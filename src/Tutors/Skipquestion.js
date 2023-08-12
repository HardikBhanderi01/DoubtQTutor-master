import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { changeQuestionStatusSkip, resetQuestionBlock } from "../redux/actions/QuestionAction";
import { useDispatch, useSelector } from "react-redux";
import { getSubjectListReq } from "../redux/actions/ProfileAction";

const Skipquestion = () => {

    useEffect(() => {
        document.title = 'DoubtQ - Skip the Questions You Dont Want to Answer';
    }, []);

    const dispatch = useDispatch();
    const history = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const type = searchParams.get("type");
    const isUnsolved = type === "unanswered";
    const internalStatus = searchParams.get('internalStatus');
    const { questionStatusSkip } = useSelector((state) => state.question);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [toggleVisibility, setToggleVisibility] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [newReason, setNewReason] = useState(0);
    const [newReasonText, setNewReasonText] = useState("");

    //Skipquestion drop-down

    const {
        register,
        formState: { errors },
    } = useForm({});


    const onSkipPress = () => {
        const payload = {
            "questionId": id,
            "internalStatus": internalStatus,
            "newReason": newReason,
            "newReasonText": newReasonText
        };
        dispatch(changeQuestionStatusSkip(payload))
        dispatch(
            resetQuestionBlock({
                blockType: isUnsolved ? "questionUnsolved" : "expertQuestion",
            })
        );
        dispatch(resetQuestionBlock({ blockType: "startAnswering" }));

    }

    useEffect(() => {
        if (questionStatusSkip.success) {
            history("/mcqfinalanswer")
        }

    }, [questionStatusSkip.success])

    useEffect(() => {
        dispatch(getSubjectListReq());
    }, []);
    //question subject
    const { subjectDetails: subjectListDetails } = useSelector((state) => state.profile);
    const subjectList = subjectListDetails?.data?.data || [];

    //questin type
    const questionTypeData = useSelector((state) => state.question.questionType);
    const questionTypeArray = questionTypeData?.data?.data || [];

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
                                    <div className="col-lg-12">
                                        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box rbt-border mb--30 p--20">
                                            <div className="content">
                                                <div className="row">
                                                    <div className="col-lg-8">
                                                        <div className="section-title mb--10">
                                                            <h4 className="mb--0">
                                                                Select valid reason for skipping the question
                                                            </h4>
                                                        </div>
                                                        <div className="payent">
                                                            <div className="rbt-form-check show-block">
                                                                <input
                                                                    id="rbt-radio-1"
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="payment"
                                                                    defaultValue="PayPal"
                                                                    onChange={() => {
                                                                        setShowDropdown(true);
                                                                        setActiveDropdown(false)
                                                                        setToggleVisibility(false)
                                                                        setShowDropdown1(false)
                                                                        setNewReason(1)
                                                                        setNewReasonText("")
                                                                    }}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="rbt-radio-1"
                                                                >
                                                                    It doesn’t belong to this subject
                                                                </label>
                                                            </div>
                                                            <div className="">
                                                                <div className="filter-select rbt-modern-select mb--15 mt--15">
                                                                    <div className="dropdown react-bootstrap-select w-100">
                                                                        {showDropdown && (
                                                                            <select
                                                                                id="class-signup"
                                                                                className="w-100"
                                                                                {...register("subject", { required: true })}
                                                                                onChange={(e) => {
                                                                                    setNewReasonText(e.target.value)
                                                                                }}
                                                                            >
                                                                                {subjectList.map((item) => <option value="item">{item}</option>
                                                                                )}
                                                                            </select>
                                                                        )}
                                                                        {errors.subject && (
                                                                            <p className="text-danger">Please select a subject</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="payent">
                                                            <div className="rbt-form-check show-block">
                                                                <input
                                                                    id="rbt-radio-2"
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="payment"
                                                                    defaultValue="BankTransfer"
                                                                    onChange={() => {
                                                                        setActiveDropdown(true);
                                                                        setShowDropdown(false)
                                                                        setToggleVisibility(false)
                                                                        setShowDropdown1(false)
                                                                        setNewReason(2)
                                                                        setNewReasonText("")
                                                                    }}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="rbt-radio-2"
                                                                >
                                                                    It doesn’t belong to this question type
                                                                </label>
                                                            </div>
                                                            <div className="">
                                                                <div className="filter-select rbt-modern-select mb--15 mt--15">
                                                                    <div className="filter-select rbt-modern-select mb--15 mt--15">
                                                                        <div className="dropdown react-bootstrap-select w-100">
                                                                            {activeDropdown && (
                                                                                <select
                                                                                    id="class-signup"
                                                                                    className="w-100"
                                                                                    {...register("subject", { required: true })}
                                                                                    onChange={(e) => {
                                                                                        setNewReasonText(e.target.value)
                                                                                    }}
                                                                                >
                                                                                    {questionTypeArray.map((q) => (
                                                                                        <option value={q._id}>{q.questionType}</option>
                                                                                    ))}

                                                                                </select>
                                                                            )}
                                                                            {errors.subject && (
                                                                                <p className="text-danger">Please select a subject</p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="payent">
                                                            <div className="rbt-form-check show-block">
                                                                <input
                                                                    id="rbt-radio-3"
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="payment"
                                                                    defaultValue="Creditcards"
                                                                    onChange={() => {
                                                                        setToggleVisibility(true);
                                                                        setShowDropdown(false)
                                                                        setActiveDropdown(false)
                                                                        setShowDropdown1(false)
                                                                        setNewReason(3)
                                                                        setNewReasonText("")
                                                                    }}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="rbt-radio-3"
                                                                >
                                                                    I need more information
                                                                </label>
                                                            </div>
                                                            <div className="">
                                                                <div className="rbt-form-group mt--15 mb--15">
                                                                    {toggleVisibility &&
                                                                        <>
                                                                            <label htmlFor="">
                                                                                What information do you need
                                                                            </label>
                                                                            <textarea
                                                                                placeholder="Be as specific as possible"
                                                                                id="bio"
                                                                                cols={20}
                                                                                rows={5}
                                                                                defaultValue={""}
                                                                                onChange={(e) => {
                                                                                    setNewReasonText(e.target.value)
                                                                                }}
                                                                            />
                                                                        </>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="payent">
                                                            <div className="rbt-form-check show-block">
                                                                <input
                                                                    id="rbt-radio-4"
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="payment"
                                                                    defaultValue="BankTransfer"
                                                                    onChange={() => {
                                                                        setShowDropdown1(true);
                                                                        setToggleVisibility(false)
                                                                        setShowDropdown(false)
                                                                        setActiveDropdown(false)
                                                                        setNewReason(4)
                                                                        setNewReasonText("")
                                                                    }}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="rbt-radio-4"
                                                                >
                                                                    It contains inappropriate content
                                                                </label>
                                                            </div>
                                                            <div className="">
                                                                <div className="filter-select rbt-modern-select mb--15 mt--15">
                                                                    <div className="dropdown react-bootstrap-select w-100">
                                                                        {showDropdown1 && (
                                                                            <select
                                                                                id="class-signup"
                                                                                className="w-100"
                                                                                {...register("subject", { required: true })}
                                                                                onChange={(e) => {
                                                                                    setNewReasonText(e.target.value)
                                                                                }}
                                                                            >
                                                                                <option value="Adult or offensive">Adult or offensive</option>
                                                                                <option value="Harassment">Harassment</option>
                                                                                <option value="Spam">Spam</option>
                                                                                <option value="Solicitation">Solicitation</option>
                                                                                <option value="Theats or violence">Theats or violence</option>
                                                                                <option value="Other">Other</option>
                                                                            </select>
                                                                        )}
                                                                        {errors.subject && (
                                                                            <p className="text-danger">Please select a subject</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="payent Skipquestion">
                                                            <div className="rbt-form-check show-block">
                                                                <input
                                                                    id="rbt-radio-5"
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="payment"
                                                                    defaultValue="Debitcards"
                                                                    onChange={() => {
                                                                        setShowDropdown1(false);
                                                                        setToggleVisibility(false)
                                                                        setShowDropdown(false)
                                                                        setActiveDropdown(false)
                                                                        setNewReason(5)
                                                                        setNewReasonText("Skip")
                                                                    }}
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="rbt-radio-5"
                                                                >
                                                                    I don’t know the answer
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="mt--20">
                                                            <button onClick={() => onSkipPress()}
                                                                disabled={newReason === 0 || questionStatusSkip.loading}
                                                                className="rbt-btn btn-gradient hover-icon-reverse btn-sm"
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
                                                            </button>
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
                </div>
            </main>

        </>

    )
}

export default Skipquestion;