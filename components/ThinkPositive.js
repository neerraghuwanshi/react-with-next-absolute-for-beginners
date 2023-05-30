'use client';


import React, { useState } from 'react'


function ThinkPositive() {

    const [statement, setStatement] = useState('I am not good at programming')

    const becomePositive = () => {
        // Changing Heading Logic
        let positiveStatement = 'I will work hard and be good at programming'
        setStatement(positiveStatement)
        // console.log(statement);
    }

    return (
        <div>
            <h2 id={'statementId'}>{statement}</h2>
            <button onClick={becomePositive}> Think Positive </button>
        </div>
    )
}


export default ThinkPositive