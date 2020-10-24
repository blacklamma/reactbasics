import React, {Component} from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'State A'
        }
    }
    changeMessage(){
        this.setState({
            message: 'State B'
        })

    }
    render(){

        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change State</button>
            </div>
        )
    }

}

export default Message