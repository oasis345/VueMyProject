import React, { Component } from 'react'
import ListNames from '../../components/ListNames';

const listData = ['김유신','강감찬','유관순']

class Hello extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '채형국'
        }
    }
    render(){
        return(
            <div>
                <ListNames data={listData}>

                </ListNames>

              
            </div>
        );
    }
}
export default Hello;