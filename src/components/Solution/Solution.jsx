import PropTypes from "prop-types";
import { BiCopy } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Solution({data,className}){
    const styleForSolution = {
        boxShadow: "0px 5px 15px 0px rgba(50, 130, 50, 0.35)"
    }
    const styleForSolutionTitle = {
        boxShadow: "0px 5px 15px 0px rgba(50, 130, 50, 0.35)"
    }
    return (
        <div className={"bg-white px-3 pb-3 m-3 rounded-xl min-w-[300px] max-w-[1000px] " + className} style={styleForSolution} >

			<div className="flex justify-between items-center">
				<div className={"relative bg-white w-fit -translate-y-1/3 py-1 px-2 rounded-md" } style={styleForSolutionTitle}>{data.title}</div>
				<div className='flex justify-between items-center'>
					<BiCopy className='relative translate-y-2 text-3xl hover:scale-110 duration-200 gc-text-green' />
					{data.admin && <MdDeleteForever className='relative translate-y-2 text-3xl hover:scale-110 duration-200 mx-3 text-red-500' />}
					{data.admin && <FiEdit className='relative translate-y-2 text-2xl hover:scale-110 duration-200' />}
				</div>
			</div>

			<SyntaxHighlighter className="" language={data.language} style={github}>
				{data.solution}
			</SyntaxHighlighter>

		</div>
    );
}

Solution.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
}

export default Solution;