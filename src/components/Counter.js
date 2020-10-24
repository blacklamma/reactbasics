import React, { Component } from 'react'


class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(
            (prevState) => ({
                count: prevState.count + 1
            }),
            ()=>{console.log(this.state.count)}
        )
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
        )
    }

}
export default Counter