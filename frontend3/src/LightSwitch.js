import React, { Component } from 'react'

class LightSwitch extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state ={
             power:false
         }
}
handleClick(){
    this.setState({
        power: !this.state.power
    })
}
    render(){
        return(
            <div>
                <p>{this.state.power ? 'on' : 'off'}</p>
                <button onClick={this.handleClick}>Switch</button>
            </div>
        )
    }
}
export default LightSwitch;