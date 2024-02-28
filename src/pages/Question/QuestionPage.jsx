import { useParams } from "react-router-dom";
import { useGetQuestionById } from "../../hooks/data";
import { FaCircle } from "react-icons/fa";


function QuestionPage(){

  const params = useParams();


  const [question] = useGetQuestionById(params.id);
  function Level() {
    var questionLevel = question.level?.toLowerCase();
    if (questionLevel === "hard") return (<FaCircle className="text-red-600 text-xs" />);
    if (questionLevel === "medium") return (<FaCircle className="text-orange-400 text-xs" />);
    if (questionLevel === "easy") return (<FaCircle className="gc-text-green text-xs" />);
  }

    return (
        <div className="h-full flex">
            <div className="w-full">
              <div className="p-2">
                <button className="border gc-border-green gc-text-green rounded-s-md px-2 py-1 mx-0.5 gc-hover-bg-green hover:text-white">Question</button>
                <button className="border gc-border-green gc-text-green rounded-e-md px-2 py-1 mx-0.5 gc-hover-bg-green hover:text-white">Comment</button>
              </div>
              <div className="flex items-center p-2 justify-between">
                <div>
                  <p>{question.title}</p>
                  <div className="flex items-center"><Level /><span className="text-sm ms-1">Level</span></div>
                </div>
                <div>
                  like
                </div>
              </div>
              <div>
                <p>{question.body}</p>

              </div>
            </div>
            <div className="max-w-1/2">

            </div>
        </div>
    );
}


export default QuestionPage;