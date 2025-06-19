"use client"

import { useEffect, useState } from "react"
import Counter from "./Counter"
import TaskCard from "@/components/TaskCard"



const ClientComponent = () => {
    const URL = "https://jsonplaceholder.typicode.com/todos"

    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(URL)
            const data = await res.json();

            setData(data);
        }

        fetchData();
    }, [])
    return (
        <div className="min-h-screen">
            <div className="flex justify-center gap-5 items-center mb-3">
                <h1>Client Comp</h1>
                <Counter />
            </div>

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
export default ClientComponent