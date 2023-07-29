'use client';


import { useState, useEffect } from 'react'
import ChildComponent from './ChildComponent';


function ParentComponent() {

    const [show, setShow] = useState(false)

    // Inse bhi update ho jata hai component
    // useSelector()
    // useReducer()

    useEffect(() => {
        // Do an ajax call for eg.
        console.log('Parent Mounted or Updated');
    })

    const onClickHandler = () => {
        setShow(prev => !prev)
    }

    return (
        <>
            <button onClick={onClickHandler}>
                Toggle
            </button>
            <ChildComponent show={show}/>
        </>
    )
}

export default ParentComponent