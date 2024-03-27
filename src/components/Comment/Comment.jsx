

const Comment = () => {


    return (
        <>
        <div className="text-xl mt-2 flex items-center"><span className="flex items-center me-2 justify-center h-10 w-10 rounded-full border-4 gc-border-green text-center text-2xl font-bold align-middle ">d</span></div>
        <div className="flex items-center mt-2 "><input type="text"  className="w-full border-b gc-border-black  p-2 " placeholder="Write a comment"  /><button className="gc-bg-green ms-4 text-white w-[110px] p-2 border rounded-lg hover:scale-110 duration-300" >POST</button></div>
        <div className="overflow-y-auto sm:mt-8 sm:ms-10 sm:me-10 h-[50vh]">
           
            
        </div>
    </>
    )

}
export default Comment;