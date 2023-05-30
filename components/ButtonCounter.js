'use client';


import React, { useState } from 'react'


function ButtonCounter() {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)

    const scalableCounter = () => {
        setCounter(counter+1)
        setCounter2(counter2+1)
        setCounter3(counter3+1)
        console.log(counter, counter2, counter3)
    }

    const scalableCounter2 = () => {
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        console.log(counter)
    }

    const scalableCounter3 = () => {
        const prevStateUpdate = (prev) => {
            return prev + 1
        }
        setCounter(prevStateUpdate)
        setCounter(prevStateUpdate)
        setCounter(prevStateUpdate)
        setCounter(prevStateUpdate)
        setCounter(prevStateUpdate)
        console.log(counter);
    }

    const scalableCounter4 = () => {
        setCounter(prev => prev + 1)
    }

    return (
        <div>
            <h2>
                Counter: {counter} {counter2} {counter3}
            </h2>
            <button onClick={scalableCounter4}>Update Counter</button>
        </div>
    )
}


export default ButtonCounter