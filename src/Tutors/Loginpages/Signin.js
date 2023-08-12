import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, resetBlockAuth } from "../../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import GoogleButton from "react-google-button";
import { isLoggedIn } from "../../utils/utility";

const Signin = () => {


  const history = useNavigate();
  const dispatch = useDispatch();
  const loginReducer = useSelector((state) => state.auth.login);
  const { success, loading } = loginReducer;
  const [loginDetails, setloginDetails] = useState({});

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      
    },
    onError: (error) => {

    },
  });

  const onChange = (e) => {
    const { name, value } = e.target || {};
    setloginDetails({ ...loginDetails, [name]: value });
  };

  useEffect(() => {
    document.title = 'DoubtQ - Sign-In';
  }, []);

  useEffect(() => {
    if (success) {
      dispatch(resetBlockAuth({ blockType: "login" }));
      const { info } = loginReducer?.data;
      switch (info.internalStatus) {
        case 0:
          history("/Personaldetails");
          return;
        case 1:
          history("/mcqtest");
          return;
        case 2:
          toast.success("Please check your email for further instructions");
          return;
        case 3:
          history("/professionaldetails");
          return;
        case 4:
          history("/bankdetails");
          return;
        case 5:
          history("/expertmainpage");
          return;
      }
    }

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
  
  }, [success]);

  const handleGoogleLogin = async (googleUser) => {
    const auth2 = window.gapi.auth2;

    if (!auth2) {
        console.error("Google API client library not initialized.");
        return;
    }

    const idToken = googleUser.getAuthResponse().id_token;

    await dispatch(
      login({
        type: "google",
        payload: { idToken: idToken },
      })
    );
};

const handleGoogleFailure = (error) => { };

  const handleSignup = (e) => {
    e.preventDefault();
    const { email, password } = loginDetails || {};
    const payload = {
      email,
      password,
    };

    dispatch(login(payload));
  };
 let auth = isLoggedIn();
  return (
    <>
      <div className="login-register-bg-login">
        <main className="d-lg-flex align-items-center justify-content-center d-block h-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto ">
                <div className="logo pt--20 pb--20 text-center">
                  <Link to={!auth ? "/" : ""}>
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
                        <h4 className="title text-center mb--10">Sign In</h4>
                        <form
                          action="#"
                          className="rbt-profile-row rbt-default-form row row--15"
                        >
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="rbt-form-group">
                              <label className="mx-1">Email <span className="text-danger">*</span></label>
                              <input
                                onChange={onChange}
                                name="email"
                                placeholder="Enter email id"
                                type="email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="rbt-form-group">
                              <label className="mx-1">Password<span className="text-danger">*</span></label>
                              <input
                                placeholder="Enter password"
                                type="password"
                                name="password"
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12 text-end">
                            <div className="rbt-form-group">
                              <button
                                to="#"
                                className="rbt-btn btn-gradient btn-sm mr--10 text-center w-100"
                                onClick={handleSignup}
                                disabled={loading || !loginDetails.email || !loginDetails.password}
                              >
                                Sign In
                              </button>
                            </div>
                            <div className="mt--5">
                              <Link to="/forgotpassword" className="color-primary pt--10">
                                Forgot password?
                              </Link>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12 mb--10 text-center">
                            <p>Or Login With</p>
                            <div className="rbt-form-group">
                              <GoogleButton
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
                          <div className="col-lg-12 col-md-12 col-12 text-center mt--50">
                            Don’t have an account?
                            <Link to="/signup" className="color-primary">
                              Sign up
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
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
