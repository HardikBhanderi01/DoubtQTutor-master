import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionList } from "../../redux/actions/QuestionAction";

const TrueFalseAnswer = () => {
const { id } = useParams();
  const dispatch = useDispatch();


  const [currentPage, setCurrentPage] = useState(1);
   const {question} = useSelector((state) => state.question);

    const getQuestionListApi = () => {
     const currentPageSkip = (currentPage - 1) * 5;
    const params = `?limit=5&skip=${currentPageSkip}`;
    dispatch(getQuestionList(params));
  };

  useEffect(() => {
    getQuestionListApi();
  }, [currentPage]);


  const assignedQuestionData = question ?.data || [];
  const queansFilter = assignedQuestionData?.filter((item)=>item.questionId === id)

  const answer =queansFilter?.[0]?.answer;
  return (
    <>
      <div className="col-lg-6">
        <div className="rbt-form-check p--10">
          <input
            className="form-check-input"
            type="radio"
            name="rbt-radio"
            id="rbt-radio-1"
            checked={answer === "true"}
          />
          <label className="form-check-label" htmlFor="rbt-radio-1">
            True
          </label>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="rbt-form-check p--10">
          <input
            className="form-check-input"
            type="radio"
            name="rbt-radio"
            id="rbt-radio-2"
            checked={answer === "false"}
          />
          <label className="form-check-label" htmlFor="rbt-radio-2">
            False
          </label>
        </div>
      </div>
    </>
  );
};

export default TrueFalseAnswer;
