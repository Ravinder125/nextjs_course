'use client'

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../Loading";

function RandomJokes() {
    const [randomJoke, setRandomJoke] = useState(null)
    const [showJoke, setShowJoke] = useState(false)
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const fetchRandomJokes = async () => {
        const res = await fetch(URL)
        const data = await res.json();
        console.log(data)
        setRandomJoke(data)
    }

    useEffect(() => {
        fetchRandomJokes();
    }, [])


    return (
        <Suspense fallback={<Loading />}>
            <div className="bg-[#3c3c3c] max-w-sm rounded mx-auto mt-20 shadow-md shadow-gray-600">
                <div className="p-5 text-center">

                    <div className="capitalize flex justify-between text-sm font-medium">
                        <h3>{randomJoke?.type}</h3>
                        <h3>{randomJoke?.id}</h3>
                    </div>

                    <Image
                        src='/images/tea.png'
                        width="60"
                        height="60"
                        alt="A cup of tea"
                        className="flex mx-auto"
                    />
                    <h2 className="mt-1 font-semibold text-2xl">Random Jokes Generator</h2>

                    <p className="mt-5 text-sm text-gray-200">{randomJoke?.setup}</p>



                    <div className="mt-3">
                        {!showJoke
                            ? (
                                <button onClick={() => setShowJoke(true)} className="text-sm px-4 py-2 rounded-md font-medium shadow shadow-yellow-600 bg-yellow-600 text-white hover:bg-yellow-500 cursor-pointer">Reveal Punchline</button>
                            )
                            : (
                                <div>
                                    <p className="mb-3">{randomJoke?.punchline} {" "} hahaha!</p>
                                    <button onClick={() => setShowJoke(false)} className="text-sm px-4 py-2 rounded-md font-medium shadow shadow-yellow-600 bg-yellow-600 text-white hover:bg-yellow-500 cursor-pointer">Hide Punchline</button>
                                </div>
                            )}
                    </div>

                    <button
                        className="mt-3 border px-4 py-1 bg-yellow-400 font-semibold hover:bg-yellow-200 transition-all duration-300 cursor-pointer rounded-md border-yellow-900 text-yellow-800"
                        onClick={() => fetchRandomJokes()}
                    >Next</button>
                </div>
            </div>
        </Suspense>
    )
}

export default RandomJokes