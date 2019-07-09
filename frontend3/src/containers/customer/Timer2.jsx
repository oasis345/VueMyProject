import React, { Component } from 'react'
import { setInterval } from 'timers';
class Timer extends Component{
  constructor(props){
      super(props)
      this.test = this.test.bind(this)
      this.state ={
          seconds: 0
      }
  }
  tick(){
      this.setState({
          seconds: this.state.seconds + 1
      })
  }
  test(){
      this.interval = setInterval( () => this.tick(), 1000)
  }

  render(){
      return(
          <div>
              <input type="button" value={this.state.seconds} onClick={this.test}/>
              Seconds: {this.state.seconds}
          </div>
      )
  }
}
export default Timer;
//버튼클릭했을떄 이벤트생기게 하는곳