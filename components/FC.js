'use client'
import { useState } from "react";


function FC() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={increment}>Increase</button>
            <h1> { count } </h1>
        </div>
    )
}


export default FC;
