import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

const ExamTimer = forwardRef(
  (
    { currentQuestion, questions, setCurrentQuestion, secondsTimer = "" },
    ref
  ) => {
    const [seconds, setSeconds] = useState(secondsTimer || 60);
    const minutes = Math.floor(seconds / 60);
    const secondsTime = seconds - minutes * 60;
    // console.log("seconds", seconds);
    useEffect(() => {
      const timer =
        seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(timer);
    }, [seconds]);

    useEffect(() => {
      if (seconds === 0 && currentQuestion < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSeconds(60);
      }
    }, [seconds]);
    useImperativeHandle(ref, () => {
      return { resetTimer: (seconds) => setSeconds(seconds) };
    });
    return (
      <>
        {seconds === 0 ? (
          <p>skip...</p>
        ) : (
          <p>
            {minutes} m:
            {secondsTime < 10 ? `0${secondsTime}` : secondsTime}s
          </p>
        )}
      </>
    );
  }
);

export default ExamTimer;
