'use client';


import { useState } from 'react'
import ChildComponent from './ChildComponent';


function ParentComponent() {

    const [show, setShow] = useState(false)

    const onClickHandler = () => {
        setShow(prev => !prev)
    }

    return (
        <>
            <button onClick={onClickHandler}>
                Toggle
            </button>
            {
                show &&
                <ChildComponent />
            }
        </>
    )
}

export default ParentComponent