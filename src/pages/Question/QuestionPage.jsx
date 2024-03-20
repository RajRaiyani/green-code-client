import{ useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetQuestionById } from "../../hooks/data";
import { FaCircle } from "react-icons/fa";
import { AuthContext } from "../../services/context/AuthContext";
import { Solution } from "../../components/Solution";
import { AiOutlineHeart } from "react-icons/ai";

function QuestionPage() {
	const { isLoggedIn } = useContext(AuthContext);
	const params = useParams();

	const [question] = useGetQuestionById(params.id);

	function Level() {
		var questionLevel = question.level?.toLowerCase();
		if (questionLevel === "hard")
			return <FaCircle className="text-red-600 text-xs" />;
		if (questionLevel === "medium")
			return <FaCircle className="text-orange-400 text-xs" />;
		if (questionLevel === "easy")
			return <FaCircle className="gc-text-green text-xs" />;
	}

	function SolutionList() {
		const solutionData = {
			title: "Solution",
			solution: "System.out.println('hello world');",
			admin: true,
			language: "Java",
		};
	
		return (
			<Solution
				data={solutionData} // Pass data as a function
				className="my-6"
			/>
		);
	}
	console.log(question);
	return (
		<div className="h-full flex">
			<div className="w-[100%] mx-5 mb-5">
				<div className={`${isLoggedIn ? "p-2" : ""}`}>
					{isLoggedIn && (
						<>
							<button className="border gc-border-green gc-text-green rounded-md px-2 py-1 mx-0.5 gc-hover-bg-green hover:text-white">
								Question
							</button>
							<button className="border gc-border-green gc-text-green rounded-md px-2 py-1 mx-0.5 gc-hover-bg-green hover:text-white">
								Comment
							</button>
						</>
					)}
				</div>
				<div className="mt-4">
					<span className=" text-2xl font-bold">
						{question.number}
					</span>
					<span className="text-xl p-2 font-light">
						{question.title}
					</span>
					<div className="flex justify-between mb-2">
						<div className="flex items-center">
							<Level />
							<span className="text-sm ms-1">
								{question.level}
							</span>
						</div>
						<div className="flex gap-2">
							<div className="text-sm">{question.likes}</div>
							<AiOutlineHeart className={`mx-auto text-xl gc-text-green ${question?.isLiked ? "gc-bg-green":""}`} />
						</div>
					</div>
				</div>
				<div className="w-full overflow-auto md:h-[65vh] border gc-border-green p-4 rounded-md">
					{question.body}
				</div>
			</div>
			{isLoggedIn && (
				<div className="w-[50%]">
					<SolutionList />
				</div>
			)}
		</div>
	);
}

export default QuestionPage;
