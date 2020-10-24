import React from 'react'

function FunctionClick(props){

    let alertButton
    alertButton = <div><button onClick={() => props.clickHandler('Rudra')}>Click</button></div>
    return props.isLoggedin && alertButton
}

export default FunctionClick