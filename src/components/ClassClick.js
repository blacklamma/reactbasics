import React, {Component} from 'react'
import FunctionClick from './FunctionClick'

class ClassClick extends Component{
    constructor(props){
        super(props)
        this.state = {counter: 0, isLoggedin: true}
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(data){
        this.setState(
            (prevState) => ({
                counter: prevState.counter + 1
            }),
            ()=>{
                alert('Hello ' + data + '-' + this.state.counter)
            }
        )
    }
    render(){
        return(
            <div>
                <FunctionClick clickHandler={this.clickHandler} isLoggedin={this.state.isLoggedin}/>
            </div>
        )
    }
}
export default ClassClick