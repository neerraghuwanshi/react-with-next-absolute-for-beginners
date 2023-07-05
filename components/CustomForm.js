'use client';

import { useState } from 'react'


function CustomForm() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(username, password)
        // Ajax Calls

        // Get Request
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))

        // Post Request
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: username,
                body: password,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} id='formContainer'>
                <input 
                    value={username}
                    className='formInput'
                    onChange={event => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    className='formInput'
                    onChange={event => setPassword(event.target.value)}
                />
                <button
                    className='formInput'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}


export default CustomForm