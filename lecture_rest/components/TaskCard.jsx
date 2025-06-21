const TaskCard = ({ id, userId, title, completed }) => {
    return (
        <div
            className={`border-none rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-110 cursor-pointer
 bg-[#333333] bg-[#393e46]`}
        >
            <div className="flex  font-semibold text-xs mb-2 justify-between">
                <h2 className="">Item id: {id}</h2>
                <h2 className="">User id: {userId}</h2>
            </div>
            <p className="text-sm">Title : {title}</p>
            <div className="font-bold">
                {completed ? "Completed" : "Not completed"}
            </div>
        </div>
    )
}

export default TaskCard