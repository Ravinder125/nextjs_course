'use client'


import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const ClientComp = () => {
    const [data, setData] = useState(null)
    const searchParams = useSearchParams()
    const [name, setName] = useState("")

    const fetchData = async () => {
        const isSearchParams = name || !name === ""
        const res = isSearchParams && await fetch(`https://api.genderize.io/?name=${name}`)
        const data = res ? await res.json() : null
        setData(data)
    }

    useEffect(() => {
        setName(searchParams.get("name"))
        fetchData()
    }, [name])

    return (
        <div className="min-h-screen flex justify-center w-full items-center">
            {data?.name ? (
                <div className="w-fit rounded-md p-10 bg-[#1c1c1c] shadow-md shadow-[#2c2c2c]">
                    <h1 className="text-4xl font-bold text-center mb-3  text-white">{data?.name.toUpperCase()}</h1>
                    <p className="text-lg font-semibold">gender: {data?.gender?.toUpperCase()}</p>
                    <p className="text-lg font-semibold" >count: {data?.count}</p>
                    <p className="text-lg font-semibold">probability: {data?.probability * 100}%</p>
                </div>
            ) : name === "" ? (
                <p>No name is provided</p>
            ) : (
                <div className="my-10 capitalize text-[#2c2c2c] mx-auto w-fit rounded-md p-10 bg-[#1c1c1c]">
                    <h1 className="text-3xl text-center mb-3 bg-[#2c2c2c] rounded-md">RAVINDER</h1>
                    <p className=" bg-[#2c2c2c] mt-2 rounded-md" >COUNT</p>
                    <p className=" bg-[#2c2c2c] mt-2 rounded-md">GENDER</p>
                    <p className=" bg-[#2c2c2c] mt-2 rounded-md">PROBABILITY</p>
                </div>
            )
            }
        </div >
    )
}

export default ClientComp