import { useState } from "react"


// Note: Event Listeners can be used here because it's parent component is client-component which is client component

const Counter = () => {
    const [inc, setInc] = useState(0);
    return (
        <button
            className="text-xl bg-blue-500 rounded-md px-3 py-1 font-semibold cursor-pointer"
            onClick={() => setInc && setInc(prev => ++prev)}
        >Add +1 : {inc}</button>
    )
}

export default Counter