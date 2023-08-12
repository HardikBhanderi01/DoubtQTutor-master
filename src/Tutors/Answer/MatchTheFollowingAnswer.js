import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionList } from "../../redux/actions/QuestionAction";

const MatchTheFollowingAnswer = () => {
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

  let parsedAnswer;
  try {
    parsedAnswer = JSON.parse(answer);
  } catch (error) {
    return null;
  }

  return (
    <div>
      {parsedAnswer.map((value, index) => {
        return (
          <div key={index}>
            <span className="mx-3">{value.id} </span> ---&gt;
            <span className="mx-3">{value.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MatchTheFollowingAnswer;
