'use client';


import { useState } from 'react'


function ParentComponent() {

    const [show, setShow] = useState(false)

    const onClickHandler = () => {
        setShow(prev => !prev)
    }

    console.log('Running');

    return (
        <>
            <button onClick={onClickHandler}>
                Toggle
            </button>
            {
                show &&
                <h1>
                    This was to be shown
                </h1>
            }
        </>
    )
}

export default ParentComponent