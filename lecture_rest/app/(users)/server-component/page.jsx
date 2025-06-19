import TaskCard from "@/components/TaskCard";

// It can be directly async 
const ServerComponent = async () => {

    const URL = "https://jsonplaceholder.typicode.com/todos"

    const res = await fetch(URL);
    const data = await res.json();

    return (
        <div>
            {/* <div onClick={()=> alert("This is awesome")}></div> */}
            {/* Event Listener won't work because it's a server component */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-5 p-5 ">
                {data?.map((item, idx) => (
                    <TaskCard
                        key={idx}
                        id={item.id}
                        userId={item.userId}
                        title={item.title}
                        completed={item.completed}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServerComponent