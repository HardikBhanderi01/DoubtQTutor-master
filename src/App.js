import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Copyfooter from "./components/Copyfooter";
import Scroll from "./pages/Scroll";
import Backtotop from "./components/Backtotop";

import Home from "./pages/Home";

import Contact from "./Tutors/Contact";
import Bankdetails from "./Tutors/Detailspages/Bankdetails";
import Professionaldetails from "./Tutors/Detailspages/Professionaldetails";
import Personaldetails from "./Tutors/Detailspages/Personaldetails";
import Choosesubjects from "./Tutors/Detailspages/Choosesubjects";
import Mcqtest from "./Tutors/Detailspages/Mcqtest";

import Answerstreak from "./Tutors/Answerstreak";
import Referralhistory from "./Tutors/Referralhistory";
import Refertofriend from "./Tutors/Refertofriend";

import Answernow from "./Tutors/Answernow";
import Studentquestion from "./Tutors/Studentquestion";
import Unsolvedquestions from "./Tutors/Unsolvedquestions";
import Questiondescription from "./Tutors/Questiondescription";
import Mcqfinalanswer from "./Tutors/Mcqfinalanswer";

import Mcqquestion from "./Tutors/Mcqquestion";
import Turefalsequestion from "./Tutors/Turefalsequestion";
import Fillinblanks from "./Tutors/Fillinblanks";
import Questionanswer from "./Tutors/Questionanswer";
import Matchfollowingquestion from "./Tutors/Matchfollowingquestion";
import Skipquestion from "./Tutors/Skipquestion";
import Signin from "./Tutors/Loginpages/Signin";
import Signup from "./Tutors/Loginpages/Signup";
import Logout from "./Tutors/Logout";

import Forgotpassword from "./Tutors/Loginpages/Forgotpassword";

import Totalamount from "./Tutors/Wallet/Totalamount";
import Transactionhistory from "./Tutors/Wallet/Transactionhistory";
import { isLoggedIn } from "./utils/utility";
import Tutorexammcq from "./Tutors/Tutorexammcq";
import Tutorexamtheory from "./Tutors/Tutorexamtheory";
import AllQuestion from "./Tutors/allQuestion";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./pages/404";
import { useDispatch } from "react-redux";
import { getQuestionType } from "./redux/actions/QuestionAction";
import Staticpage from "./Tutors/Staticpage";

import Refundpolicy from "./Staticpages/Refundpolicy";
import Privacypolicy from "./Staticpages/Privacypolicy";
import Termsandconditions from "./Staticpages/Termsandconditions";
import Copyrightpolicy from "./Staticpages/Copyrightpolicy";
import Honourcode from "./Staticpages/Honorcode";
import Aboutdoubtq from "./Staticpages/Aboutdoubtq";
import Academicintegrity from "./Staticpages/Academicintegrity";
import Faq from "./Faqs/Faq";
import ComingSoon from "./components/ComingSoon";
import Myquestionanswer from "./Tutors/Myquestionanswer";

function RequireAuth({ children }) {
  let auth = isLoggedIn();

  if (!auth) {
    return <Navigate to="/signin" />;
  }

  return children;
}

const App = () => {
  let auth = isLoggedIn();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionType());
  }, []);
  console.log('authauthauth',auth)
  return (
    <React.Fragment>
      {/* <Router> */}
      <Backtotop />
      <Navigation />
       <Routes>
        <Route exact path={"/staticpage"} element={<Staticpage mainPage={true}/>} />
        <Route exact path={"/"} element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route
          path="/bankdetails"
          element={
            <RequireAuth>
              <Bankdetails />
            </RequireAuth>
          }
        />
        <Route
          path="/professionaldetails"
          element={
            <RequireAuth>
              <Professionaldetails />
            </RequireAuth>
          }
        />
        <Route
          path="/Personaldetails"
          element={
            <RequireAuth>
              <Personaldetails />
            </RequireAuth>
          }
        />
        <Route
          path="/choosesubjects"
          element={
            <RequireAuth>
              <Choosesubjects />
            </RequireAuth>
          }
        />
        <Route
          path="/mcqtest"
          element={
            <RequireAuth>
              <Mcqtest />
            </RequireAuth>
          }
        />
        <Route path="/myquestionanswer" element={<Myquestionanswer />}/>
        <Route
          path="/answerstreak"
          element={
            <RequireAuth>
              <Answerstreak />
            </RequireAuth>
          }
        />
        <Route
          path="/referralhistory"
          element={
            <RequireAuth>
              <Referralhistory />
            </RequireAuth>
          }
        />
        <Route
          path="/refertofriend"
          element={
            <RequireAuth>
              <Refertofriend />
            </RequireAuth>
          }
        />

        <Route
          path="/answernow"
          element={
            <RequireAuth>
              <Answernow />
            </RequireAuth>
          }
        />
        <Route path="/studentquestion" element={<Studentquestion />} />
        <Route
          path="/unsolvedquestions"
          element={
            <RequireAuth>
              <Unsolvedquestions />
            </RequireAuth>
          }
        />
        <Route
          path="/questiondescription"
          element={
            <RequireAuth>
              <Questiondescription />
            </RequireAuth>
          }
        />
        <Route
          path="/expertmainpage"
          element={
            <RequireAuth>
              <Mcqfinalanswer mainPage={true} />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/mcqfinalanswer"
          element={
            <RequireAuth>
              <Mcqfinalanswer mainPage={false} />
            </RequireAuth>
          }
        />
        <Route
          path="/allQuestion"
          element={
            <RequireAuth>
              <AllQuestion />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/wallet"
          element={
            <RequireAuth>
              {" "}
              <Totalamount />
            </RequireAuth>
          }
        />
        <Route
          path="/transactionhistory"
          element={
            <RequireAuth>
              {" "}
              <Transactionhistory />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/tutorexammcq"
          element={
            <RequireAuth>
              <Tutorexammcq />
            </RequireAuth>
          }
        />
        <Route
          path="/tutorexamtheory"
          element={
            <RequireAuth>
              <Tutorexamtheory />
            </RequireAuth>
          }
        />
        <Route
          path="/mcqquestion"
          element={
            <RequireAuth>
              <Mcqquestion />
            </RequireAuth>
          }
        />
        <Route
          path="/turefalsequestion"
          element={
            <RequireAuth>
              <Turefalsequestion />
            </RequireAuth>
          }
        />
        <Route
          path="/fillinblanks"
          element={
            <RequireAuth>
              <Fillinblanks />
            </RequireAuth>
          }
        />
        <Route
          path="/questionanswer"
          element={
            <RequireAuth>
              <Questionanswer />
            </RequireAuth>
          }
        />
        <Route
          path="/matchfollowingquestion"
          element={
            <RequireAuth>
              <Matchfollowingquestion />
            </RequireAuth>
          }
        />
        <Route
          path="/skipquestion"
          element={
            <RequireAuth>
              <Skipquestion />
            </RequireAuth>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/refundpolicy" element={<Refundpolicy />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/termsandconditions" element={<Termsandconditions />} />
        <Route path="/copyrightpolicy" element={<Copyrightpolicy />} />
        <Route path="/honourcode" element={<Honourcode />} />
        <Route path="/aboutdoubtq" element={<Aboutdoubtq />} />
        <Route path="/academicintegrity" element={<Academicintegrity />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      
      <Scroll />
      {!auth  ? <Footer /> : <Copyfooter/> } 
      
      <ToastContainer autoClose={700} />
    </React.Fragment>
  );
};

export default App;
