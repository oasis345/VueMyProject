import React, { Component } from 'react'
import Prac from './Prac.jsx'

class Prac2 extends Component{
    constructor(props){
        super(props)
        this.name = '채형국jhj'
        this.state={

        }
    }
    render(){
        return(
            <div style={{margin : 50, color : 'red'}}>
                {this.name}
                <div>
                   
                    {/* 외부 함수 호출 */}
                    <Prac></Prac>

                    {/* namename 이라는 키와 = {this.name} 프랙2에 this.name이란 데이터를 prac1에 전송 */}
                    <Prac namename={this.name}></Prac>
                </div>
            </div>
        )
    }

}
export default Prac2