import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionList } from "../../redux/actions/QuestionAction";

const FillInBlanksAnswer = () => {

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

  if (!answer || answer === "") {
    return null;
  }

  const parsedAnswer = JSON.parse(answer);

  return (
    <div className="col-lg-6">

      {parsedAnswer.map((item, id) => {
        return (
          <div key={id}>
            <p>
              <span className="mx-3 fw-bolder">{id + 1}) </span>
              {item}
            </p>
          </div>)
      }
      )}
    </div>
  );
};

export default FillInBlanksAnswer;
