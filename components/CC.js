'use client'
import { Component } from 'react'


export class CC extends Component {
    constructor() {
        super()
        this.state = { count: 0 }
        this.increment = this.increment.bind(this)
    }

    increment() {
        console.log(this.state);
        this.setState(prev => ({count: prev.count+1}))
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>Increase</button>
                <h1> { this.state.count } </h1>
            </div>
        )
    }
}


export default CC