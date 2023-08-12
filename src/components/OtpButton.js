import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "react-bootstrap";

const baseURL = process.env.REACT_APP_APIS_BASE_URL;

const OtpButton = ({ email, isOtpVerified }) => {
  const [time, setTime] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState([]);

  // const extractNumberDigits = (mobileNo) => {
  //   return mobileNo?.replace(/\D/g, "");
  // };

  //   const handleOtpClick = async () => {
  //     // const numberDigits = extractNumberDigits(mobileNo);
  //     // const requiredDigits = 10;

  //     // if (numberDigits?.length < requiredDigits) {
  //     //   return toast.error("Please enter a valid phone number");
  //     // }
  // console.log(email);
  //     try {
  //       const response = await axios.post(`${baseURL}/tutor/getotp`,{ email });
  //       setData(response.data.data);
  //       toast.success(response.data.message);
  //       setTime(180);
  //       setDisabled(true);
  //     } catch (error) {
  //       toast.error(error.response.data.error);
  //       setDisabled(false);
  //     }
  //   };
  const handleOtpClick = async () => {
    try {
      const response = await axios.post(`${baseURL}/tutor/getotp`, { email });
      setData(response.data.data);
      toast.success(response.data.message);
      setTime(59);
      setDisabled(true);
    } catch (error) {
      toast.error(error.response.data.error);
      setDisabled(false);
    }
  };

  useEffect(() => {
    let interval = null;

    if (disabled === true) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            setDisabled(false);
            return null;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [disabled]);

  const minutes = time ? Math.floor(time / 60) : null;
  const seconds = time ? time % 60 : null;

  return (
    <div className=''>
      <Button
        className='btn-sm rbt-btn btn-gradient'
        disabled={disabled || isOtpVerified}
        onClick={handleOtpClick}>
        {data ? (
          <span> OTP</span>
        ) : time > 0 ? (
          <div>
            {minutes?.toString().padStart(2, "0")}:
            {seconds?.toString().padStart(2, "0")}
          </div>
        ) : (
          <span>Resend</span>
        )}
      </Button>
    </div>
  );
};

export default OtpButton;
