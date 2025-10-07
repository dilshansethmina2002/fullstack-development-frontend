import { useState } from "react"

export function Testing() {
    const [number,setNumber] = useState(0)

    function increment() {
        setNumber(number + 129)
    }
    function decrement() {
        setNumber(number - 129)
    }
    return(
        <div className="bg-blue-200 w-full h-screen flex flex-col justify-center items-center">
            <span className="text-9xl font-bold text-blue-900">{number}</span>
            <div>
                <button className="bg-green-500 text-white rounded hover:bg-green-700 p-3 m-2 w-12 cursor-pointer" onClick={increment}>+</button>
                <button className="bg-red-500 text-white rounded hover:bg-red-700 p-3 m-2 w-12 cursor-pointer" onClick={decrement}>-</button>
            </div>
        </div>
    )
}