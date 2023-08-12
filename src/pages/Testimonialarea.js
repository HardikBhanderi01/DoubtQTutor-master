import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Odometer from "react-odometerjs";
import Homecarousel from "./Homecarousel";
import axios from "axios";

const url = process.env.REACT_APP_APIS_BASE_URL;

const Testimonialarea = () => {
  //Odometer
  // const [odometerValue, setOdometerValue] = useState(0);
  // const [odometerValue1, setOdometerValue1] = useState(0);
  // const [odometerValue2, setOdometerValue2] = useState(0);
  // const [odometerValue3, setOdometerValue3] = useState(0);

  // useEffect(() => {
  //     setTimeout(() => {
  //         setOdometerValue(100);
  //         setOdometerValue1(9999);
  //         setOdometerValue2(750);
  //         setOdometerValue3(910);
  //     }, 1000);
  // }, []);

  const [odometerValue, setOdometerValue] = useState(0);
  const [odometerValue1, setOdometerValue1] = useState(0);
  const [odometerValue2, setOdometerValue2] = useState(0);
  const [odometerValue3, setOdometerValue3] = useState(0);

  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (data !== null) {
        setOdometerValue(data?.[0].subject);
        setOdometerValue1(data?.[0].tutor);
        setOdometerValue2(data?.[0].questionSolved);
        setOdometerValue3(data?.[0].payout);
      } else {
        setOdometerValue(3);
        setOdometerValue1(2.5);
        setOdometerValue2(10);
        setOdometerValue3(910);
      }
    }, 1000);
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/gettutorodometer`);
      setData(response.data.info);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Odometer */}
      <div className='future-box-bg01 mb--20'>
        <div className='container'>
          <div className='row g-5'>
            {/* Start Single Counter  */}
            <div className='col-md-3 col-6'>
              <div className='counter-border d-md-flex align-items-center'>
                <div className='counter-text'>
                  <h3 className='counter mb--0'>
                    <span className='odometer'>
                      <Odometer
                        value={odometerValue}
                        format='(,ddd)'
                        theme='default'
                      />
                    </span>
                    <span className='count-text' />
                  </h3>
                  <span className='subtitle'>Subjects</span>
                </div>
              </div>
            </div>
            {/* End Single Counter  */}
            {/* Start Single Counter  */}
            <div className='col-md-3 col-6'>
              <div className='counter-border d-md-flex align-items-center'>
                <div className='counter-text'>
                  <h3 className='counter mb--0'>
                    <span className='odometer'>
                      <Odometer
                        value={odometerValue1}
                        format='(,ddd)'
                        theme='default'
                      />
                    </span>
                    <span className='count-text'>+</span>
                  </h3>
                  <span className='subtitle'>Tutors</span>
                </div>
              </div>
            </div>
            {/* End Single Counter  */}
            {/* Start Single Counter  */}
            <div className='col-md-3 col-6'>
              <div className='counter-border d-md-flex align-items-center'>
                <div className='counter-text'>
                  <h3 className='counter mb--0'>
                    <span className='odometer'>
                      <Odometer
                        value={odometerValue2}
                        format='(,ddd)'
                        theme='default'
                      />
                    </span>
                    <span className='count-text'>+</span>
                  </h3>
                  <span className='subtitle'>Solutions</span>
                </div>
              </div>
            </div>
            {/* End Single Counter  */}
            {/* Start Single Counter  */}
            <div className='col-md-3 col-6'>
              <div className='counter-border d-md-flex align-items-center'>
                <div className='counter-text'>
                  <h3 className='counter mb--0'>
                    <span className='odometer'>
                      <Odometer
                        value={odometerValue3}
                        format='(,ddd)'
                        theme='default'
                      />
                    </span>
                    <span className='count-text'>+</span>
                  </h3>
                  <span className='subtitle'>Payouts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Homecarousel />
    </>
  );
};

export default Testimonialarea;
