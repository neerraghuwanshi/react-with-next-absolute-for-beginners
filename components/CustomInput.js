'use client';


import React, { useState } from 'react'


function CustomInput() {

    const [password, setPassword] = useState('')

    const changePassword = (event) => {
        const value = event.target.value
        setPassword(value)
    }

    return (
        <>
            <input
                value={password}
                onChange={changePassword}
            />
            {password.length < 10 && <h1>Invalid Password</h1>}
        </>
    )
}


export default CustomInput