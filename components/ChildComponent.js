'use client';


import { useEffect } from 'react'


function ChildComponent() {

    useEffect(() => {
        // Do an ajax call for eg.
        console.log('Child Mounted or Updated');

        return () => {
            // Clear the timer for example
            console.log('Unmounting');
        }
    }, [])

    return (
        <h1>
            This was to be shown
        </h1>
    )
}

export default ChildComponent