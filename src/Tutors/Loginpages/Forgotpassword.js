import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { forgotPassword } from "../../redux/actions/AuthAction";

const Forgotpassword = () => {
  const dispatch = useDispatch()

  const onForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target[0]?.value;
    if (!email) {
      toast("Email is required");
      return
    }
    dispatch(forgotPassword({ email }))
  }

  useEffect(() => {
    document.title = 'DoubtQ - Forgot password';
  }, []);

  return (
    <>
      <div className="login-register-bg-login">
        <main className="d-lg-flex align-items-center justify-content-center d-block h-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto ">
                <div className="logo pt--20 pb--20 text-center">
                  <Link to="/">
                    <img
                      src="../assets/images/logo/doubt-q.png"
                      alt="Vaidik Logo Images"
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
                            src="../assets/images/icons/sign_icon01.svg"
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
                            src="../assets/images/icons/sign_icon02.svg"
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
                            src="../assets/images/icons/sign_icon03.svg"
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
                            src="../assets/images/icons/sign_icon04.svg"
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
                        <h4 className="title text-center mb--10">
                          Forgot Password?
                        </h4>
                        <form
                          action="#"
                          className="rbt-profile-row rbt-default-form row row--15"
                          onSubmit={onForgotPassword}
                        >
                          <div className="col-lg-12 col-md-12 col-12">
                            <div className="rbt-form-group">
                              <label>Email</label>
                              <input
                                placeholder="Enter email id"
                                type="email"
                                required
                              />

                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12 col-12 text-end">
                            <div className="rbt-form-group">
                              <button
                                className="rbt-btn btn-gradient btn-sm mr--10 text-center w-100"
                                type="submit"
                              >
                                Reset password
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12 text-center mt-4">
                            <div className="rbt-form-group">
                              <h6>
                                We have sent a password to your registered email
                                id.
                              </h6>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12 text-center mt--50">
                            Don’t have an account?
                            <Link to="/signin" className="color-primary">
                              Sign In
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

export default Forgotpassword;