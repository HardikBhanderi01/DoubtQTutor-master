import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetBlockAuth, signup } from "../../redux/actions/AuthAction";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import GoogleButton from "react-google-button";
import { getOtpReq } from "../../redux/actions/ProfileAction";
import OtpButton from "../../components/OtpButton";
import { Button } from "react-bootstrap";
import axios from "axios";

const baseURL = process.env.REACT_APP_APIS_BASE_URL;

const Signup = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const signupReducer = useSelector((state) => state.auth.signup);
  const getOtpReducer = useSelector((state) => state.profile.getOtp);
  const { success, loading } = signupReducer;
  const [signupDetails, setSignupDetails] = useState({});
  const [googleSignin, setGoogleSignin] = useState({ isOpen: false });
  const [data, setData] = useState([]);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const signin = useGoogleLogin({
    onSuccess: (codeResponse) => { },
    onError: (error) => { },
  });

  useEffect(() => {
    document.title = "DoubtQ - Sign-Up";
  }, []);

  const handleGoogleLogin = async (googleUser) => {
    const auth2 = window.gapi.auth2;

    if (!auth2) {
      console.error("Google API client library not initialized.");
      return;
    }
    const idToken = googleUser.getAuthResponse().id_token;
    await dispatch(
      signup({
        type: "googleRegister",
        payload: { idToken: idToken },
      })
    );
    setGoogleSignin({ isOpen: false, idToken });
  };

  useEffect(() => {
    if (
      signupReducer.error.error !== "Email Already registered!" &&
      googleSignin.idToken
    ) {
      setGoogleSignin({ ...googleSignin, isOpen: true });
    }
  }, [signupReducer]);

  useEffect(() => {
    const initGoogleAPI = async () => {
      const params = {
        client_id:
          "574059073316-7g49pr343qu1jmobfkis2apchn2mhr3v.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "DoubtQ",
      };

      await new Promise((resolve) => window.gapi.load("auth2", resolve));
      await window.gapi.auth2.init(params);
    };

    initGoogleAPI();
    // if (success) history('/expertmainpage')
  }, [success]);

  const handleGoogleFailure = (error) => { };

  const onChange = (e) => {
    const { name, value } = e.target || {};
    setSignupDetails({ ...signupDetails, [name]: value });
  };

  const onChangeGoogle = (e) => {
    const { name, value } = e.target || {};
    setGoogleSignin({ ...googleSignin, [name]: value });
  };

  const closeModalClick = () => {
    setGoogleSignin({ isOpen: false });
  };

  useEffect(() => {
    if (success) {
      const { info } = signupReducer?.data;
      if (info?.registerType === "google") {
        return;
      }
      dispatch(resetBlockAuth({ blockType: "signup" }));
      toast.success("Signup successfully");
      history("/signin");
    }
  }, [success]);

  const handleSignup = (e) => {
    e.preventDefault();
    const { mobileNo, password, confirmPassword } = signupDetails || {};
    const payload = {
      email: signupDetails?.email,
      password,
      mobileNo,
      // otp: signupDetails?.otp,
    };
    if (password === confirmPassword) {
      dispatch(signup(payload));
    } else {
      toast.error("Password and Confirm Password are not equal");
    }
  };

  const handleSignupGoogle = (e) => {
    e.preventDefault();
    const { password, mobileNo, confirmPassword } = googleSignin || {};
    const payload = {
      password,
      mobileNo,
      // otp: googleSignin?.otp,
      token: signupReducer?.data?.token,
    };
    if (googleSignin?.referralCode) {
      payload.referralCode = googleSignin?.referralCode;
    }
    if (password === confirmPassword) {
      dispatch(
        signup({
          type: "google",
          payload: payload,
        })
      );
       history('/expertmainpage')
    } else {
      toast.error("Password and Confirm Password are not equal");
    }
  };

  const otpVerify = async (e) => {
    e.preventDefault();
    const email = signupDetails?.email;
    const otp = signupDetails?.otp;

    try {
      const response = await axios.post(`${baseURL}/tutor/verifyotp`, {
        email,
        otp,
      });
      setIsOtpVerified(true);
      setData(response.data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <>
      <div className="login-register-bg">
        <main className="d-lg-flex align-items-center justify-content-center d-block h-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto ">
                <div className="logo pt--20 pb--20 text-center">
                  <Link to="/">
                    <img
                      src="assets/images/logo/doubt-q.png"
                      alt="DoubtQ Logo Images"
                    />
                  </Link>
                </div>
                <div className="rbt-contact-form contact-form-style-1 rbt-shadow-box mb--50">
                  <div className="row align-items-center">
                    <div className="col-lg-5 mb_md--30 mb_sm--30 text-center">
                      <h4 className="title">
                        Get one step closer <br />
                        <span className="normal-text"> to your A+ grade</span>
                      </h4>
                      <div className="col-lg-9 col-md-6 row align-items-center mx-auto mt--30">
                        <div className="col-lg-3 col-3 text-center">
                          <img
                            className=""
                            src="assets/images/icons/sign_icon01.svg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-9 col-9 text-start">
                          <h6 className="mb--0">Step by step solution</h6>
                          <p>with explanation</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-6 row align-items-center mx-auto mt--20">
                        <div className="col-lg-3 col-3 text-center">
                          <img
                            className=""
                            src="assets/images/icons/sign_icon02.svg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-9 col-9 text-start">
                          <h6 className="mb--0">Save time</h6>
                          <p>Never miss deadline</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-6 row align-items-center mx-auto mt--20">
                        <div className="col-lg-3 col-3 text-center">
                          <img
                            className=""
                            src="assets/images/icons/sign_icon03.svg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-9 col-9 text-start">
                          <h6 className="mb--0">100% Accuracy</h6>
                          <p>0% Plagiarism</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-6 row align-items-center mx-auto mt--20">
                        <div className="col-lg-3 col-3 text-center">
                          <img
                            className=""
                            src="assets/images/icons/sign_icon04.svg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-9 col-9 text-start">
                          <h6 className="mb--0">100% Confidential</h6>
                          <p>Fully confident</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 pl--30 pl_sm--0 border-signup">
                      <div className="">
                        <h4 className="title text-center mb--10">Sign Up</h4>
                        <form
                          action="#"
                          className="rbt-profile-row rbt-default-form row row--15"
                        >
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="rbt-form-group">
                              <label className="mx-1">
                                Email <span className="text-danger">*</span>
                              </label>
                              <div className="d-flex flex-row-reverse">
                                <div className="ml-4">
                                  <div className="">
                                    <OtpButton
                                      email={signupDetails?.email}
                                      isOtpVerified={isOtpVerified}
                                    />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  {" "}
                                  <input
                                    className="col-lg-10"
                                    placeholder="Enter email id"
                                    value={signupDetails?.email}
                                    onChange={onChange}
                                    name="email"
                                    type="email"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="rbt-form-group">
                              <label className="d-flex mx-1">
                                OTP <span className="text-danger">*</span>
                              </label>
                              <div className="d-flex">
                                <input
                                  placeholder="Type otp here"
                                  type="tel"
                                  id="otp"
                                  name="otp"
                                  value={signupDetails?.otp}
                                  onChange={onChange}
                                />
                                <button
                                  className="btn-sm rbt-btn btn-gradient"
                                  onClick={(e) => otpVerify(e)}
                                  disabled={isOtpVerified}
                                >
                                  Verify
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <label className="mx-1">
                                Password<span className="text-danger">*</span>
                              </label>
                              <input
                                placeholder="Enter password"
                                type="password"
                                name="password"
                                value={signupDetails?.password}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <label className="mx-1">
                                Confirm password
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                placeholder="Re-enter password"
                                type="password"
                                name="confirmPassword"
                                value={signupDetails?.confirmPassword}
                                onChange={onChange}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <label className="mx-1">
                                Mobile number
                                <span className="text-danger">*</span>
                              </label>
                              <div>
                                <div className="col-lg-12">
                                  <input
                                    id="lastname"
                                    type="tel"
                                    defaultValue=""
                                    placeholder="Enter mobile no."
                                    name="mobileNo"
                                    value={signupDetails?.mobileNo}
                                    onChange={onChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <label className="mx-1">Referral code </label>
                              <input
                                placeholder="# Enter your referral code"
                                type="tel"
                                id="referralCode"
                                name="referralCode"
                                value={signupDetails?.referralCode}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <GoogleButton
                                disabled={loading}
                                className="rbt-btn btn-border radius-round-6 btn-sm mr--10 text-center w-100 mb_sm--10"
                                onClick={() => {
                                  const auth2 = window.gapi.auth2;

                                  if (!auth2) {
                                    console.error(
                                      "Google API client library not initialized."
                                    );
                                    return;
                                  }

                                  auth2
                                    .getAuthInstance()
                                    .signIn()
                                    .then(
                                      handleGoogleLogin,
                                      handleGoogleFailure
                                    );
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="rbt-form-group">
                              <Button
                                className="rbt-btn btn-gradient btn-sm mr--10 text-center w-100"
                                onClick={handleSignup}
                                disabled={
                                  !signupDetails?.email ||
                                  !signupDetails?.password ||
                                  !signupDetails?.confirmPassword
                                }
                              >
                                {loading ? "Loading..." : "Sign Up"}
                              </Button>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12 text-center mt--50">
                            Already have an account?
                            <Link to="/signin" className="color-primary">
                              Sign in
                            </Link>
                            <br />
                            By Clicking Sign up, You agree our
                            <Link to="#">Terms &amp; Conditions</Link>,
                            <Link to="#">
                              Refund Policy &amp; Privacy Policy.
                            </Link>
                          </div>
                        </form>
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
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          style={{
            display: googleSignin?.isOpen ? "block" : "none",
            background: "#00000059",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Welcome user
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModalClick}
                />
              </div>
              <div className="modal-body">
                <form
                  action="#"
                  className="rbt-profile-row rbt-default-form row row--15"
                >
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="rbt-form-group">
                      <label className="mx-1">
                        Password<span className="text-danger">*</span>
                      </label>
                      <input
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        value={googleSignin?.password}
                        onChange={onChangeGoogle}
                      />
                    </div>
                    <div className="rbt-form-group">
                      <label className="mx-1">
                        Confirm password<span className="text-danger">*</span>
                      </label>
                      <input
                        placeholder="Re-enter password"
                        type="password"
                        name="confirmPassword"
                        value={googleSignin?.confirmPassword}
                        onChange={onChangeGoogle}
                      />
                    </div>
                    <div className="rbt-form-group">
                      <label className="mx-1">
                        Mobile number
                        <span className="text-danger">*</span>
                      </label>
                      <div>
                        <div className="col-lg-12">
                          <input
                            placeholder="+91 (55555-55555)"
                            name="mobileNo"
                            value={googleSignin?.mobileNo}
                            onChange={onChangeGoogle}
                            type="tel"
                          />
                        </div>
                        {/* <div className="col-lg-2">
                        <OtpButton mobileNo={googleSignin?.mobileNo} />
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="rbt-form-group">
                      <input
                        placeholder="Type your OTP here"
                        id="otp"
                        name="otp"
                        value={googleSignin?.otp}
                        onChange={onChangeGoogle}
                        type="tel"
                      />
                    </div> */}

                    <div className="rbt-form-group">
                      <label className="mx-1">Referral code</label>
                      <input
                        placeholder="Enter referral code"
                        type="tel"
                        id="referralCode"
                        name="referralCode"
                        value={googleSignin?.referralCode}
                        onChange={onChangeGoogle}
                      />
                    </div>
                    <button
                      onClick={handleSignupGoogle}
                      className="rbt-btn btn-gradient btn-sm mr--10 text-center w-100"
                      disabled={
                        !googleSignin?.password ||
                        !googleSignin?.confirmPassword
                      }
                    >
                      {loading ? "Loading..." : "Sign Up"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
