'use client';


import { useEffect, memo } from 'react'


function ChildComponent(props) {

    useEffect(() => {
        // Do an ajax call for eg.
        console.log('Child Mounted or Updated');
    })

    return (
        props.show &&
        <h1>
            This was to be shown
        </h1>
    )
}

export default memo(ChildComponent)